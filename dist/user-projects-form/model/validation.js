import {combine, createEffect, createEvent, forward, restore, sample} from "../../pkg/effector.js";
import {apiClient} from "../../api/index.js";
import {$username, $usernameInnerError, usernameTouched} from "./username.js";
import {$projectNames} from "./project-name.js";
import {$projectDetails, allProjectsDetailsTouched} from "./project-details.js";
import {viewModeSwitchedToJson} from "./main.js";
const saveParsedData = createEvent();
export const $parsedDetails = restore(saveParsedData, {details: [], projects: [], username: ""});
export const triedSwitchToJsonPreview = createEvent();
export const triedToSave = createEvent();
const validateProjectsDataForJsonPreview = createEvent();
const validateProjectsDataForSavingData = createEvent();
forward({
  from: [validateProjectsDataForJsonPreview, validateProjectsDataForSavingData],
  to: [usernameTouched, allProjectsDetailsTouched]
});
const $fullFormErrors = combine({
  usernameError: $usernameInnerError,
  pDetails: $projectDetails
});
const $fullForm = combine({
  username: $username,
  projectNames: $projectNames,
  projectDetails: $projectDetails
});
const validateProjectsDataForJsonPreviewFx = createEffect(validateForm);
const validateProjectsDataForSavingDataFx = createEffect(validateForm);
const parseProjectsDataForJsonPreviewFx = createEffect(convertDataToParsed);
const parseProjectsDataForSavingDataFx = createEffect(convertDataToParsed);
forward({
  from: triedSwitchToJsonPreview,
  to: validateProjectsDataForJsonPreview
});
sample({
  clock: validateProjectsDataForJsonPreview,
  source: $fullFormErrors,
  target: validateProjectsDataForJsonPreviewFx
});
sample({
  clock: validateProjectsDataForJsonPreviewFx.done,
  source: $fullForm,
  target: parseProjectsDataForJsonPreviewFx
});
forward({
  from: parseProjectsDataForJsonPreviewFx.doneData,
  to: saveParsedData
});
forward({
  from: parseProjectsDataForJsonPreviewFx.done,
  to: viewModeSwitchedToJson
});
forward({
  from: triedToSave,
  to: validateProjectsDataForSavingData
});
sample({
  clock: validateProjectsDataForSavingData,
  source: $fullFormErrors,
  target: validateProjectsDataForSavingDataFx
});
sample({
  clock: validateProjectsDataForSavingDataFx.done,
  source: $fullForm,
  target: parseProjectsDataForSavingDataFx
});
const saveParsedDataFx = createEffect(apiClient.saveProjectsData);
forward({
  from: parseProjectsDataForSavingDataFx.doneData,
  to: [saveParsedData, saveParsedDataFx]
});
function validateForm({pDetails, usernameError}) {
  return new Promise((resolve, reject) => {
    if (usernameError) {
      reject();
      return;
    }
    const errorInDetails = pDetails.find(({error}) => {
      return error.description !== "" || error.name !== "" || error.duration !== "";
    });
    if (errorInDetails) {
      reject();
      return;
    }
    resolve();
  });
}
function convertDataToParsed({projectNames, projectDetails, username}) {
  return new Promise((resolve) => {
    resolve({
      username,
      projects: projectNames,
      details: projectDetails.map((pd) => ({
        projectName: pd.name,
        description: pd.description,
        duration: {
          unit: pd.duration.unit,
          value: pd.duration.value
        }
      }))
    });
  });
}

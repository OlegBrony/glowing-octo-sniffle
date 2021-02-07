import { combine, createEffect, createEvent, forward, restore, sample, StoreValue } from 'effector';
import type { ParsedDetails } from '../../api/types';
import { apiClient } from '../../api';
import { $username, $usernameInnerError, usernameTouched } from './username';
import { $projectNames } from './project-name';
import { $projectDetails, allProjectsDetailsTouched } from './project-details';
import { viewModeSwitchedToJson } from './main';

/**
 * we have several event from the outside world that we want to support:
 * store data in editable form,
 * validate for the form,
 * save data.
 * */

/**
 * store for saved data in json view mode
 * */
const saveParsedData = createEvent<ParsedDetails>()
export const $parsedDetails = restore(saveParsedData, { details: [], projects: [], username: '' })

/**
 * we only want to export two events:
 * intention for viewing in json,
 * intention to just save the data.
 * */
export const triedSwitchToJsonPreview = createEvent()
export const triedToSave = createEvent()

/**
 * basic flow will looked like this:
 * 0. get the intention from user
 * 1. make all needed field in form ass touched
 * 2. start validation for the form (*)
 * 2.2. prevent the event if the validation failed
 * 3. execute the event
 * */
const validateProjectsDataForJsonPreview = createEvent()
const validateProjectsDataForSavingData = createEvent()

forward({
  from: [validateProjectsDataForJsonPreview, validateProjectsDataForSavingData],
  to: [usernameTouched, allProjectsDetailsTouched],
})

/** (*)
 * as we have errors in some part of the form, we leave the validation to them and just look at the error messages
 * details field has a little more complicated validation rules, so we need to validate them by ourselves
 * */
const $fullFormErrors = combine({
  usernameError: $usernameInnerError,
  pDetails: $projectDetails,
})
const $fullForm = combine({
  username: $username,
  projectNames: $projectNames,
  projectDetails: $projectDetails,
})

const validateProjectsDataForJsonPreviewFx = createEffect<StoreValue<typeof $fullFormErrors>, void>(validateForm)
const validateProjectsDataForSavingDataFx = createEffect<StoreValue<typeof $fullFormErrors>, void>(validateForm)
const parseProjectsDataForJsonPreviewFx = createEffect<StoreValue<typeof $fullForm>, ParsedDetails>(convertDataToParsed)
const parseProjectsDataForSavingDataFx = createEffect<StoreValue<typeof $fullForm>, ParsedDetails>(convertDataToParsed)
/** logic for 'viewing in json' event */
forward({
  from: triedSwitchToJsonPreview,
  to: validateProjectsDataForJsonPreview,
})

sample({
  clock: validateProjectsDataForJsonPreview,
  source: $fullFormErrors,
  target: validateProjectsDataForJsonPreviewFx,
})

sample({
  clock: validateProjectsDataForJsonPreviewFx.done,
  source: $fullForm,
  target: parseProjectsDataForJsonPreviewFx,
})

forward({
  from: parseProjectsDataForJsonPreviewFx.doneData,
  to: saveParsedData,
})
forward({
  from: parseProjectsDataForJsonPreviewFx.done,
  to: viewModeSwitchedToJson,
})
/** logic for 'save' event */
forward({
  from: triedToSave,
  to: validateProjectsDataForSavingData,
})
sample({
  clock: validateProjectsDataForSavingData,
  source: $fullFormErrors,
  target: validateProjectsDataForSavingDataFx,
})
sample({
  clock: validateProjectsDataForSavingDataFx.done,
  source: $fullForm,
  target: parseProjectsDataForSavingDataFx,
})
const saveParsedDataFx = createEffect<ParsedDetails, void>(apiClient.saveProjectsData)
forward({
  from: parseProjectsDataForSavingDataFx.doneData,
  to: [saveParsedData, saveParsedDataFx]
})


function validateForm({ pDetails, usernameError }: StoreValue<typeof $fullFormErrors>): Promise<void> {
  return new Promise((resolve, reject) => {
    if (usernameError) {
      reject()
      return
    }
    const errorInDetails = pDetails.find(({ error }) => {
      return error.description !== '' || error.name !== '' || error.duration !== ''
    })
    if (errorInDetails) {
      reject()
      return
    }
    resolve()
  })
}
function convertDataToParsed({ projectNames, projectDetails, username }: StoreValue<typeof $fullForm>): Promise<ParsedDetails> {
  return new Promise((resolve) => {
    resolve({
      username,
      projects: projectNames,
      details: projectDetails.map((pd) => ({
        projectName: pd.name,
        description: pd.description,
        duration: {
          unit: pd.duration.unit,
          value: pd.duration.value,
        }
      }))
    })
  })
}

import { combine, createEffect, createEvent, createStore, forward, restore, sample, StoreValue } from 'effector';
import type { ParsedDetails } from '../../api/types';
import { apiClient } from '../../api';
import { $username, $usernameInnerError, usernameTouched } from './username';
import { $projectNames } from './project-name';
import { $projectDetails, allProjectsDetailsTouched } from './project-details';

export const $viewMode = createStore<'form' | 'json'>('form')
export const viewModeSwitched = createEvent<StoreValue<typeof $viewMode>>()
export const viewModeSwitchedToJson = createEvent()
export const viewModeSwitchedToForm = createEvent()
$viewMode
  .on(viewModeSwitched, (_, newMode) => newMode)
  .on(viewModeSwitchedToJson, () => 'json')
  .on(viewModeSwitchedToForm, () => 'form')

const saveParsedData = createEvent<ParsedDetails>()
export const $parsedDetails = restore(saveParsedData, { details: [], projects: [], username: '' })

export const triedSwitchToJsonPreview = createEvent()
export const triedToSave = createEvent()

const validateProjectsDataForJsonPreview = createEvent()
const validateProjectsDataForSavingData = createEvent()

forward({
  from: [validateProjectsDataForJsonPreview, validateProjectsDataForSavingData],
  to: [usernameTouched, allProjectsDetailsTouched],
})

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

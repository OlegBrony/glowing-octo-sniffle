import { createEffect, forward, createApi, createEvent, createStore, StoreValue } from 'effector';
import { apiClient } from '../../api';

/**
 * main model with general units
 * */
export const $isUserProjectsFormOpened = createStore(false)

export const userProjectsFormApi = createApi($isUserProjectsFormOpened, {
  userProjectsFormOpened: () => true,
  userProjectsFormClosed: () => false,
  toggleUserProjectsFormOpen: (isOpen) => !isOpen,
})

export const $viewMode = createStore<'form' | 'json'>('form')
export const viewModeSwitched = createEvent<StoreValue<typeof $viewMode>>()
export const viewModeSwitchedToJson = createEvent()
export const viewModeSwitchedToForm = createEvent()
$viewMode
  .on(viewModeSwitched, (_, newMode) => newMode)
  .on(viewModeSwitchedToJson, () => 'json')
  .on(viewModeSwitchedToForm, () => 'form')

export const formMounted = createEvent()
export const getProjectsDataFx = createEffect(apiClient.getProjectsData)
forward({
  from: formMounted,
  to: getProjectsDataFx,
})

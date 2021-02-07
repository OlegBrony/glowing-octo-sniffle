import { createEffect, forward, createApi, createEvent, createStore } from 'effector';
import { apiClient } from '../../api';

export const $isUserProjectsFormOpened = createStore(false)

export const userProjectsFormApi = createApi($isUserProjectsFormOpened, {
  userProjectsFormOpened: () => true,
  userProjectsFormClosed: () => false,
  toggleUserProjectsFormOpen: (isOpen) => !isOpen,
})

export const formMounted = createEvent()
export const getProjectsDataFx = createEffect(apiClient.getProjectsData)
forward({
  from: formMounted,
  to: getProjectsDataFx,
})

import { createEvent, createStore, sample } from 'effector';
import { TimeUnits } from '../../api/types';
import type { ProjectDetails } from '../types';
import { getProjectsDataFx } from './main';
import { forward } from 'effector/compat';

export const $projectDetails = createStore<ProjectDetails[]>([])

/**
 * identifier for detail items
 * */
const $newPDKey = createStore(0)
const idIncremented = createEvent()
const idAssigned = createEvent<number>()
$newPDKey
  .on(idIncremented, (prev) => prev + 1)
  .on(idAssigned, (_, n) => n)

export const newProjectDetailsTriedToAdd = createEvent()
const newProjectDetailsAdded = createEvent<number>()
sample({
  clock: newProjectDetailsTriedToAdd,
  source: $newPDKey,
  target: [newProjectDetailsAdded, idIncremented],
})
$projectDetails.on(newProjectDetailsAdded, (prev, pdId) => [
  ...prev,
  {
    id: `${pdId}`,
    name: '',
    description: '',
    error: { description: '', duration: '', name: '' },
    isTouched: { description: false, duration: false, name: false },
    duration: { unit: TimeUnits.Month, value: 0 },
  },
])

export const projectDetailsRemoved = createEvent<string>()
export const projectDetailsNameChanged = createEvent<{ id: string; newName: string }>()
export const projectDetailsDescriptionChanged = createEvent<{ id: string; value: string }>()
export const projectDetailsDurationUnitChanged = createEvent<{ id: string; unit: TimeUnits }>()
export const projectDetailsDurationValueChanged = createEvent<{ id: string; value: number }>()
export const allProjectsDetailsTouched = createEvent()
$projectDetails
  .on(projectDetailsRemoved, (prev, removedId) => {
    return prev.filter((pd) => pd.id !== removedId)
  })
  .on(projectDetailsNameChanged, (prev, { id, newName }) => {
    return prev.map((pd) => {
      if (pd.id !== id) return pd
      return {
        ...pd,
        name: newName,
        error: {
          ...pd.error,
          name: newName === '' ? 'Required' : '',
        },
        isTouched: {
          ...pd.isTouched,
          name: true,
        },
      }
    })
  })
  .on(projectDetailsDescriptionChanged, (prev, { id, value }) => {
    return prev.map((pd) => {
      if (pd.id !== id) return pd
      return {
        ...pd,
        description: value,
        error: {
          ...pd.error,
          description: value === '' ? 'Required' : '',
        },
        isTouched: {
          ...pd.isTouched,
          description: true,
        },
      }
    })
  })
  .on(projectDetailsDurationUnitChanged, (prev, { id, unit }) => {
    return prev.map((pd) => {
      if (pd.id !== id) return pd
      return {
        ...pd,
        duration: { unit, value: pd.duration.value },
        error: {
          ...pd.error,
          duration: pd.duration.value === 0 ? 'Required' : '',
        },
        isTouched: {
          ...pd.isTouched,
          duration: true,
        },
      }
    })
  })
  .on(projectDetailsDurationValueChanged, (prev, { id, value }) => {
    return prev.map((pd) => {
      if (pd.id !== id) return pd
      return {
        ...pd,
        duration: { value, unit: pd.duration.unit },
        error: {
          ...pd.error,
          duration: value === 0 ? 'Required' : '',
        },
        isTouched: {
          ...pd.isTouched,
          duration: true,
        },
      }
    })
  })
  .on(allProjectsDetailsTouched, (prev) => prev.map((pd) => ({
    ...pd,
    isTouched: {
      description: true,
      duration: true,
      name: true,
    },
    error: {
      name: pd.name === '' ? 'Required' : '',
      duration: pd.duration.value === 0 ? 'Required' : '',
      description: pd.description === '' ? 'Required' : '',
    }
  })))
  .on(getProjectsDataFx.doneData, (prev, data) => {
    if (!data) return undefined
    let id = 0
    return data.details.map((details) => {
      id += 1
      return {
        id: `${id}`,
        ...details,
        name: details.projectName,
        isTouched: { description: false, name: false, duration: false },
        error: { duration: '', name: '', description: '' },
      }
    })
  })
forward({
  from: getProjectsDataFx.doneData.map((data) => {
    if (data) return data.details.length + 1
    return 0
  }),
  to: idAssigned,
})
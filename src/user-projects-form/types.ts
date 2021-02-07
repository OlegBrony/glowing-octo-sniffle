import type { TimeUnits } from '../api/types';

export type ProjectDetails = {
  id: string
  name: string
  description: string
  error: {
    name: string
    description: string
    duration: string
  }
  isTouched: {
    name: boolean
    description: boolean
    duration: boolean
  }
  duration: {
    unit: TimeUnits
    value: number
  }
}
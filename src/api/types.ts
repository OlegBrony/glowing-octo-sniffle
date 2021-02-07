export enum TimeUnits {
  Month = 'month',
  Year = 'year',
}
export type ParsedDetails = {
  username: string
  projects: string[]
  details: {
    projectName: string
    description: string
    duration: {
      unit: TimeUnits
      value: number
    }
  }[]
}

import type { ParsedDetails } from './types';

export const apiClient = {
  getProjectsData(): ParsedDetails | null {
    const data = localStorage.getItem('users_projects')
    if (!data) {
      return null
    }
    return JSON.parse(data)
  },
  saveProjectsData(data: ParsedDetails) {
    localStorage.setItem('users_projects', JSON.stringify(data))
  },
}
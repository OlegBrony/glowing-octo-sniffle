export const apiClient = {
  getProjectsData() {
    const data = localStorage.getItem("users_projects");
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  },
  saveProjectsData(data) {
    localStorage.setItem("users_projects", JSON.stringify(data));
  }
};

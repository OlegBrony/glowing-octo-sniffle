import {combine, createEvent, createStore, forward, guard} from "../../pkg/effector.js";
import {createFormField} from "../../lib/create-form-field.js";
import {getProjectsDataFx} from "./main.js";
export const $projectNames = createStore([]);
const projectNameAdded = createEvent();
const newProjectNameField = createFormField({
  defaultValue: "",
  reducer: (_, e) => e.target.value,
  rules: {
    required: "Required"
  },
  clearTouchEvent: projectNameAdded
});
export const $newProjectName = newProjectNameField.$store;
export const newProjectNameChanged = newProjectNameField.storeChanged;
$newProjectName.reset(projectNameAdded);
const $hasNewProjectNameInProjects = combine($projectNames, $newProjectName, (existingNames, newName) => {
  return Boolean(existingNames.find((en) => en.toLowerCase() === newName.toLowerCase()));
});
const $isNewProjectNameValid = combine(newProjectNameField.$innerError, $hasNewProjectNameInProjects, (innerError, hasTheSameName) => !innerError && !hasTheSameName);
export const $newProjectNameError = combine(newProjectNameField.$isFieldTouched, newProjectNameField.$error, $hasNewProjectNameInProjects, (isTouched, innerError, hasTheSameName) => {
  if (!isTouched)
    return "";
  if (innerError)
    return innerError;
  if (hasTheSameName)
    return "Already exist";
  return "";
});
export const newProjectNameTouched = newProjectNameField.fieldTouched;
export const newProjectNameTriedToAdd = createEvent();
guard({
  source: $newProjectName,
  clock: newProjectNameTriedToAdd,
  filter: $isNewProjectNameValid,
  target: projectNameAdded
});
forward({
  from: newProjectNameTriedToAdd,
  to: newProjectNameField.fieldTouched
});
export const projectNameRemoved = createEvent();
$projectNames.on(projectNameAdded, (names, newName) => [...names, newName]).on(projectNameRemoved, (names, nameToRemove) => {
  return names.filter((name) => name !== nameToRemove);
}).on(getProjectsDataFx.doneData, (_, data) => {
  if (data)
    return data.projects;
});

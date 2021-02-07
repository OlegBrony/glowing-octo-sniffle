import React from "../../../_snowpack/pkg/react.js";
import {useStore} from "../../../_snowpack/pkg/effector-react.js";
import {Select} from "../../ui/index.js";
import {ProjectDetailsItemTemplate} from "../templates/index.js";
import {$projectNames, projectDetailsNameChanged} from "../model/index.js";
export const ProjectDetailsName = ({projectDetails}) => {
  const projectNames = useStore($projectNames);
  let nameList = [
    {label: "Choose project", value: ""},
    ...projectNames.map((name) => ({label: name, value: name}))
  ];
  const handlePDNameChange = (e) => {
    projectDetailsNameChanged({id: projectDetails.id, newName: e.target.value});
  };
  return /* @__PURE__ */ React.createElement(ProjectDetailsItemTemplate, {
    title: "Project"
  }, /* @__PURE__ */ React.createElement(Select, {
    options: nameList,
    value: projectDetails.name,
    onChange: handlePDNameChange,
    isError: projectDetails.isTouched.name && !!projectDetails.error.name,
    error: projectDetails.error.name
  }));
};

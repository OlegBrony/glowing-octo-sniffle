import React from "../../pkg/react.js";
import {TextArea} from "../../ui/index.js";
import {ProjectDetailsItemTemplate} from "../templates/index.js";
import {projectDetailsDescriptionChanged} from "../model/index.js";
export const ProjectDetailsDescription = ({projectDetails}) => {
  const handlePDDescriptionChange = (e) => {
    projectDetailsDescriptionChanged({id: projectDetails.id, value: e.target.value});
  };
  return /* @__PURE__ */ React.createElement(ProjectDetailsItemTemplate, {
    title: "Details"
  }, /* @__PURE__ */ React.createElement(TextArea, {
    onChange: handlePDDescriptionChange,
    isError: projectDetails.isTouched.description && !!projectDetails.error.description,
    helperText: projectDetails.error.description
  }));
};

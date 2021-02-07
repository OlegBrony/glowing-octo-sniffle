import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {ProjectDetailsItemTemplate} from "../templates/index.js";
import {DurationUnitValue, DurationUnit} from "../atoms/index.js";
export const ProjectDetailsDuration = ({projectDetails}) => {
  return /* @__PURE__ */ React.createElement(ProjectDetailsItemTemplate, {
    title: "Duration"
  }, /* @__PURE__ */ React.createElement(ProjectDetailsDurationWrapper, null, /* @__PURE__ */ React.createElement(DurationUnitValue, {
    projectDetails
  }), /* @__PURE__ */ React.createElement(DurationUnit, {
    pdId: projectDetails.id,
    value: projectDetails.duration.unit
  })));
};
const ProjectDetailsDurationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

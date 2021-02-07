import React from "../../pkg/react.js";
import {useStore} from "../../pkg/effector-react.js";
import styled from "../../pkg/styled-components.js";
import {Username} from "../atoms/index.js";
import {ProjectsNames} from "../molecules/index.js";
import {$parsedDetails, $viewMode} from "../model/index.js";
import {ProjectsDetailsList} from "./project-details-list.js";
export const FormMainContent = () => {
  const viewMode = useStore($viewMode);
  return /* @__PURE__ */ React.createElement(FormMainWrapper, null, viewMode === "form" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Username, null), /* @__PURE__ */ React.createElement(ProjectsNames, null), /* @__PURE__ */ React.createElement(ProjectsDetailsList, null)), viewMode === "json" && /* @__PURE__ */ React.createElement(FormJsonView, null));
};
const FormMainWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  max-height: 60rem;
  overflow: auto;
`;
const FormJsonView = () => {
  const parsedDetails = useStore($parsedDetails);
  return /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(parsedDetails, null, 2));
};

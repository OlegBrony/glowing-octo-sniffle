import React from "../../pkg/react.js";
import styled from "../../pkg/styled-components.js";
export const ProjectDetailsItemTemplate = ({children, title}) => {
  return /* @__PURE__ */ React.createElement(ProjectDetailsItemWrapper, null, /* @__PURE__ */ React.createElement(ProjectDetailsItemHeader, null, title), children);
};
const ProjectDetailsItemWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1rem;
`;
const ProjectDetailsItemHeader = styled.h5`
  font-size: 1rem;
  margin: 5px 0 0;
`;

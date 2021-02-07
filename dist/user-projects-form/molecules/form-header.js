import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {IconButton} from "../../ui/index.js";
import {userProjectsFormApi} from "../model/index.js";
export const FormHeader = () => {
  return /* @__PURE__ */ React.createElement(FormHeaderWrapper, null, /* @__PURE__ */ React.createElement(HeaderText, null, "User projects"), /* @__PURE__ */ React.createElement(CloseIcon, null));
};
const FormHeaderWrapper = styled.header`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
  grid-template-columns: 1fr min-content;
  justify-content: space-between;
`;
const HeaderText = styled.h3`
  margin: 0 1rem 0 0;
`;
const CloseIcon = () => {
  const handleClose = () => userProjectsFormApi.userProjectsFormClosed();
  return /* @__PURE__ */ React.createElement(IconButton, {
    onClick: handleClose
  }, "X");
};

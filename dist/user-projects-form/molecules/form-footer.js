import React from "../../../_snowpack/pkg/react.js";
import {useStore} from "../../../_snowpack/pkg/effector-react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {Button, TextButton} from "../../ui/index.js";
import {
  triedToSave,
  userProjectsFormApi,
  triedSwitchToJsonPreview,
  $viewMode,
  viewModeSwitchedToForm
} from "../model/index.js";
export const FormFooter = () => {
  const viewMode = useStore($viewMode);
  const handlePreviewJson = () => {
    triedSwitchToJsonPreview();
  };
  const handleBackToForm = () => {
    viewModeSwitchedToForm();
  };
  const handleToggleView = () => {
    if (viewMode === "form")
      handlePreviewJson();
    if (viewMode === "json")
      handleBackToForm();
  };
  const handleSaveJson = () => {
    triedToSave();
  };
  return /* @__PURE__ */ React.createElement(FooterWrapper, null, /* @__PURE__ */ React.createElement(TextButton, {
    onClick: handleToggleView
  }, viewMode === "form" && "View form JSON", viewMode === "json" && "Back to form"), /* @__PURE__ */ React.createElement(ControlsWrapper, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => userProjectsFormApi.userProjectsFormClosed()
  }, "Cancel"), /* @__PURE__ */ React.createElement(Button, {
    onClick: handleSaveJson
  }, "Save")));
};
const FooterWrapper = styled.footer`
  border-top: 1px solid;
  padding: 0.5rem;
`;
const ControlsWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  & button:not(:last-child) {
    margin-right: 1rem;
  }
`;

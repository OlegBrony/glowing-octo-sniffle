import React from "../../../_snowpack/pkg/react.js";
import {useStore} from "../../../_snowpack/pkg/effector-react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {SmallIconButton, TextField} from "../../ui/index.js";
import {
  $newProjectName,
  $newProjectNameError,
  newProjectNameChanged,
  newProjectNameTriedToAdd
} from "../model/index.js";
export const NewProjectName = () => {
  const newProjectName = useStore($newProjectName);
  const newProjectNameError = useStore($newProjectNameError);
  const handleSubmit = (e) => {
    e.preventDefault();
    newProjectNameTriedToAdd();
  };
  return /* @__PURE__ */ React.createElement(NewProjectNameWrapper, {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(TextField, {
    value: newProjectName,
    onChange: newProjectNameChanged,
    helperText: newProjectNameError,
    isError: !!newProjectNameError
  }), /* @__PURE__ */ React.createElement(ConfirmButton, {
    type: "submit"
  }, "+"));
};
const NewProjectNameWrapper = styled.form`
  display: flex;
`;
const ConfirmButton = styled(SmallIconButton)`
  margin-top: 1px;
  margin-left: 4px;
`;

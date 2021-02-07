import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {usePreviousErrorMessage} from "../../lib/use-previous-error-message.js";
import {HelperText} from "../atoms/index.js";
export const TextField = ({
  helperText = "Error",
  isError = false,
  value,
  onChange,
  title,
  onBlur,
  className,
  type = "string",
  min
}) => {
  const errorMessage = usePreviousErrorMessage({errorText: helperText, hasError: isError});
  return /* @__PURE__ */ React.createElement(TextFieldWrapper, {
    className
  }, title, /* @__PURE__ */ React.createElement(InputStyled, {
    value,
    onChange,
    onBlur,
    type,
    min
  }), /* @__PURE__ */ React.createElement(HelperText, {
    "data-is-error": isError
  }, errorMessage));
};
const TextFieldWrapper = styled.label`
  display: grid;
`;
const InputStyled = styled.input`
  padding: 4px;
`;

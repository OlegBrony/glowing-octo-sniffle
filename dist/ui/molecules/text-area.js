import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {usePreviousErrorMessage} from "../../lib/use-previous-error-message.js";
import {HelperText} from "../atoms/index.js";
export const TextArea = ({
  helperText = "Error",
  isError = false,
  value,
  onChange,
  onBlur,
  title,
  rows = 3
}) => {
  const errorMessage = usePreviousErrorMessage({errorText: helperText, hasError: isError});
  return /* @__PURE__ */ React.createElement(TextAreaWrapper, null, title, /* @__PURE__ */ React.createElement(TextAreaStyled, {
    value,
    onChange,
    onBlur,
    rows
  }), /* @__PURE__ */ React.createElement(HelperText, {
    "data-is-error": isError
  }, errorMessage));
};
const TextAreaWrapper = styled.label`
  display: grid;
`;
const TextAreaStyled = styled.textarea`
  padding: 4px;
  resize: vertical;
`;

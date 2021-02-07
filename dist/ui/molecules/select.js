import React from "../../pkg/react.js";
import styled from "../../pkg/styled-components.js";
import {HelperText} from "../atoms/index.js";
export const Select = ({options, onChange, value, error, isError}) => {
  return /* @__PURE__ */ React.createElement(SelectWrappers, null, /* @__PURE__ */ React.createElement(SelectStyled, {
    onChange,
    value
  }, options.map(({label, value: value2}) => /* @__PURE__ */ React.createElement("option", {
    value: value2,
    key: value2
  }, label))), /* @__PURE__ */ React.createElement(HelperText, {
    "data-is-error": isError
  }, error));
};
const SelectWrappers = styled.label`
  display: flex;
  flex-direction: column;
`;
const SelectStyled = styled.select`
  padding: 4px;
`;

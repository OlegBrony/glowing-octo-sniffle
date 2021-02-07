import React from "../../pkg/react.js";
import styled from "../../pkg/styled-components.js";
export const FormWrapper = ({children}) => {
  return /* @__PURE__ */ React.createElement(FormWrapperStyled, null, /* @__PURE__ */ React.createElement(FormContainer, null, children));
};
const FormWrapperStyled = styled.div`
  display: flex;
`;
const FormContainer = styled.div`
  display: grid;
  align-items: center;
  border: 1px solid;
  border-radius: 8px;
  margin: 1rem;
  width: 100%;
  max-width: 800px;
`;

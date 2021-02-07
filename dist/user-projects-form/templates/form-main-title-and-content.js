import React from "../../pkg/react.js";
import styled from "../../pkg/styled-components.js";
export const FormMainTitleAndContent = ({children, title}) => {
  return /* @__PURE__ */ React.createElement(FormMainTitleAndContentStyled, null, /* @__PURE__ */ React.createElement(FormMainTitleStyled, null, title), /* @__PURE__ */ React.createElement("div", null, children));
};
const FormMainTitleAndContentStyled = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`;
const FormMainTitleStyled = styled.h4`
  margin: 0;
  display: flex;
  align-items: center;
`;

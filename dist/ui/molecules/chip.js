import React from "../../pkg/react.js";
import styled from "../../pkg/styled-components.js";
import {SmallIconButton} from "../atoms/index.js";
export const Chip = ({className, text, onRemove}) => {
  return /* @__PURE__ */ React.createElement(ChipStyled, {
    className
  }, /* @__PURE__ */ React.createElement("span", null, text), /* @__PURE__ */ React.createElement(CloseButton, {
    onClick: onRemove
  }, "X"));
};
const ChipStyled = styled.div`
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
`;
const CloseButton = styled(SmallIconButton)`
  margin-left: 0.5rem;
`;

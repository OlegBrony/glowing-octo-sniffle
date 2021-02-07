import React from "../../pkg/react.js";
import styled from "../../pkg/styled-components.js";
import {SmallIconButton} from "../../ui/index.js";
import {projectDetailsRemoved} from "../model/index.js";
export const RemoveProjectBtn = ({pdId}) => {
  return /* @__PURE__ */ React.createElement(RemoveProjectBtnStyled, {
    onClick: () => projectDetailsRemoved(pdId)
  }, "X");
};
const RemoveProjectBtnStyled = styled(SmallIconButton)`
  position: absolute;
  right: -12px;
  top: -12px;
`;

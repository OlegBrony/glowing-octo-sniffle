import styled from "../../pkg/styled-components.js";
export const HelperText = styled.span`
  font-size: 0.8rem;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: opacity, color, visibility;
  transition-duration: 225ms;
  &[data-is-error='true'] {
    color: red;
    visibility: initial;
    opacity: 1;
  }
`;

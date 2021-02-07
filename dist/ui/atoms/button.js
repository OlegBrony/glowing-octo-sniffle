import styled from "../../../_snowpack/pkg/styled-components.js";
export const BaseButton = styled.button`
  outline: none;
  transition: box-shadow 225ms;
  &:focus, &:hover {
    box-shadow: 0 0 8px;
  }
`;
export const Button = styled(BaseButton)`
  width: 100px;
  border-radius: 8px;
  padding: 4px 8px;
`;
export const IconButton = styled(BaseButton)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SmallIconButton = styled(IconButton)`
  width: 24px;
  height: 24px;
  &:focus, &:hover {
    box-shadow: 0 0 6px;
  }
`;
export const TextButton = styled.button`
  background: transparent;
  border: 1px dashed transparent;
  color: blueviolet;
  padding: 0;
  outline: none;
  transition: border 225ms;
  &:focus, &:hover {
    border-color: currentColor;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { SmallIconButton } from '../../ui';
import { projectDetailsRemoved } from '../model';

export const RemoveProjectBtn = ({ pdId }: { pdId: string }) => {
  return (
    <RemoveProjectBtnStyled onClick={() => projectDetailsRemoved(pdId)}>X</RemoveProjectBtnStyled>
  )
}
const RemoveProjectBtnStyled = styled(SmallIconButton)`
  position: absolute;
  right: -12px;
  top: -12px;
`

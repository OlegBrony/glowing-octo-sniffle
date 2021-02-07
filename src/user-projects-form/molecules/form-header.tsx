import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../ui';
import { userProjectsFormApi } from '../model';

export const FormHeader = () => {
  return (
    <FormHeaderWrapper>
      <HeaderText>
        User projects
      </HeaderText>
      <CloseIcon />
    </FormHeaderWrapper>
  )
}
const FormHeaderWrapper = styled.header`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
  grid-template-columns: 1fr min-content;
  justify-content: space-between;
`
const HeaderText = styled.h3`
  margin: 0 1rem 0 0;
`
const CloseIcon = () => {
  const handleClose = () => userProjectsFormApi.userProjectsFormClosed()
  return (
    <IconButton onClick={handleClose}>X</IconButton>
  )
}
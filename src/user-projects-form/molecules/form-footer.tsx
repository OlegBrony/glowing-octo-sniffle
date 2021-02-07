import React from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { Button, TextButton } from '../../ui';
import {
  triedToSave,
  userProjectsFormApi,
  triedSwitchToJsonPreview,
  $viewMode,
  viewModeSwitchedToForm,
} from '../model';

export const FormFooter = () => {
  const viewMode = useStore($viewMode)
  const handlePreviewJson = () => {
    triedSwitchToJsonPreview()
  }
  const handleBackToForm = () => {
    viewModeSwitchedToForm()
  }
  const handleToggleView = () => {
    if (viewMode === 'form') handlePreviewJson()
    if (viewMode === 'json') handleBackToForm()
  }
  const handleSaveJson = () => {
    triedToSave()
  }
  return (
    <FooterWrapper>
      <TextButton onClick={handleToggleView}>
        {viewMode === 'form' && 'View form JSON'}
        {viewMode === 'json' && 'Back to form'}
      </TextButton>
      <ControlsWrapper>
        <Button onClick={() => userProjectsFormApi.userProjectsFormClosed()}>Cancel</Button>
        <Button onClick={handleSaveJson}>Save</Button>
      </ControlsWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  border-top: 1px solid;
  padding: 0.5rem;
`
const ControlsWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  & button:not(:last-child) {
    margin-right: 1rem;
  }
`

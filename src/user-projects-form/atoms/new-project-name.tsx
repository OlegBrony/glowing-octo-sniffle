import React from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { SmallIconButton, TextField } from '../../ui';
import {
  $newProjectName,
  $newProjectNameError,
  newProjectNameChanged,
  newProjectNameTriedToAdd,
} from '../model';

export const NewProjectName = () => {
  const newProjectName = useStore($newProjectName)
  const newProjectNameError = useStore($newProjectNameError)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    newProjectNameTriedToAdd()
  }
  return (
    <NewProjectNameWrapper onSubmit={handleSubmit}>
      <TextField
        value={newProjectName}
        onChange={newProjectNameChanged}
        helperText={newProjectNameError}
        isError={!!newProjectNameError}
      />
      <ConfirmButton type={'submit'}>+</ConfirmButton>
    </NewProjectNameWrapper>
  )
}
const NewProjectNameWrapper = styled.form`
  display: flex;
`
const ConfirmButton = styled(SmallIconButton)`
  margin-top: 1px;
  margin-left: 4px;
`

import React from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { Username } from '../atoms';
import { ProjectsNames } from '../molecules';
import { $parsedDetails, $viewMode } from '../model';
import { ProjectsDetailsList } from './project-details-list';

export const FormMainContent = () => {
  const viewMode = useStore($viewMode)
  return (
    <FormMainWrapper>
      {viewMode === 'form' && (
        <>
          <Username />
          <ProjectsNames />
          <ProjectsDetailsList />
        </>
      )}
      {viewMode === 'json' && (
        <FormJsonView />
      )}
    </FormMainWrapper>
  )
}
const FormMainWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  max-height: 60rem;
  overflow: auto;
`

const FormJsonView = () => {
  const parsedDetails = useStore($parsedDetails)
  return (
    <pre>
      {JSON.stringify(parsedDetails, null, 2)}
    </pre>
  )
}

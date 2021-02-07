import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { SmallIconButton } from '../../ui';
import { FormMainTitleAndContent } from '../templates';
import { ProjectDetailsName, ProjectDetailsDescription, RemoveProjectBtn } from '../atoms';
import { ProjectDetailsDuration } from '../molecules';
import type { ProjectDetails as PDType } from '../types';
import { $projectDetails, newProjectDetailsTriedToAdd } from '../model';

export const ProjectsDetailsList = () => {
  const projectDetails = useStore($projectDetails)
  return (
    <FormMainTitleAndContent
      title={(
        <>
          Projects Details
          <AddButton onClick={() => newProjectDetailsTriedToAdd()}>+</AddButton>
        </>
      )}
    >
      <ProjectDetailsListWrapper>
        {projectDetails.map((pd) => (<ProjectDetails projectDetails={pd} key={pd.id} />))}
      </ProjectDetailsListWrapper>
    </FormMainTitleAndContent>
  )
}
const AddButton = styled(SmallIconButton)`
  margin-left: 1rem;
`
const ProjectDetailsListWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const ProjectDetails = ({ projectDetails }: { projectDetails: PDType }) => {
  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsName projectDetails={projectDetails} />
      <ProjectDetailsDescription projectDetails={projectDetails} />
      <ProjectDetailsDuration projectDetails={projectDetails} />
      <RemoveProjectBtn pdId={projectDetails.id} />
    </ProjectDetailsWrapper>
  )
}
const ProjectDetailsWrapper = styled.div`
  padding: 1rem;
  border: 1px dashed gray;
  display: grid;
  grid-gap: 0.5rem;
  position: relative;
`
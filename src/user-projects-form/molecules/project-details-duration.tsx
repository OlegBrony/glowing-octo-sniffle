import React from 'react';
import styled from 'styled-components';
import type { ProjectDetails } from '../types';
import { ProjectDetailsItemTemplate } from '../templates';
import { DurationUnitValue, DurationUnit } from '../atoms';

export const ProjectDetailsDuration = ({ projectDetails }: { projectDetails: ProjectDetails }) => {
  return (
    <ProjectDetailsItemTemplate title={'Duration'}>
      <ProjectDetailsDurationWrapper>
        <DurationUnitValue projectDetails={projectDetails} />
        <DurationUnit pdId={projectDetails.id} value={projectDetails.duration.unit} />
      </ProjectDetailsDurationWrapper>
    </ProjectDetailsItemTemplate>
  )
}
const ProjectDetailsDurationWrapper = styled.div`
  display: flex;
  justify-content: center;
`

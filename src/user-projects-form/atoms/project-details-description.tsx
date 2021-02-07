import React from 'react';
import { TextArea } from '../../ui';
import type { ProjectDetails } from '../types';
import { ProjectDetailsItemTemplate } from '../templates';
import { projectDetailsDescriptionChanged } from '../model';

export const ProjectDetailsDescription = ({ projectDetails }: { projectDetails: ProjectDetails }) => {
  const handlePDDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    projectDetailsDescriptionChanged({ id: projectDetails.id, value: e.target.value })
  }
  return (
    <ProjectDetailsItemTemplate title={'Details'}>
      <TextArea
        onChange={handlePDDescriptionChange}
        isError={projectDetails.isTouched.description && !!projectDetails.error.description}
        helperText={projectDetails.error.description}
        value={projectDetails.description}
      />
    </ProjectDetailsItemTemplate>
  )
}

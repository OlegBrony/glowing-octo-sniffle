import React from 'react';
import { useStore } from 'effector-react';
import { Select } from '../../ui';
import { ProjectDetailsItemTemplate } from '../templates';
import type { ProjectDetails } from '../types';
import { $projectNames, projectDetailsNameChanged } from '../model';

export const ProjectDetailsName = ({ projectDetails }: { projectDetails: ProjectDetails }) => {
  const projectNames = useStore($projectNames)
  let nameList = [
    { label: 'Choose project', value: '' },
    ...projectNames.map((name) => ({ label: name, value: name })),
  ]
  const handlePDNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    projectDetailsNameChanged({ id: projectDetails.id, newName: e.target.value })
  }
  return (
    <ProjectDetailsItemTemplate title={'Project'}>
      <Select
        options={nameList}
        value={projectDetails.name}
        onChange={handlePDNameChange}
        isError={projectDetails.isTouched.name && !!projectDetails.error.name}
        error={projectDetails.error.name}
      />
    </ProjectDetailsItemTemplate>
  )
}

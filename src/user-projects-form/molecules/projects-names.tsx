import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { Chip } from '../../ui';
import { FormMainTitleAndContent } from '../templates';
import { NewProjectName } from '../atoms';
import { $projectNames, projectNameRemoved } from '../model';

export const ProjectsNames = () => {
  const projectNames = useStore($projectNames)
  return (
    <FormMainTitleAndContent title={'Projects'}>
      <ListWrapper>
        {projectNames.map((projectName) => (
          <ProjectsName text={projectName} key={projectName} onRemove={() => projectNameRemoved(projectName)} />
        ))}
        <NewProjectName />
      </ListWrapper>
    </FormMainTitleAndContent>
  )
}
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`
const ProjectsName = styled(Chip)`
  margin-bottom: 0.5rem;
`

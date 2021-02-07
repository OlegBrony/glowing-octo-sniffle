import React from 'react';
import styled from 'styled-components';

export const ProjectDetailsItemTemplate: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <ProjectDetailsItemWrapper>
      <ProjectDetailsItemHeader>{title}</ProjectDetailsItemHeader>
      {children}
    </ProjectDetailsItemWrapper>
  )
}

const ProjectDetailsItemWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1rem;
`

const ProjectDetailsItemHeader = styled.h5`
  font-size: 1rem;
  margin: 5px 0 0;
`

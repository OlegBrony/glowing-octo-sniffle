import React from 'react';
import styled from 'styled-components';

export const FormMainTitleAndContent: React.FC<{ title: React.ReactNode }> = ({ children, title }) => {
  return (
    <FormMainTitleAndContentStyled>
      <FormMainTitleStyled>{title}</FormMainTitleStyled>
      <div>
        {children}
      </div>
    </FormMainTitleAndContentStyled>
  )
}
const FormMainTitleAndContentStyled = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`
const FormMainTitleStyled = styled.h4`
  margin: 0;
  display: flex;
  align-items: center;
`

import React from 'react';
import styled from 'styled-components';

export const FormWrapper: React.FC = ({ children }) => {
  return (
    <FormWrapperStyled>
      <FormContainer>
        {children}
      </FormContainer>
    </FormWrapperStyled>
  )
}
const FormWrapperStyled = styled.div`
  display: flex;
`
const FormContainer = styled.div`
  display: grid;
  align-items: center;
  border: 1px solid;
  border-radius: 8px;
  margin: 1rem;
  width: 100%;
  max-width: 800px;
`

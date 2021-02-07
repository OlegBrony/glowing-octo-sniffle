import React from 'react';
import styled from 'styled-components';
import { usePreviousErrorMessage } from '../../lib/use-previous-error-message';
import { HelperText } from '../atoms';

type TextAreaProps = {
  helperText?: string
  isError?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent) => void
  title?: string
  rows?: number
}
export const TextArea = ({
  helperText = 'Error',
  isError = false,
  value,
  onChange,
  onBlur,
  title,
  rows = 3,
}: TextAreaProps) => {
  const errorMessage = usePreviousErrorMessage({ errorText: helperText, hasError: isError })
  return (
    <TextAreaWrapper>
      {title}
      <TextAreaStyled value={value} onChange={onChange} onBlur={onBlur} rows={rows} />
      <HelperText data-is-error={isError}>{errorMessage}</HelperText>
    </TextAreaWrapper>
  );
};

const TextAreaWrapper = styled.label`
  display: grid;
`
const TextAreaStyled = styled.textarea`
  padding: 4px;
  resize: vertical;
`

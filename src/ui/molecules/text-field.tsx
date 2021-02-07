import React from 'react';
import styled from 'styled-components';
import { usePreviousErrorMessage } from '../../lib/use-previous-error-message';
import { HelperText } from '../atoms';

type TextFieldProps = {
  helperText?: string
  isError?: boolean
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent) => void
  title?: string
  className?: string
  type?: 'number' | 'string'
  min?: number
}
export const TextField = ({
  helperText = 'Error',
  isError = false,
  value,
  onChange,
  title,
  onBlur,
  className,
  type = 'string',
  min,
}: TextFieldProps) => {
  const errorMessage = usePreviousErrorMessage({ errorText: helperText, hasError: isError })

  return (
    <TextFieldWrapper className={className}>
      {title}
      <InputStyled value={value} onChange={onChange} onBlur={onBlur} type={type} min={min} />
      <HelperText data-is-error={isError}>{errorMessage}</HelperText>
    </TextFieldWrapper>
  )
}
const TextFieldWrapper = styled.label`
  display: grid;
`
const InputStyled = styled.input`
  padding: 4px;
`

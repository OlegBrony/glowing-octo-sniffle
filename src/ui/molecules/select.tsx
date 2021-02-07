import React from 'react';
import styled from 'styled-components';
import { HelperText } from '../atoms';

type SelectProps = {
  options: { label: string; value: string }[]
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value?: string
  isError?: boolean
  error?: string
}
// todo: replace with autocomplete if have time
export const Select = ({ options, onChange, value, error, isError }: SelectProps) => {
  return (
    <SelectWrappers>
      <SelectStyled onChange={onChange} value={value}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>{label}</option>
        ))}
      </SelectStyled>
      <HelperText data-is-error={isError}>{error}</HelperText>
    </SelectWrappers>
  )
}
const SelectWrappers = styled.label`
  display: flex;
  flex-direction: column;
`
const SelectStyled = styled.select`
  padding: 4px;
`
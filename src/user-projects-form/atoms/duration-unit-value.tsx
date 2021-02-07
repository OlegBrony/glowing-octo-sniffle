import React from 'react';
import styled from 'styled-components';
import { TextField } from '../../ui';
import type { ProjectDetails } from '../types';
import { projectDetailsDurationValueChanged } from '../model';

export const DurationUnitValue = ({ projectDetails }: { projectDetails: ProjectDetails }) => {
  const handlePDDurationValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target
    const newValue = Number.isNaN(valueAsNumber) ? 0 : valueAsNumber
    projectDetailsDurationValueChanged({ id: projectDetails.id, value: newValue })
  }
  return (
    <UnitValue
      type={'number'}
      onChange={handlePDDurationValueChange}
      value={projectDetails.duration.value}
      min={0}
      isError={projectDetails.isTouched.duration && !!projectDetails.error.duration}
      helperText={projectDetails.error.duration}
    />
  )
}

const UnitValue = styled(TextField)`
  margin-right: 1rem;
`

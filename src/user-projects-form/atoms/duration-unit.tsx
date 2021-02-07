import React from 'react';
import { TimeUnits } from '../../api/types';
import { Select } from '../../ui';
import { projectDetailsDurationUnitChanged } from '../model';

export const DurationUnit = ({ pdId, value }: { pdId: string; value: TimeUnits }) => {
  const handlePDDurationUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newUnit = e.target.value as TimeUnits
    projectDetailsDurationUnitChanged({ id: pdId, unit: newUnit })
  }
  return (
    <Select
      options={[
        { label: 'months', value: TimeUnits.Month },
        { label: 'years', value: TimeUnits.Year },
      ]}
      onChange={handlePDDurationUnitChange}
      value={value}
    />
  )
}

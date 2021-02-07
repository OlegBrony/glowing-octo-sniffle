import React from 'react';
import styled from 'styled-components';
import { SmallIconButton } from '../atoms';

type ChipProps = {
  className?: string
  text: string
  onRemove: (e: React.MouseEvent) => void
}
export const Chip = ({ className, text, onRemove }: ChipProps) => {
  return (
    <ChipStyled className={className}>
      <span>{text}</span>
      <CloseButton onClick={onRemove}>X</CloseButton>
    </ChipStyled>
  )
}
const ChipStyled = styled.div`
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
`

const CloseButton = styled(SmallIconButton)`
  margin-left: 0.5rem;
`
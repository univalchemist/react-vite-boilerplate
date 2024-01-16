import React from 'react'

import { IRadioProps } from './types'

export const Radio: React.FC<IRadioProps> = ({
  selected,
  children,
  label,
  onSelect,
  disabled = false,
  className = '',
}) => {
  return (
    <>
      <label className={className}>
        <input
          type="radio"
          checked={selected}
          onChange={() => onSelect?.()}
          onClick={() => onSelect?.()}
          disabled={disabled}
        />
        <span>{label}</span>
      </label>
      {children}
    </>
  )
}

export default Radio

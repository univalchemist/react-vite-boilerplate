import React from 'react'
import classNames from 'classnames'
import { ICheckboxProps } from './types'

export const Checkbox: React.FC<ICheckboxProps> = ({
  checked,
  label,
  onChange,
  disabled,
  className = 'w-100',
  ...rest
}) => {
  return (
    <label
      className={classNames(className, {
        disabled: !!disabled,
      })}
    >
      <span className="field checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange?.(!checked)}
          disabled={disabled}
          {...rest}
        />
        {!!label && <span className="bullet">{label}</span>}
      </span>
    </label>
  )
}

export default Checkbox

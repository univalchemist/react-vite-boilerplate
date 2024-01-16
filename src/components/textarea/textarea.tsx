import React from 'react'
import classNames from 'classnames'

import { ITextAreaProps } from './types'
import { FormError } from '../form-error'

export const TextArea: React.FC<ITextAreaProps> = ({
  label,
  error,
  className,
  onChange,
  ...rest
}) => {
  return (
    <label
      className={classNames('w-100', className, {
        error: !!error,
      })}
    >
      {!!label && (
        <span className="name">
          {label}
          {!!rest.required && <sup>*</sup>}
        </span>
      )}
      <span className="field">
        <textarea {...rest} onChange={onChange} />
      </span>

      {!!error && <FormError error={error} />}
    </label>
  )
}

export default TextArea

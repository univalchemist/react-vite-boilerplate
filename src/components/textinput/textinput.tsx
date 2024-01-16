import React from 'react'
import { useToggle } from 'react-use'
import classNames from 'classnames'

import { FormError } from '../form-error'
import { Icon } from '../icon'
import { type ITextInputProps } from './types'

export const TextInput = React.forwardRef<HTMLInputElement, ITextInputProps>(
  ({ label, icon, error, className = '', onChange, ...rest }, ref) => {
    const [passwordVisible, togglePasswordVisibility] = useToggle(false)

    return (
      <label className={classNames(className, { error: !!error })}>
        {!!label && (
          <span className="name">
            {label}
            {!!rest.required && <sup>*</sup>}
          </span>
        )}
        <span className="field">
          {rest.type !== 'password' ? (
            <Icon name={icon} />
          ) : (
            <Icon
              onClick={togglePasswordVisibility}
              //@ts-ignore
              name={passwordVisible ? 'eye-off' : 'eye'}
            />
          )}
          <input
            {...rest}
            ref={ref}
            onChange={onChange}
            type={passwordVisible ? 'text' : rest.type}
          />
        </span>
        {!!error && <FormError error={error} />}
      </label>
    )
  },
)

export default TextInput

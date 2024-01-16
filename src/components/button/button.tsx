import React from 'react'
import classNames from 'classnames'

import { Icon } from '../icon'

import { IButtonProps } from './types'

export const Button: React.FC<IButtonProps> = ({
  loading,
  disabled,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classNames(className, {
        disabled: !!disabled,
      })}
      disabled={disabled || loading}
    >
      {!!iconLeft && <Icon name={iconLeft} />}
      {children}
      {!!iconRight && <Icon name={iconRight} />}
      {loading && <Icon name="loading" />}
    </button>
  )
}

export default Button

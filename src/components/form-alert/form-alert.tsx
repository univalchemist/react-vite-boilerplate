import React from 'react'

import { type IFormAlertProps } from './types'

export const FormAlert: React.FC<IFormAlertProps> = ({
  className = 'error-notice',
  children,
  ...rest
}) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

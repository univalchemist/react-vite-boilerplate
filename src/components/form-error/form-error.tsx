import React from 'react'

import { type IFormErrorProps } from './types'

export const FormError: React.FC<IFormErrorProps> = ({ error, ...rest }) => {
  if (!error) return null
  return (
    <span className="warning" {...rest}>
      {error}
    </span>
  )
}

import React from 'react'
import classNames from 'classnames'

import { type IIconProps } from './types'

export const Icon: React.FC<IIconProps> = ({ name, className, ...rest }) => {
  if (!name) return null
  return <span className={classNames(`ic-${name}`, className)} {...rest} />
}

export default Icon

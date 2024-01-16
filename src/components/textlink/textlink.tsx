import React from 'react'
import classNames from 'classnames'

import { type ITextLinkProps } from './types'
import { Icon } from '../icon'
import './textlink.scss'

export const TextLink: React.FC<ITextLinkProps> = ({
  iconLeft,
  iconRight,
  disabled,
  className,
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className={classNames('text-link', className)}
      href={!disabled ? rest.href : undefined}
      onClick={!disabled && !rest.href ? rest.onClick : undefined}
    >
      {!!iconLeft && <Icon name={iconLeft} />}
      {children}
      {!!iconRight && <Icon name={iconRight} />}
    </a>
  )
}

export default TextLink

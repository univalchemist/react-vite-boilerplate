import React from 'react'

import { IConditionalWrapperProps } from './types'

export const ConditionalWrapper: React.FC<IConditionalWrapperProps> = ({
  className,
  WrapEl,
  children,
  ...rest
}) => {
  const Wrap = WrapEl ? WrapEl : React.Fragment
  const props = WrapEl && WrapEl !== React.Fragment ? { className } : {}
  return (
    <Wrap {...rest} {...props}>
      {children}
    </Wrap>
  )
}

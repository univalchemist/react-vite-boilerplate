import React, { HTMLAttributes } from 'react'

export interface IConditionalWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  WrapEl?: React.ElementType
  className?: string
}

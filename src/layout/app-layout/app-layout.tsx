import React from 'react'

import { CustomerAppNav } from '../app-nav'
import { CustomerAppHeader } from '../app-header'

interface Props {
  hasHeader?: boolean
  hasNav?: boolean
  className?: string
  wrapClassName?: string
  children: React.ReactNode
}

export const AppLayout: React.FC<Props> = ({
  hasHeader = true,
  hasNav = true,
  className = 'surface-wrap',
  wrapClassName = 'surface-data',
  children,
}) => {
  return (
    <>
      {hasHeader && <CustomerAppHeader />}
      <div className={className}>
        {hasNav && <CustomerAppNav />}
        <div className={wrapClassName}>{children}</div>
      </div>
    </>
  )
}

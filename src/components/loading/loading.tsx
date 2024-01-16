import React from 'react'
import classNames from 'classnames'

import { Icon } from '../icon'
import { ILoadingProps } from './types'
import './loading.scss'

export const Loading: React.FC<ILoadingProps> = ({
  className,
  blur = false,
  loading,
  size,
}) => {
  if (!loading) return null

  return (
    <div
      className={classNames('loading-container', className, {
        blur: !!blur,
      })}
    >
      <Icon name="loading" className="spinner" style={{ fontSize: size }} />
    </div>
  )
}

export default Loading

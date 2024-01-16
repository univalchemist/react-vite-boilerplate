import React, { useCallback } from 'react'

import { ConditionalWrapper } from '../wrapper'

import Observer from './observer'
import { IInfiniteProps } from './types'
import './infinite.scss'

export const Infinite: React.FC<IInfiniteProps> = ({
  className,
  loading,
  hasMore,
  WrapEl,
  children,
  onFetchMore,
}) => {
  const onIntersect = useCallback(() => {
    if (hasMore) {
      onFetchMore()
    }
  }, [hasMore, onFetchMore])

  return (
    <ConditionalWrapper className={className} WrapEl={WrapEl}>
      {children}
      {hasMore && <Observer loading={!!loading} onIntersect={onIntersect} />}
    </ConditionalWrapper>
  )
}

export default Infinite

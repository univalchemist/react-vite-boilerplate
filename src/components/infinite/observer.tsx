import React, { useLayoutEffect, useRef } from 'react'

import { Loading } from '../loading'
import classNames from 'classnames'

interface Props {
  loading: boolean
  onIntersect: () => void
}

const Observer: React.FC<Props> = ({ loading, onIntersect }) => {
  const ref = useRef<HTMLDivElement>(null)
  const callback = useRef(onIntersect)

  useLayoutEffect(() => {
    callback.current = onIntersect
  }, [onIntersect])

  useLayoutEffect(() => {
    if (!ref.current) return undefined

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          callback.current()
        }
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={classNames('observer', { loading })}>
      <Loading loading />
    </div>
  )
}

export default Observer

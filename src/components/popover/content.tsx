import React, { useLayoutEffect, useRef, useState } from 'react'

import {
  usePopover,
  useOnClickOutside,
  useFocusTrapping,
  useCombinedRefs,
} from '@/hooks'
import { getPopoverCoords } from './utils'

interface Props {
  className?: string
  positioning: 'absolute' | 'fixed'
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ positioning, children }) => {
  const { triggerRect, placement, closeOnOutside, distance, onClose } =
    usePopover()
  const ref = useRef<HTMLDialogElement>(null)

  const [coords, setCoords] = useState<
    { left: number; top: number } | undefined
  >(undefined)

  useLayoutEffect(() => {
    setTimeout(() => {
      const element = ref.current
      if (element == null) return

      const rect = element.getBoundingClientRect()

      const coords = getPopoverCoords(
        triggerRect,
        rect,
        placement,
        distance,
        positioning,
      )
      setCoords(coords)
    }, 50)
  }, [distance, placement, triggerRect, positioning])

  const refFocusTrapping = useFocusTrapping()
  const mergedRef = useCombinedRefs(ref, refFocusTrapping)
  useOnClickOutside(mergedRef, closeOnOutside, onClose)

  return (
    <div
      className="popover"
      ref={mergedRef}
      style={{
        opacity: coords ? 1 : 0,
        position: positioning,
        left: `${coords?.left || 0}px`,
        top: `${coords?.top || 0}px`,
        margin: 0,
        zIndex: 1999,
      }}
    >
      {children}
    </div>
  )
}

export default Content

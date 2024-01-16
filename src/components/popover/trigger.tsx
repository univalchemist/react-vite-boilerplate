import React, { useRef } from 'react'

import { usePopover } from '@/hooks'
import { TFunc } from '@/types'

interface Props {
  trigger: 'on-click' | 'mouse-over'
  disabled: boolean
  onTrigger: TFunc
  children: React.ReactElement
}

const Trigger: React.FC<Props> = ({
  trigger,
  disabled,
  onTrigger,
  children,
}) => {
  const { setTriggerRect } = usePopover()

  const ref = useRef<HTMLElement>(null)

  const _onTrigger = () => {
    if (disabled) return

    const element = ref.current
    if (element == null) return

    const rect = element.getBoundingClientRect()
    setTriggerRect(rect)
    onTrigger?.()
  }

  const childrenToTriggerPopover = React.cloneElement(children, {
    ...(trigger === 'on-click' && {
      onClick: _onTrigger,
    }),
    ...(trigger === 'mouse-over' && {
      onMouseOver: _onTrigger,
    }),
    ref,
  })

  return childrenToTriggerPopover
}

export default Trigger

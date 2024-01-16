import React, { useCallback } from 'react'
import { TFunc } from '@/types'

type AnyEvent = MouseEvent

export function useOnMouseLeave<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  shouldClose: boolean | undefined,
  handler: TFunc,
): void {
  const useHover = useCallback(
    (event: AnyEvent) => {
      const el = ref?.current

      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler()
    },
    [handler, ref],
  )

  React.useEffect(() => {
    if (shouldClose) {
      document.addEventListener('mouseleave', useHover)
    }

    return () => {
      if (shouldClose) {
        document.removeEventListener('mouseleave', useHover)
      }
    }
  }, [useHover, ref, shouldClose])
}

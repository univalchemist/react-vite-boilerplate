import { useState } from 'react'

export const useScrollThreshold = ({ threshold }: { threshold: number }) => {
  const [thresholdReached, setThresholdReached] = useState(false)
  return {
    onScroll: (_e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const scrollTop = _e.currentTarget.scrollTop
      if (scrollTop > threshold && !thresholdReached) {
        setThresholdReached(true)
      } else if (scrollTop <= threshold && thresholdReached) {
        setThresholdReached(false)
      }
    },
    thresholdReached,
  }
}

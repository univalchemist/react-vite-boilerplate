import { waitFor } from '@/utils'
import { useAsyncFn } from 'react-use'

export const useGenerate = () => {
  return {
    // created a placeholder async function for when the actual generate service is integrated
    avatarGenerator: useAsyncFn(async () => {
      await waitFor(1000)
      return `https://picsum.photos/200?rand=${Math.random()}` //using Math.random so that the browser doesn't use cached image
    }, []),
  }
}

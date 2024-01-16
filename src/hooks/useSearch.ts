import { useEffect, useRef, useState } from 'react'

type ISearchFn<T> = (_text: string) => Promise<T> | T

export function useSearch<ResType = void>(searchFn: ISearchFn<ResType>) {
  const timer = useRef<NodeJS.Timeout>()
  const [text, setText] = useState<string | undefined>()

  useEffect(() => {
    const debounce = text ? 300 : 0
    if (text !== null && text !== undefined) {
      timer.current = setTimeout(() => {
        searchFn(text)
      }, debounce)
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [text, searchFn])

  return {
    text,
    onChangeText: (val: string) => setText(val),
  }
}

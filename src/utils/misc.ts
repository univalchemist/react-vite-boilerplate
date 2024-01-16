export const notEmpty = <TValue>(
  value: TValue | null | undefined,
): value is TValue => {
  return value !== null && value !== undefined
}

export const isHTMLNode = (node: unknown): node is HTMLElement => {
  return (
    typeof node === 'object' && notEmpty(node) && node instanceof HTMLElement
  )
}

export const mergeRef = (...refs: any[]) => {
  return (el: any) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(el)
      } else {
        ref.current = el
      }
    })
  }
}

export const fullName = (...params: Maybe<string>[]): string => {
  return params.filter(p => !!p).join(' ')
}

/**
 * Covert value to 1000s as K
 * @param value number
 * @param convertPivot number: min value to convert number to K
 * @returns [number, string]
 * @example:
 *     9875 => 9875
 *     2132 => 21.3K
 */
export const convertTo1000s = (
  value: number,
  decimal = 1,
  convertPivot = 10000,
): [number, string] => {
  if (value < convertPivot) {
    return [value, '']
  }

  const divider = 10 ** decimal
  return [Math.floor((divider * value) / 1000) / divider, 'K']
}

export const checkBrowserNotification = () => {
  if (!('Notification' in window)) {
    console.log('Browser does not support notifications.')
  } else {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
        .then(function (p) {
          if (p !== 'granted') {
            console.log('User has blocked notifications.')
          }
        })
        .catch(function (err) {
          console.error(err)
        })
    }
  }
}

export const waitFor = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

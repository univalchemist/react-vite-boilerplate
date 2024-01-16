import { AnchorHTMLAttributes } from 'react'
import { TIconName } from '@/types'

export interface ITextLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  iconLeft?: TIconName
  iconRight?: TIconName
  disabled?: boolean
}

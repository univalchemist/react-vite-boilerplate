import { ReactNode } from 'react'

import { icons } from '@/components/icon/constant'
import { APP_CURRENCIES } from '@/constants'

export type TLang = 'en'

export interface ISignInPayload {
  email: string
  password: string
  keepSignin: boolean
}

export type Maybe<T> = T | null | undefined

export type ArgumentType = string | number | boolean | any

export interface ITab<T> {
  key: T
  label: React.ReactNode
}

export type TIconName = (typeof icons)[number]

export interface IOption<T = string> {
  label: string
  value: T
  icon?: TIconName
}

export interface INavItem {
  id: string
  label: string
  icon?: TIconName
  action?: string
}

export type BasePlacement = 'top' | 'right' | 'bottom' | 'left'

export type VariantPlacement =
  | 'top-start'
  | 'top-end'
  | 'top-center'
  | 'bottom-start'
  | 'bottom-end'
  | 'bottom-center'
  | 'right-start'
  | 'right-end'
  | 'right-center'
  | 'left-start'
  | 'left-end'
  | 'left-center'

export type Placement = BasePlacement | VariantPlacement

export type Rect = Pick<
  DOMRect,
  'left' | 'top' | 'bottom' | 'right' | 'height' | 'width'
>

export type PageMeta = { total: number; page: number; pageSize: number }

export type TFunc = () => void

export type TModalContent<TProps = unknown> = (args: {
  hide: () => void
  props: TProps
}) => ReactNode

export type TCurrency = (typeof APP_CURRENCIES)[number]

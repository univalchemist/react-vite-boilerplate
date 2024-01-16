import { ButtonHTMLAttributes } from 'react'
import { TIconName } from '@/types'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  iconLeft?: TIconName
  iconRight?: TIconName
}

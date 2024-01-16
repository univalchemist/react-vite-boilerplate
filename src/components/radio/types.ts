import { TFunc } from '@/types'

export interface IRadioProps {
  selected?: boolean
  children?: React.ReactNode
  label?: React.ReactNode
  onSelect?: TFunc
  disabled?: boolean
  className?: string
}

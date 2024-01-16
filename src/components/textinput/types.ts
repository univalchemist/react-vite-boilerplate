import { InputHTMLAttributes } from 'react'

import { TIconName } from '@/types'

export interface ITextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  icon?: TIconName
  error?: string
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void
}

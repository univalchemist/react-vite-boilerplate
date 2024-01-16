import { IOption } from '@/types'

export interface ISelectProps<
  T extends React.SelectHTMLAttributes<HTMLSelectElement>['value'],
> extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  value?: T
  options: IOption<T>[]
  label?: string
  placeHolder?: string
  disabled?: boolean
  className?: string
  onChange?: (_item: IOption<T>) => void
  renderOption?: (_item: IOption<T>, _index?: number) => React.ReactNode
}

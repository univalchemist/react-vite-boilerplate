import { HTMLAttributes } from 'react'

export interface IFormAlertProps extends HTMLAttributes<HTMLDivElement> {
  className?: 'error-notice' | 'notice-box'
  children: React.ReactNode
}

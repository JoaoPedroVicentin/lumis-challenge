import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonPaginationProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  active?: boolean
}

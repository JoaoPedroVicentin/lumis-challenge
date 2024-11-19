import { IWrapperListProps } from './wrapper-list-props.interface'

export function WrapperList({ children }: IWrapperListProps) {
  return (
    <ul className="grid-cols-list grid w-full items-center justify-evenly gap-4">
      {children}
    </ul>
  )
}

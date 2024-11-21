import { IWrapperListProps } from './wrapper-list-props.interface'

export function WrapperList({ children }: IWrapperListProps) {
  return (
    <ul className="grid w-full grid-cols-list items-center justify-evenly gap-4">
      {children}
    </ul>
  )
}

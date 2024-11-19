import { IButtonPaginationProps } from './interfaces/button-pagination-props.interface'

export function ButtonPagination({
  children,
  active,
  disabled,
  ...props
}: IButtonPaginationProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      data-disabled={disabled}
      data-active={active}
      className="flex h-8 items-center gap-2 rounded-lg px-3 font-inter transition data-[disabled=true]:cursor-not-allowed data-[active=true]:bg-theme-gray-250 data-[active=true]:text-white data-[disabled=true]:opacity-50 data-[disabled=false]:hover:bg-theme-white-100"
    >
      {children}
    </button>
  )
}

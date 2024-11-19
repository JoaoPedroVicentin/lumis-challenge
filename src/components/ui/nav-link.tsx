import { Link, LinkProps as INavLinkProps, useLocation } from 'react-router-dom'

export function NavLink(props: INavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex h-8 items-center rounded-lg border border-transparent px-2 transition data-[current=true]:bg-theme-white-100 data-[current=false]:hover:border-theme-gray-100"
      {...props}
    />
  )
}

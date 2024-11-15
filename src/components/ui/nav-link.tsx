import { Link, LinkProps as INavLinkProps, useLocation } from 'react-router-dom'

export function NavLink(props: INavLinkProps) {
  const { pathname } = useLocation()

  return <Link data-current={pathname === props.to} className="" {...props} />
}

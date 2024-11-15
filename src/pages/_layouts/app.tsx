import { Outlet } from 'react-router-dom'

import { NavLink } from '@/components/ui/nav-link'

export function AppLayout() {
  return (
    <div className="">
      <header>
        <nav className="">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokedex">Pokedex</NavLink>
        </nav>
      </header>

      <main className="">
        <Outlet />
      </main>
    </div>
  )
}

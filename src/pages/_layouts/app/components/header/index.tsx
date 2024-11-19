import { NavLink } from '@/components/ui/nav-link'

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-24 items-center border-b border-theme-gray-100 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-2 p-8 max-sm:px-4">
        <img
          src="/assets/logo.svg"
          alt="Logo PokeDéx"
          className="max-sm:w-24"
        />
        <nav className="flex gap-2 font-inter">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/pokedex">Pokedex</NavLink>
        </nav>
      </div>
    </header>
  )
}

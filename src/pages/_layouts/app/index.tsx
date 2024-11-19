import { Outlet } from 'react-router-dom'

import { Header } from './components/header'

export function AppLayout() {
  return (
    <div className="relative flex h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto mt-24 w-full max-w-[1440px] flex-1 p-8 max-sm:px-4">
        <Outlet />
      </main>
    </div>
  )
}

import { Helmet } from 'react-helmet-async'

import { Input } from '@/components/ui/input'

export function Home() {
  return (
    <div className="">
      <Helmet title="Home" />
      <Input />
      <div className=""></div>
    </div>
  )
}

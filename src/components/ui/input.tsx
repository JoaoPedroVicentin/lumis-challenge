import { Search } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex w-full max-w-[720px] flex-wrap items-center justify-between gap-2 rounded-3xl bg-theme-gray-50 px-4 text-theme-gray-200 transition hover:bg-theme-gray-100">
      <input
        {...props}
        className="line-clamp-1 flex-1 truncate bg-transparent py-4 pl-8 font-roboto text-base outline-none placeholder:text-theme-gray-200 hover:cursor-pointer max-md:pl-0"
      />
      <Search size={24} strokeWidth={2.25} />
    </div>
  )
}

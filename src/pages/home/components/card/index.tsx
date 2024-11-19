import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

import { ICardProps } from './interface/card-props.interface'

export function Card({ pokemon }: ICardProps) {
  return (
    <li className="relative flex h-72 min-w-52 flex-col items-center justify-center rounded-lg bg-theme-white-50 font-dmSans text-sm font-bold">
      <div className="absolute top-4 flex w-full justify-between px-4">
        <div className="flex gap-2">
          {pokemon.types.map(({ type: { name, url } }) => (
            <span key={url} className="text-theme-green">
              {capitalizeFirstLetter(name)}
            </span>
          ))}
        </div>
        <span className="text-theme-blue-50">{`#${pokemon.base_experience}`}</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img
          className="aspect-square w-36"
          src={pokemon.img}
          alt={pokemon.name}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement
            target.src = '/assets/fallback-pokemon.svg'
          }}
        />
        <h3 className="text-theme-blue-100">
          {capitalizeFirstLetter(pokemon.name)}
        </h3>
      </div>
    </li>
  )
}

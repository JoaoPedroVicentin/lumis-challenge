import { IGetPokemonsRequestSearchParams } from '@/api/get-pokemons/interfaces/get-pokemons-request-search-params.interface'

export interface IPaginationProps {
  count: number
  next: string | null
  previous: string | null
  filters: IGetPokemonsRequestSearchParams
  setOffset: (value: number) => void
}

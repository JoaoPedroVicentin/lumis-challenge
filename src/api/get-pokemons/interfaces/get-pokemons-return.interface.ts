import { IGetPokemonByNameOrIdReturn } from '@/api/get-pokemon-by-id/interfaces/get-pokemon-by-name-or-id-return.interface'

export interface IGetPokemonsReturn {
  count: number
  next: string | null
  previous: string | null
  list: IGetPokemonByNameOrIdReturn[]
}

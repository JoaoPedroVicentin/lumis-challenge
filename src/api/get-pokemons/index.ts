import { AxiosResponse } from 'axios'

import { api } from '@/lib/axios'

import { getPokemonByNameOrId } from '../get-pokemon-by-id'
import { IGetPokemonByNameOrIdReturn } from '../get-pokemon-by-id/interfaces/get-pokemon-by-name-or-id-return.interface'
import { IGetPokemonsRequestSearchParams } from './interfaces/get-pokemons-request-search-params.interface'
import { IGetPokemonsReturn } from './interfaces/get-pokemons-return.interface'
import { IPokemonListData } from './interfaces/pokemon-list-data.interface'

export async function getPokemonsRequest({
  offset,
  limit,
}: IGetPokemonsRequestSearchParams): Promise<
  AxiosResponse<IGetPokemonsReturn>
> {
  const pokemonList: IGetPokemonByNameOrIdReturn[] = []

  const response = await api.get<IPokemonListData>('pokemon', {
    params: {
      offset,
      limit,
    },
  })

  await Promise.all(
    response.data.results.map(async (pokemon) => {
      const pokemonId = pokemon.url.split('/').filter(Boolean).pop()
      const pokemonDetails = await getPokemonByNameOrId(pokemonId!)

      pokemonList.push(pokemonDetails.data)
    }),
  )

  return {
    ...response,
    data: {
      ...response.data,
      list: pokemonList.sort((a, b) => Number(a.id) - Number(b.id)),
    },
  }
}

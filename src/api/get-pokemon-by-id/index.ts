import { AxiosResponse } from 'axios'

import { api } from '@/lib/axios'

import { getPokemonImg } from '../get-pokemon-img'
import { IGetPokemonByNameOrIdReturn } from './interfaces/get-pokemon-by-name-or-id-return.interface'
import { IPokemonData } from './interfaces/pokemon-data.interface'

export async function getPokemonByNameOrId(
  nameOrId: string,
): Promise<AxiosResponse<IGetPokemonByNameOrIdReturn>> {
  const response = await api.get<IPokemonData>(`/pokemon/${nameOrId}`)

  return {
    ...response,
    data: {
      ...response.data,
      img: getPokemonImg(response.data.id),
    },
  }
}

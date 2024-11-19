import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'

import { getPokemonByNameOrId } from '@/api/get-pokemon-by-id'
import { getPokemonsRequest } from '@/api/get-pokemons'
import { IGetPokemonsRequestSearchParams } from '@/api/get-pokemons/interfaces/get-pokemons-request-search-params.interface'
import { Input } from '@/components/ui/input'

import { Card } from './components/card'
import { CardsList } from './components/cards-list'
import { LoadingList } from './components/loading-list'
import { Pagination } from './components/pagination'

export function Home() {
  const [filters, setFilters] = useState<IGetPokemonsRequestSearchParams>({
    limit: 18,
    offset: 0,
  })
  const [name, setName] = useState<string>()

  const [searchParams, setSearchParams] = useSearchParams()

  const { data: pokemons, isLoading: isLoadingPokemonList } = useQuery({
    queryKey: ['pokemons', filters],
    queryFn: () => getPokemonsRequest(filters!),
    refetchOnWindowFocus: false,
    enabled: !!filters,
  })

  const {
    data: pokemon,
    isLoading: isLoadingPokemonByName,
    error,
  } = useQuery({
    queryKey: ['pokemonByName', name],
    queryFn: () => getPokemonByNameOrId(name!.toLowerCase()),
    refetchOnWindowFocus: false,
    enabled: !!name,
    retry: 0,
  })

  useEffect(() => {
    const offset = Number(searchParams.get('offset')) || 0
    const nameFromUrl = searchParams.get('name') || undefined

    setFilters({ limit: 18, offset })
    setName(nameFromUrl)
  }, [searchParams])

  useEffect(() => {
    if (error && error.message === 'Request failed with status code 404') {
      toast.error('Pokemon não encontrado!')
    }
  }, [error])

  const isLoading = isLoadingPokemonList || isLoadingPokemonByName

  function handleSetPagination(newIndex: number) {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams)

      newParams.set('offset', newIndex.toString())

      return newParams
    })
  }

  const handleSetParamName = useDebouncedCallback((value: string) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams)
      newParams.set('name', value)
      newParams.set('offset', '0')
      return newParams
    })
  }, 750)

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <Helmet title="Home" />
      <Input
        placeholder="Faça uma busca pelo nome do pokémon"
        onChange={(e) => handleSetParamName(e.target.value)}
      />

      {!isLoading ? (
        pokemon ? (
          <div className="flex w-full justify-center">
            <Card pokemon={pokemon.data} />
          </div>
        ) : (
          <CardsList pokemons={pokemons?.data.list} />
        )
      ) : (
        <LoadingList length={filters.limit} />
      )}

      {!isLoading && !pokemon && (
        <Pagination
          filters={filters}
          next={pokemons!.data.next}
          count={pokemons!.data.count}
          setOffset={handleSetPagination}
          previous={pokemons!.data.previous}
        />
      )}
    </section>
  )
}

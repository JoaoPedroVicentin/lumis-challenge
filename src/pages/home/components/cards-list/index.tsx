import { Card } from '../card'
import { WrapperList } from '../wrapper-list'
import { ICardsListProps } from './cards-list-props.interface'

export function CardsList({ pokemons }: ICardsListProps) {
  return (
    <WrapperList>
      {pokemons ? (
        pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
      ) : (
        <p className="text-center">Nenhum Pokémon encontrado.</p>
      )}
    </WrapperList>
  )
}

export interface IPokemonData {
  id: string
  name: string
  types: {
    type: {
      name: string
      url: string
    }
  }[]
  base_experience: number
}

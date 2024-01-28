export const getPokemon = async (pokemonName: string) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>
    response.json()
  )
}

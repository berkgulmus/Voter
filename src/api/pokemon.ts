export const getPokemon = async (pokemonName: string) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>
    response.json()
  )
}

export const generalizedGet = async (url: string) => {
  return await fetch(url).then((response) => response.json())
}

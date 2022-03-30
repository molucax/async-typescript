import fetch from "node-fetch"

export interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: {
    name: string;
    url: string;
  }[];
}

/* export const getPokemonList = async(): Promise<PokemonList> => {
  const listResponse = await fetch("http://pokeapi.co/api/v2/pokemon/"); 
  return await listResponse.json();
} */

function getPokemonList(
  cb: (err: Error | undefined, pokemonList: PokemonList | undefined) => void 
): void {
  fetch("http://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data: PokemonList) => cb(undefined, data))
    .catch(err => cb(err, undefined))
}

getPokemonList((_err, data) => {
  console.log(data)
})
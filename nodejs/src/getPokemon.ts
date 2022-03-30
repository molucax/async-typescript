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

export interface Pokemon {
  id: number;
  name: string;
  stats: {
    base_state: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

export const getPokemonList = async(): Promise<PokemonList> => {
  const listResponse = await fetch("http://pokeapi.co/api/v2/pokemon/"); 
  return await listResponse.json();
}

export const getPokemon = async(url: string): Promise<Pokemon> => {
  const pokemonResponse = await fetch(url);
  return await pokemonResponse.json();
}

export const getFirstPokemon = async(): Promise<Pokemon> => {
  return new Promise(async(resolve, reject) => {
    try {
      const list = await getPokemonList()
      resolve(await getPokemon(list.results[0].url));
    }
    catch(err) {
      reject(err)
    }}
  )
}

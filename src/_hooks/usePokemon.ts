import { useEffect, useState } from 'react';

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface PokemonData {
  pokemon_species_id: number;
  name: string;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonsprites: {
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
  }[];
}

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[] | undefined>([]);

  useEffect(() => {
    const list = getPokemon();
    list.then((data) => {
      setPokemon(data);
    });
  }, []);

  return pokemon;
};

const getPokemon = async () => {
  const graphqlQuery = `query{
      pokemon_v2_pokemon(order_by: {id: asc}, limit: 151) {
        pokemon_species_id
        name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }`;
  const endpoint = 'https://beta.pokeapi.co/graphql/v1beta';
  let res;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: graphqlQuery }),
    });
  } catch (error) {
    const msg = `Error in usePokemon hook: ${error}.`;
    console.log(msg);
    return;
  }

  if (res?.ok) {
    const data = await res.json();
    const pokemonList: Pokemon[] = await data.data.pokemon_v2_pokemon?.map(
      (pokemon: PokemonData) => {
        return {
          id: pokemon.pokemon_species_id,
          name: pokemon.name,
          image:
            pokemon.pokemon_v2_pokemonsprites[0].sprites.other[
              'official-artwork'
            ].front_default,
          types: pokemon.pokemon_v2_pokemontypes.map(
            (type: { pokemon_v2_type: { name: string } }) =>
              type.pokemon_v2_type.name
          ),
        };
      }
    );
    return pokemonList;
  } else {
    console.log(`An error has occured: ${res?.status}`);
  }
};
export default usePokemon;

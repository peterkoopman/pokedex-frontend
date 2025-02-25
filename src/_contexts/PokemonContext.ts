import { createContext } from 'react';
import { Pokemon } from '@/_hooks/usePokemon';

interface PokemonContextProps {
  pokemons: Pokemon[] | undefined;
}

const PokemonContext = createContext<PokemonContextProps>({
  pokemons: [],
});

export default PokemonContext;

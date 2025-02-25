'use client';

import { useEffect, useState } from 'react';
import usePokemon from '@/_hooks/usePokemon';
import styles from './PokemonList.module.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Pokemon } from '@/_hooks/usePokemon';

const PokemonList = () => {
  const list: Pokemon[] | undefined = usePokemon();
  const [pokemonList, setPokemonList] = useState<Pokemon[] | undefined>([]);
  useEffect(() => {
    setPokemonList(list);
  }, [list]);

  return (
    <div className={styles.list}>
      <h1>Pokedex</h1>
      <div className={styles.grid}>
        {pokemonList?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;

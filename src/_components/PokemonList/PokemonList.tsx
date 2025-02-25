'use client';

import { useContext } from 'react';
import styles from './PokemonList.module.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Pokemon } from '@/_hooks/usePokemon';
import PokemonContext from '@/_contexts/PokemonContext';
import Link from 'next/link';

const PokemonList = () => {
  const list: Pokemon[] | undefined = useContext(PokemonContext).pokemons;

  return (
    <div className={styles.list}>
      <h1>Pokedex</h1>
      <div className={styles.grid}>
        {list?.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemon/${pokemon.name}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;

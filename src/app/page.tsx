'use client';

import PokemonList from '@/_components/PokemonList/PokemonList';
import styles from './page.module.css';
import PokemonContext from '@/_contexts/PokemonContext';
import { useEffect, useState } from 'react';
import usePokemon from '@/_hooks/usePokemon';
import { Pokemon } from '@/_hooks/usePokemon';

export default function Home() {
  const list: Pokemon[] | undefined = usePokemon();
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);
  useEffect(() => {
    setPokemons(list);
  }, [list]);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PokemonContext.Provider value={{ pokemons }}>
          <PokemonList />
        </PokemonContext.Provider>
      </main>
    </div>
  );
}

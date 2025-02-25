'use client';

import { Pokemon } from '@/_hooks/usePokemon';
import { useEffect, useState } from 'react';
import usePokemon from '@/_hooks/usePokemon';
import { useParams } from 'next/navigation';
import PokemonContext from '@/_contexts/PokemonContext';
import PokemonDetails from '@/_components/PokemonDetails/PokemonDetails';
import styles from '../../page.module.css';

export default function Page() {
  const name = useParams<{ name: string }>().name;
  const list: Pokemon[] | undefined = usePokemon();
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);
  useEffect(() => {
    setPokemons(list);
  }, [list]);
  return (
    <main className={styles.page}>
      <PokemonContext.Provider value={{ pokemons: pokemons }}>
        <PokemonDetails name={name} />
      </PokemonContext.Provider>
    </main>
  );
}

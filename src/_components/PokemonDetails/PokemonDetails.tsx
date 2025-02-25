import { Pokemon } from '@/_hooks/usePokemon';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import PokemonContext from '@/_contexts/PokemonContext';
import { ucfirst, padNumber } from '@/_utilities/utilityFunctions';
import styles from './PokemonDetails.module.css';
import typestyles from '../../_styles/types.module.css';

const PokemonDetails = ({ name }: { name: string }) => {
  const list: Pokemon[] | undefined = useContext(PokemonContext).pokemons;
  const pokemon = list?.find((p) => p.name == name);
  const { id, image, types, abilities, height, weight, base_experience } =
    pokemon || {};

  return (
    <div className={styles.details}>
      <Link href="/">&larr; Back to list</Link>
      <h1 className={styles.title}>
        {ucfirst(name)}{' '}
        <span className={styles.number}>#{padNumber(id, 4)}</span>
      </h1>
      <div className={styles.grid}>
        <div className={styles.image}>
          {image && <Image src={image} alt={name} width={400} height={400} />}
        </div>
        <div>
          <h2>Stats</h2>
          <ul>
            <li>Height: {height}</li>
            <li>Weight: {weight}</li>
            <li>Base experience: {base_experience}</li>
          </ul>
          <h2>Types</h2>
          <ul className={styles.typelist}>
            {types?.map((type) => (
              <li
                key={type}
                className={`${typestyles[type]} ${typestyles.typeclass}`}>
                {ucfirst(type)}
              </li>
            ))}
          </ul>
          <h2>Abilities</h2>
          <ul>
            {abilities?.map((ability: string) => (
              <li key={ability}>{ucfirst(ability)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

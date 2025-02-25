import Image from 'next/image';
import { Pokemon } from '@/_hooks/usePokemon';
import styles from './PokemonCard.module.css';
import typestyles from '../../_styles/types.module.css';
import { ucfirst, padNumber } from '@/_utilities/utilityFunctions';

interface PokemonCardProps {
  pokemon: Pokemon;
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.mainImage}
        src={pokemon.image}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <div className={styles.details}>
        <p className={styles.idno}>#{padNumber(pokemon.id, 4)}</p>
        <h2 className={styles.name}>{ucfirst(pokemon.name)}</h2>
        <div className="types">
          {pokemon.types.map((type: string) => (
            <span
              key={type}
              className={`${typestyles[type]} ${typestyles.typeclass}`}>
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

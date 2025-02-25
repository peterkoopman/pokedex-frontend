import PokemonList from '@/_components/PokemonList/PokemonList';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PokemonList />
      </main>
    </div>
  );
}

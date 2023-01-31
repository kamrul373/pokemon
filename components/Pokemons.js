import styles from "../styles/pokemons.module.css"
import PokemonCard from "./PokemonCard";
const Pokemons = ({pokemons}) => {
    return (
        <div className={styles.grid}>
            {
                pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>)
            }
        </div>
    );
};

export default Pokemons;
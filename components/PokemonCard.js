import Link from "next/link"
import styles from "../styles/pokemons.module.css"
import Image from "next/image";
const PokemonCard = ({pokemon}) => {
    
    return (
        <>
            <Link href={`pokemon/${pokemon.name}`} className={styles.pokemon}>
                <div className={styles.card}>
                    <div className={styles.pokemonimg} >
                        <h4>#0{pokemon.id}0</h4>
                        <img src={pokemon.image}  width="100%" height="100%" />
                    </div>
                    <div className={styles.content}>
                        <h3>{pokemon.name}</h3>
                        <div className={`${styles.flex}`}>
                            {
                                pokemon?.types.map((type,idx) => {
                                    let typeName = type.type.name;
                                    return <div className={`${styles[typeName]} ${styles.pill}`} >{type.type.name}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default PokemonCard;
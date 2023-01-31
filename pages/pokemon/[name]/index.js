import logo from "../../../assets/img/Logo.png"
import Image from "next/image";
import { request, gql } from 'graphql-request'
import styles from "../../../styles/singlepokemonpage.module.css"
import Link from "next/link";
const pokemon = ({pokemon}) => {
    console.log(pokemon)
    const imageURL = ``
    return (
        <div className={styles.singlepage}>
            <div className={styles.singlepagecontent}>
                <div className={styles.logo}>
                    <Link href="/"><Image src={logo} alt="logo" /></Link>
                </div>
                <div className={styles.grid}>
                    <div>
                        <h2>{pokemon.name} #0{pokemon.id}0</h2>
                        <div className={styles.card}>
                           <div className={styles.flex}>
                                <div>
                                    <div className={styles.height}>
                                        <h4>Height</h4>
                                        <p>{pokemon.height}</p>
                                    </div>
                                    <div>
                                        <h4>Weight</h4>
                                        <p>{pokemon.weight}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.exp}>
                                        <h4>Experience</h4>
                                        <div>{pokemon.base_experience}</div>
                                    </div>
                                    
                                    <div>
                                        <h4>Abilities</h4>
                                        <div>{pokemon.abilities.map((ability,idx)=> <p key={idx} className={styles.ability}>{ability.ability.name}</p>)}</div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} width="100%" height="100%" />
                    </div>
                    <div>
                        <div className={`${styles.flex}`}>
                            <div>
                                <h4>Type</h4>
                                {
                                    pokemon?.types.map((type,idx) => {
                                        let typeName = type.type.name;
                                        return <div key={idx} className={`${styles[typeName]} ${styles.pill}`} >{type.type.name}</div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({params}) => {
   
    const query = gql ` query pokemon($name: String!){
        pokemon(name: $name) {
           id
           name
           height
            weight
            abilities{
              ability{
                name
              }
            }
            stats{
              base_stat
              
            }
            base_experience
            types {
              type {
                name
              }
            }
          }
    }`
    const gqlVariables = {
        name : params.name
      };
      const pokemon = await request({
        url: "https://graphql-pokeapi.graphcdn.app",
        document: query,
        variables: gqlVariables,
        requestHeaders: { 'Content-Type': 'application/json' },
       
      })
    return {
        props : {
            pokemon : pokemon.pokemon
        }
    }
}
export default pokemon;
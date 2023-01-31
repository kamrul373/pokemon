
import { request, gql } from 'graphql-request'
const pokemon = ({pokemon}) => {
    console.log(pokemon)
    return (
        <div>
            <h2>Single Pokemon page</h2>
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
            pokemon 
        }
    }
}
export default pokemon;
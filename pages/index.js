import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import { request, gql, GraphQLClient } from 'graphql-request'
const inter = Inter({ subsets: ['latin'] })

export default function Home({pokemons}) {
  
  return (
    <>
      <Header pokemons={pokemons}></Header>
    </>
  )
}
export const getStaticProps = async () => {
  const query =  gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        url
        name
        image : artwork
      }
    }
  }
`;
const gqlVariables = {
  limit: 10,
  offset: 1,
};
const data = await request({
  url: "https://graphql-pokeapi.graphcdn.app",
  document: query,
  variables: gqlVariables,
  requestHeaders: { 'Content-Type': 'application/json' },
 
})
const pokemons = data.pokemons.results; 
// pokemon type
let newPokemons = [];
for(let i = 0; i< pokemons.length;i++){
  const gquery = gql`
  query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    types {
      type {
        name
      }
    }
  }
}
`
  const name = {
      name : pokemons[i]["name"]
  }
      const pokemon = await request({
      url: "https://graphql-pokeapi.graphcdn.app",
      variables: name,
      document: gquery,
  })
  const current = pokemons[i];
  const modified = {
      ...current,
      types: pokemon.pokemon.types
  }
  newPokemons = [...newPokemons, modified]
}

return  {
  props: {
      pokemons: newPokemons
  }
}


}

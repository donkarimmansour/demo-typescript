"use client";

import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";

const link = new HttpLink({
  //uri: `${process.env.SITE_URL}/api/graphql`,
  uri: `http://localhost:3000/api/graphql`,
});


const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});



const GraphQLProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}


export default GraphQLProvider;
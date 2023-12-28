
import { HttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { NextSSRApolloClient, NextSSRInMemoryCache } from "@apollo/experimental-nextjs-app-support/ssr";
import { setContext } from '@apollo/client/link/context';

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || "http://localhost:3000/api/graphql";

export const { getClient } = registerApolloClient(() => {


  // Create a function to set the headers with the access token
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${"ACCESS_TOKEN"}`,
      },
    };
  });

  
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  const link = authLink.concat(httpLink); // Combine the authLink and httpLink

 
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: link

  });

});
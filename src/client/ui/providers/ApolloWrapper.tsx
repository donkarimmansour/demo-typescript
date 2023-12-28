"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";

//const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || "https://jsonplaceholder.ir/graphql";
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || "http://localhost:3000/api/graphql";

function makeClient() {  

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


    //return new ApolloClient({
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    // in a SSR environment, if you use multipart features like
                    // @defer, you need to decide how to handle these.
                    // This strips all interfaces with a `@defer` directive from your queries.
                    new SSRMultipartLink({ stripDefer: true }),
                    link,
                ])
                : link,
    });
}

// function makeSuspenseCache() {
//     return new SuspenseCache();
// } makeSuspenseCache={makeSuspenseCache}

export function ApolloWrapper({ children }: React.PropsWithChildren) {

    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
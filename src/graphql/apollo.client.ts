import {
    ApolloClient,
    InMemoryCache,
    // ApolloProvider,
    // useQuery,
    gql
  } from "@apollo/client/core";

  const client = new ApolloClient({
    uri: 'http://localhost:3001',
    cache: new InMemoryCache()
  });

  export default client;
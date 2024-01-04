// src/apollo.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://athayog.myshopify.com/api/2021-07/graphql.json',
});

const authLink = setContext((_, { headers }) => {
  // Use your generated storefront access token here
  const token = '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';

  return {
    headers: {
      ...headers,
      'X-Shopify-Storefront-Access-Token': token,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

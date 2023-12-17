// utils/shopify.js

import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: '0143680c8ac2cb44476b3b1c06e9a205',
  domain: 'http://athayog.myshopify.com',
});

export const fetchProductByHandle = async (handle) => {
  const query = `
    query($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        // Add other fields you need
      }
    }
  `;

  const variables = {
    handle,
  };

  const response = await client.graphQLClient.send(query, variables);

  if (response.errors) {
    throw new Error(response.errors[0].message);
  }

  return response.data.productByHandle;
};

export default fetchProductByHandle;

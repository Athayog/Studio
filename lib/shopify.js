import {createStorefrontApiClient} from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: 'http://athayog.myshopify.com',
  apiVersion: '2023-10',
  publicAccessToken: "0143680c8ac2cb44476b3b1c06e9a205",
});

export default client


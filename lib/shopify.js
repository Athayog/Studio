import {createStorefrontApiClient} from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: 'http://athayog.myshopify.com',
  apiVersion: '2023-10',
  publicAccessToken: process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN,
});

export default client
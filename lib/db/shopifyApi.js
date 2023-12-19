// utils/api.js
import fetch from 'isomorphic-unfetch';
import dotenv from 'dotenv';

dotenv.config();

const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export const fetchShopifyData = async (query) => {
  try {
    const response = await fetch('https://your-shopify-store.myshopify.com/api/2021-07/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data from Shopify:', error);
    throw error;
  }
};

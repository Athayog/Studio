import client from "@/lib/shopify";
// pages/api/product/[handle].js
export default async function handler(req, res) {
  const { handle } = req.query;

  try {
    // Fetch product data using Shopify Storefront API
    const productQuery = `
      query {
        productByHandle(handle: "${handle}") {
          id
          title
          description
          variants(first: 1) {
            edges {
              node {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `;

    const { data, errors, extensions } = await client.request(productQuery, {
        variables: {}
    });
    const product = data;

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

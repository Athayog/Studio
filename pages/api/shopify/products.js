import client from "@/lib/shopify";

export default async function handler(_req, res) {
    const productQuery = `
    query getProductList {
      products(first: 200, reverse: false) {
        edges {
          node {
            id
            handle
            description
            title
            totalInventory
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  src
                  altText
                }
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

    res.status(200).json(data);
}
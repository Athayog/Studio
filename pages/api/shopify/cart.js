import client from "@/lib/shopify";

export default async function handler(_req, res) {

    const productQuery = `
    query {
        checkout {
          id
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
                quantity
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
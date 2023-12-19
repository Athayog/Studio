// graphql.js

import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          handle
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
          images(first: 1) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;

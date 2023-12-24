import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import dotenv from 'dotenv';
import { gql } from 'graphql-request';



dotenv.config();

const client = createStorefrontApiClient({
	storeDomain: 'http://athayog.myshopify.com',
	apiVersion: '2023-10',
	publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
});

export const fetchShopifyData = async () => {
	try {
		const query = `
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            handle
          }
        }
      }
    }
    `
		const result = await client.request(query);
		return result.data;
	} catch (error) {
		console.error('Error fetching data from Shopify:', error);
		throw error;
	}
};




export const fetchSingleProduct = async (handle) => {
	try {

		const productQuery = gql`
  query ProductQuery($handle: String) {
    product(handle: $handle) {
      id
      title
      handle
      description
      featuredImage {
    	  id
        src
        transformedSrc
    	}
      variants(first: 10) {
        edges {
          node {
            id,
            priceV2{
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
			variables: {
				handle: handle,
			},
		});

		return data.product;
	} catch (error) {
		console.error('Error fetching data from Shopify:', error);
		throw error;
	}
};



export const addToCart = async (checkoutId, variantId, quantity) => {
	try {
		if (typeof checkoutId !== 'string' || checkoutId.trim() === '') {
			throw new Error('Invalid checkoutId');
		}
		const mutation = gql`
    mutation {
      checkoutLineItemsAdd(
        checkoutId: "${checkoutId}"
        lineItems: [
          {
            variantId: "${variantId}"
            quantity: ${quantity}
          }
        ]
      ) {
        checkout {
          id
          lineItems(first: 10) {
            edges {
              node {
                title
                quantity
              }
            }
          }
        }
      }
    }
    `;


	console.log("client",client)

		const data = await client.request(mutation);

		return data;
	} catch (error) {
		console.error('Error adding to cart:', error);
		throw error;
	}
};



export const fetchOrCreateCheckout = async () => {
	try {
		// Check if checkoutId is stored in localStorage or any other state management solution
		let checkoutId = localStorage.getItem('checkoutId');

		if (!checkoutId) {
			// If checkoutId doesn't exist, create a new checkout
			const createCheckoutMutation = gql`
					mutation {
					checkoutCreate(input: {}) {
						checkout {
						id
						}
					}
					}
				`;
				console.log("client",client)

			const createCheckoutResult = await client.request(createCheckoutMutation);
			const newCheckout = createCheckoutResult.data.checkoutCreate.checkout;

			// Ensure that checkoutId is a string before storing
			checkoutId = String(newCheckout.id);

			// Store checkoutId in localStorage or any other state management solution
			localStorage.setItem('checkoutId', checkoutId);
		}

		return checkoutId;
	} catch (error) {
		console.error('Error fetching or creating checkout:', error);
		throw error;
	}
};


export const fetchCartItems = async (checkoutId) => {
	try {
		// Assume createStorefrontApiClient returns an instance of your GraphQL client

		if (!checkoutId) {
			checkoutId = localStorage.getItem('checkoutId');
		}

		// Your GraphQL query for fetching cart items
		const getCartItemsQuery = gql`
    query {
      node(id: "${checkoutId}") {
        ... on Checkout {
          id
          webUrl
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                quantity
                variant {
                  id
                  priceV2{
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
    `;
	console.log("client",client)
		// Execute the query with the provided checkoutId
		const response = await client.request(
			getCartItemsQuery,
		);

		// Extract and return the cart items from the response
		if (response.errors) {
			return response.errors
		}
		return response.data.node
	} catch (error) {
		console.error('Error fetching cart items:', error);
		throw error;
	}
};

export const removeProductFromCart = async (checkoutId, lineItemId) => {
	try {
		const mutation = gql`
    mutation {
      checkoutLineItemsRemove(checkoutId: "${checkoutId}", lineItemIds: ["${lineItemId}"]) {
        checkout {
        
          lineItems(first: 10) {
            edges {
              node {
                title
                quantity
              }
            }
          }
        }
      }
    }
    `;

	console.log("client",client)
		const response = await client.request(
			mutation,
		);

		if (response.errors) {
			console.error('Error removing product from cart:', response.errors);
			localStorage.removeItem('checkoutId')
			throw response.errors;
		} else {

			return response.data.checkoutLineItemsRemove.checkout.lineItems.edges
		}

	} catch (error) {
		console.error('Error removing product from cart:', error);
		throw error;
	}
}
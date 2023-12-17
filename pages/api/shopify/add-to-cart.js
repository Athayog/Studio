import client from "@/lib/shopify";


// pages/api/add-to-cart.js
export default async function handler(req, res) {
  const { variantId, quantity } = req.body;

  try {
    // Fetch the current checkout ID
    const checkoutIdQuery = `
      query {
        checkout {
          id
        }
      }
    `;

    console.log("CLIet",client.request)
    // Use the `query` method to execute the GraphQL query
    const response = await client.request(checkoutIdQuery);
    const data = response?.data;

    // Log the raw response
    console.log('Raw GraphQL Response:', response);

    // Check if data is undefined
    if (!data) {
        console.log(response.errors.graphQLErrors)
      return res.status(500).json({ error: 'Unable to retrieve data from the GraphQL response' });
    }

    // Check if checkout is undefined
    const checkout = data.checkout;
    if (!checkout || !checkout.id) {
      return res.status(500).json({ error: 'Unable to retrieve checkout ID from the GraphQL response' });
    }

    // Add the product variant to the cart
    const addToCartMutation = `
      mutation {
        checkoutLineItemsAdd(checkoutId: "${checkout.id}", lineItems: [{variantId: "${variantId}", quantity: ${quantity}}]) {
          checkout {
            id
          }
          checkoutUserErrors {
            code
            field
            message
          }
        }
      }
    `;

    // Use the `query` method to execute the GraphQL mutation
    const addToCartResponse = await client.request(addToCartMutation);

    // Check for errors in the response
    const errors = addToCartResponse?.data?.checkoutLineItemsAdd?.checkoutUserErrors;
    if (errors && errors.length > 0) {
      return res.status(400).json({ error: 'Error adding item to cart', errors });
    }

    // Return the updated cart
    const updatedCheckoutId = addToCartResponse?.data?.checkoutLineItemsAdd?.checkout?.id;
    if (!updatedCheckoutId) {
      return res.status(500).json({ error: 'Unable to retrieve updated checkout ID from the GraphQL response' });
    }

    res.status(200).json({ success: true, updatedCheckoutId });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}




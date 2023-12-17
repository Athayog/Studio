// components/AddToCartButton.js
import client from '@/lib/shopify';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


const AddToCartButton = ({ variantId, onUpdateCart }) => {
    const [loading, setLoading] = useState(false);
    const [checkoutId, setCheckoutId] = useState(null);

    useEffect(() => {
        // If checkoutId is not provided, initiate a new checkout
        if (!checkoutId) {
            createNewCheckout();
        }
    }, [checkoutId]);

    const createNewCheckout = async () => {
        try {
            setLoading(true);

            const response = await client.request(`
          mutation {
            checkoutCreate(input: {}) {
              checkout {
                id
              }
            }
          }
        `);

                const newCheckoutId = response.data.checkoutCreate.checkout.id;
               console.log('s',newCheckoutId)
            onUpdateCart(newCheckoutId);
            setCheckoutId(newCheckoutId)
        } catch (error) {
            console.error('Error creating new checkout:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchCheckoutId = async () => {
        try {
            const response = await client.request(`
        query {
          checkout {
            id
          }
        }
      `);

            if (!response.data || !response.data.checkout || !response.data.checkout.id) {
                console.error('Invalid checkout ID response:', response);
                // Handle the error as needed
                return;
            }

            setCheckoutId(response.data.checkout.id);
        } catch (error) {
            console.error('Error fetching checkout ID:', error);
            // Handle the error as needed
        }
    };

    const addToCart = async () => {
        try {
            setLoading(true);
    
            if (!checkoutId) {
                await fetchCheckoutId();
            }

            console.log(checkoutId)
            
            const response = await client.request(`mutation {
                checkoutLineItemsAdd(
                  checkoutId: "${checkoutId}",
                  lineItems: [{ variantId: "${variantId}", quantity: 1 }]
                ) {
                  checkout {
                    id
                  }
                }
              }
      
            `);
            
    
            const updatedCheckoutId = response.data.checkoutLineItemsAdd.checkout.id;
            onUpdateCart(updatedCheckoutId);
        } catch (error) {
            console.error( error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <Button onClick={addToCart} isLoading={loading} loadingText="Adding to Cart">
            Add to Cart
        </Button>
    );
};

export default AddToCartButton;

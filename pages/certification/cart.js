// pages/index.js (or any other Next.js component)
import client from '@/lib/shopify';
import useCartStore from '@/lib/zustand';
import { useEffect, useState } from 'react';

const Home = () => {
    const [checkoutId, setCheckoutId] = useState(null);
    const { addCheckoutID, checkoutID } = useCartStore()

    useEffect(() => {
        const createNewCheckout = async () => {
            try {
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
                setCheckoutId(newCheckoutId);
                addCheckoutID(newCheckoutId)

            } catch (error) {
                console.error('Error creating new checkout:', error);
            }
        };

        if (!checkoutID) {

            createNewCheckout();
        } else {
            setCheckoutId(checkoutID);
        }
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <div>
            <h1>Welcome to my store</h1>
            {checkoutId && <p>New checkout created with ID: {checkoutId}</p>}
        </div>
    );
};

export default Home;

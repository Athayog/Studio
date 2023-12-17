// pages/index.js
import Header from '@/components/shopify/Header';
import ProductList from '@/components/shopify/ProductList';
import client from '@/lib/shopify';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


const Home = () => {

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const fetchCartItemCount = async () => {
      try {
        const response = await client.request(`
          query {
            checkout {
              id
              lineItems(first: 10) {
                edges {
                  node {
                    quantity
                  }
                }
              }
            }
          }
        `);

        const itemCount = response.data.checkout.lineItems.edges.reduce(
          (total, edge) => total + edge.node.quantity,
          0
        );

        setCartItemCount(itemCount);
      } catch (error) {
        console.error('Error fetching cart item count:', error);
      }
    };

    fetchCartItemCount();
  }, []);
  return (
    <Box>
        <Header cartItemCount={cartItemCount} />
      <h1>Welcome to My Next.js + Shopify Storefront App</h1>
      <ProductList />
    </Box>
  );
};

export default Home;

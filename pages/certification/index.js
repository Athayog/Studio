// pages/index.js
import ProductList from '@/components/shopify/ProductList';
import { Box } from '@chakra-ui/react';


const Home = () => {
  return (
    <Box>
      <h1>Welcome to My Next.js + Shopify Storefront App</h1>
      <ProductList />
    </Box>
  );
};

export default Home;

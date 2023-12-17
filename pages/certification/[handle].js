// pages/products/[handle].js
import ProductDetail from '@/components/shopify/ProductDetails';
import { Box } from '@chakra-ui/react';
// import ProductDetail from '../../components/ProductDetail';

const ProductPage = () => {
  return (
    <Box>
      <h1>Product Page</h1>
      
      <ProductDetail />
    </Box>
  );
};

export default ProductPage;

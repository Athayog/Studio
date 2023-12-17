// components/ProductList.js
import useSWR from 'swr';
import { Box, Text } from '@chakra-ui/react';
import client from '@/lib/shopify';


const fetcher = async (query) => {
  const response = await client.graphql(query);
  return response.data;
};

const ProductList = () => {
  const { data, error } = useSWR(`
    query {
      products(first: 5) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `, fetcher);

  if (error) return <Text>Error loading products</Text>;
  if (!data) return <Text>Loading...</Text>;

  const products = data.products.edges;

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">Product List</Text>
      <ul>
        {products.map((product) => (
          <li key={product.node.id}>{product.node.title}</li>
        ))}
      </ul>
    </Box>
  );
};

export default ProductList;

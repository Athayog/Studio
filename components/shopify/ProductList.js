// components/ProductList.js
import useSWR from 'swr';
import { Box, Text } from '@chakra-ui/react';
import client from '@/lib/shopify';
import Link from 'next/link';


const fetcher = async (query) => {
  const response = await client.request(query);
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

  if (error) console.log("E",error)
  if (!data) return <Text>Loading...</Text>;

  const products = data.products.edges;

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">Product List</Text>
      <ul>
        {products.map((product) => (
            <Link key={product.node.id} href={'/certification/'+ product.node.handle}>
            
            <li >{product.node.title}</li>
            </Link>
        ))}
      </ul>
    </Box>
  );
};

export default ProductList;

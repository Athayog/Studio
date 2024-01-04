// pages/index.js
import { fetchShopifyData } from '@/lib/shopifyClient';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';


function Courses({ data, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

 if (!data) return <div>No data</div>
 console.log(data)
  return (
    <div>
      <NavbarHelper/>
      <h1>Product List</h1>
      <ul>
        {data.products.edges.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.title}</h2>
            <p>{node.description}</p>
            <Button><Link href={"/yoga-academy/product/"+node.handle} passHref>Check product  </Link></Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Courses.getInitialProps = async () => {
  try {
    const data = await fetchShopifyData();
    return { data, loading: false, error: null };
  } catch (error) {
    return { data: null, loading: false, error };
  }
};

export default Courses;
Courses.Layout = HomeLayout
;
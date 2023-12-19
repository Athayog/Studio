// pages/product/[productId].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { addToCart, fetchOrCreateCheckout, fetchSingleProduct } from '@/lib/shopifyClient';
import Link from 'next/link';
import CartComponent from '@/components/shopify/CartComponent';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box } from '@chakra-ui/react';

function ProductPage({ product, loading, error }) {
  const [quantity, setQuantity] = useState(1);
  const [checkoutId, setCheckoutId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch or create a checkout when the component mounts
    const fetchCheckout = async () => {
      // Logic to fetch or create a checkout
      // You might want to store checkout ID in state or a global state management solution
    };

    fetchCheckout();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      let checkoutID = null
      if (!checkoutId) {
        checkoutID = await fetchOrCreateCheckout()

        setCheckoutId(checkoutID)

      }



      let checkoutId = checkoutID || checkoutId
      console.log(product)

      const result = await addToCart(checkoutId, product.variants.edges[0].node.id, quantity);

      // Handle the result, e.g., show a success message or redirect to the cart page
      console.log('Product added to cart:', result);

      // Redirect to the cart page
      // router.push('/cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(product)

  return (
    <Box minH="100vh">
      <NavbarHelper />
      <Link href="/yoga-academy/courses">Back</Link>
      <CartComponent checkoutId={checkoutId} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      </label>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </Box>
  );
}

ProductPage.getInitialProps = async ({ query }) => {
  try {
    const productId = query.productId;
    const product = await fetchSingleProduct(productId);
    return { product, loading: false, error: null };
  } catch (error) {
    return { product: null, loading: false, error };
  }
};

export default ProductPage;
ProductPage.Layout = HomeLayout
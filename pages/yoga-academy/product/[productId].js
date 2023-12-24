import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import CartComponent from '@/components/shopify/CartComponent';
import { addToCart, fetchOrCreateCheckout, fetchSingleProduct } from '@/lib/shopifyClient';
import useShopifyStore from '@/lib/useShopifyStore';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function ProductPage({ product, loading, error }) {
	const [quantity, setQuantity] = useState(1);
	const [checkoutId, setCheckoutId] = useState(null);
	const [loadingButton, setLoading] = useState(false)

	const { setCartItems } = useShopifyStore()

	const handleAddToCart = async (product) => {
		setLoading(true)
		try {
			let checkoutID = null
			if (!checkoutId) {
				checkoutID = await fetchOrCreateCheckout()
				setCheckoutId(checkoutID)
			}

			let checkoutId = checkoutID || checkoutId
			const result = await addToCart(checkoutId, product.variants.edges[0].node.id, quantity);

			setCartItems(result)
			setLoading(false)
		} catch (error) {
			setLoading(false)
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	console.log(product)

	return (
		<div>
			<NavbarHelper />
			<Flex bg='green.50' justifyContent='space-between' alignItems='center' width='full' py={2} px={10} borderBottom='1px solid #ddd'>
				<Link href="/yoga-academy/" passHref>
					<Button colorScheme='blue' size='sm' leftIcon={<ArrowBackIcon />}>Back</Button>
				</Link>
				<CartComponent checkoutId={checkoutId} />
			</Flex>
			<Box minH="100vh" maxW='container.xl' margin='0 auto' py={10} width='100%'>
				<Flex gap={20} mt={10}>
					<Image alt="product" src={product.featuredImage.src} objectFit='contain' width={500} height={500} />
					<Flex mt={10} direction='column' gap={6}>
						<Text fontSize='3xl'>
							{product.title}
						</Text>

						<Text>
							{product.description}
						</Text>
						<Text color='blue.500' fontSize='xl'>₹{product.variants.edges[0].node.priceV2.amount}</Text>

						<Flex alignItems='center' mt={10} gap={10}>
							<Input w={10} type='number' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} display="none" />
							<Button isLoading={loadingButton} maxW='max-content' colorScheme="purple" onClick={() => handleAddToCart(product)}>Add To Cart</Button>
						</Flex>

					</Flex>
				</Flex>
			</Box>
		</div>

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
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import AddToCartButton from './AddToCartButton';
import Link from 'next/link';


const ProductDetail = () => {
    const router = useRouter();
    const { handle } = router.query;

    const [checkoutId, setCheckoutId] = useState(null);
    // State to store the product information
    const [productData, setProductData] = useState(null);

const onUpdateCart = () => {
    console.log("WOO")
}




    useEffect(() => {
        // Function to fetch product data
        const fetchProductData = async () => {
            try {
                const response = await fetch(`/api/shopify/product/${handle}`);
                const data = await response.json();
                setProductData(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        // Fetch product data if handle changes
        if (handle) {
            fetchProductData();
        }
    }, [handle]);

    useEffect(() => {
        const fetchCheckoutId = async () => {
            try {
                // Fetch or create a checkout ID
                const response = await client.query(`
            query {
              checkout {
                id
              }
            }
          `);

                setCheckoutId(response.data.checkout.id);
            } catch (error) {
                console.error('Error fetching checkout ID:', error);
            }
        };

        fetchCheckoutId();
    }, []);

    const handleUpdateCart = (updatedCheckoutId) => {
        setCheckoutId(updatedCheckoutId);
        // You can perform additional actions if needed, e.g., show a notification
    };


    return (
        <Box>
            <div>
        <Link href="/certification">Home</Link>
                {productData && (
                    <div>
                        <h1>{productData.productByHandle.title}</h1>
                        <p>{productData.productByHandle.description}</p>
                        <p>Price: {productData.productByHandle.variants.edges[0].node.priceV2.amount} {productData.productByHandle.variants.edges[0].node.priceV2.currencyCode}</p>
                        <AddToCartButton variantId={productData.productByHandle.id} onUpdateCart={handleUpdateCart} />
                    </div>
                )}
            </div>
        </Box>
    );
};

export default ProductDetail;

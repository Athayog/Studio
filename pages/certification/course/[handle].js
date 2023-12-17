
import AddToCartButton from '@/components/shared/AddToCartButton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductPage = () => {
  const router = useRouter();
  const { handle } = router.query;

  // State to store the product information
  const [productData, setProductData] = useState(null);

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
  console.log(productData)
  return (
    
    <div>
     
      {productData && (
        <div>
          <h1>{productData.productByHandle.title}</h1>
          <p>{productData.productByHandle.description}</p>
          <AddToCartButton variantId={productData.productByHandle.variants.edges[0].node.id}/>
          <p>Price: {productData.productByHandle.variants.edges[0].node.priceV2.amount} {productData.productByHandle.variants.edges[0].node.priceV2.currencyCode}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
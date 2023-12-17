// components/AddToCartButton.js

import { useState } from 'react';

const AddToCartButton = ({ variantId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/shopify/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          variantId,
          quantity: 1, // You can adjust the quantity as needed
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Product added to cart successfully');
      } else {
        console.error('Error adding product to cart:', data.error);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? 'Adding to Cart...' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;

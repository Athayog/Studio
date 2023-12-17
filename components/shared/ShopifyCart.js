

import { useEffect, useState } from 'react';

const ShopifyCart = () => {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('/api/shopify/cart');
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  console.log(cartData)
  
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartData ? (
        <div>
          <ul>
            {cartData.lineItems.edges.map(({ node }) => (
              <li key={node.id}>
                {node.title} - {node.quantity} x {node.variant.priceV2.amount} {node.variant.priceV2.currencyCode}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading cart...</p>
      )}
    </div>
  );
};

export default ShopifyCart;

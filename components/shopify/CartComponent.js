import { fetchCartItems } from '@/lib/shopifyClient';
import { useEffect, useState } from 'react';
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartComponent = ({ checkoutId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cartItems, setCartItems] = useState(null);

  console.log(checkoutId)

  useEffect(() => {
    const fetchAndSetCartItems = async () => {
      try {
        const items = await fetchCartItems(checkoutId);
        console.log(items)
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchAndSetCartItems();
  }, [checkoutId]);

  if (!cartItems) {
    return <p>Loading...</p>;
  }

  console.log(cartItems)
  return (
    <div>


      <IconButton icon={<FaShoppingCart />} aria-label="Open Cart" onClick={onOpen} />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <Box>
              {cartItems.map((item) => (
                <li key={item.node.id}>
                  {item.node.title} - {item.node.quantity} x{' '}
                  {item.node.variant.priceV2.amount} {item.node.variant.priceV2.currencyCode}
                </li>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartComponent;

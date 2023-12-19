import { fetchCartItems } from '@/lib/shopifyClient';
import { useEffect, useState } from 'react';
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, IconButton, Button } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import useShopifyStore from '@/lib/useShopifyStore';
import {removeProductFromCart} from '@/lib/shopifyClient'
const CartComponent = ({ checkoutId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentCartItems, setCartItems] = useState(null);

  const {cartItems} = useShopifyStore();
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
  }, [checkoutId,cartItems]);

  const removeFromCartAction =  async(checkoutId, id) => {
   
    const items = await  removeProductFromCart(checkoutId, id)
    setCartItems(items);
  }


  if (!currentCartItems) {
    return <p>Loading...</p>;
  }

console.log(currentCartItems)
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
              {currentCartItems.map((item) => (
                
                <li key={item.node.id}>
                  {item.node.title} - {item.node.quantity} {item.node.id}
                  {item.node.variant.priceV2.amount} {item.node.variant.priceV2.currencyCode}
                  <Button onClick={() => removeFromCartAction(checkoutId, item.node.id)} >Remove</Button>
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

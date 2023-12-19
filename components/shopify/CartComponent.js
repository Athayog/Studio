import { fetchCartItems } from '@/lib/shopifyClient';
import { useEffect, useState } from 'react';
import { Box,Flex, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, IconButton, Button } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import useShopifyStore from '@/lib/useShopifyStore';
import { MdDelete } from "react-icons/md";
import { removeProductFromCart } from '@/lib/shopifyClient'
const CartComponent = ({ checkoutId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentCartItems, setCartItems] = useState(null);

  const { cartItems } = useShopifyStore();
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
  }, [checkoutId, cartItems]);

  const removeFromCartAction = async (checkoutId, id) => {

    const items = await removeProductFromCart(checkoutId, id)
    setCartItems(items);
  }


  if (!currentCartItems) {
    return <p>Loading...</p>;
  }

  console.log(currentCartItems)
  return (
    <div>




      <Box position="relative" width='fit-content' onClick={onOpen}>
        <Button
          leftIcon={<FaShoppingCart />}
          colorScheme="teal"
          variant="outline"
        >
          Cart
        </Button>
        {currentCartItems.length > 0 && (
          <Box
            position="absolute"
            top="-1"
            right="-1"
            bg="red.500"
            color="white"
            borderRadius="50%"
            padding="0.2rem 0.5rem"
            fontSize="sm"
          >
            {currentCartItems.length}
          </Box>
        )}
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <Box>
              {currentCartItems.map((item) => (

                <Flex key={item.node.id} justifyContent="space-between" alignItems='center'>
                  {item.node.title} - {item.node.quantity}
                  {item.node.variant.priceV2.amount} {item.node.variant.priceV2.currencyCode}
                  <IconButton icon={<MdDelete/>} onClick={() => removeFromCartAction(checkoutId, item.node.id)} >Remove</IconButton>
                </Flex>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartComponent;

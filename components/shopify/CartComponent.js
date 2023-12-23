import { fetchCartItems } from '@/lib/shopifyClient';
import { useEffect, useState } from 'react';
import { Box, Flex, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, IconButton, Button, DrawerFooter, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import useShopifyStore from '@/lib/useShopifyStore';
import { MdDelete } from "react-icons/md";
import { removeProductFromCart } from '@/lib/shopifyClient'
const CartComponent = ({ checkoutId }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentCartItems, setCartItems] = useState(null);
	const [checkoutWebUrl, setCheckoutWebUrl] = useState(null)

	const { cartItems } = useShopifyStore();
	console.log(checkoutId)

	useEffect(() => {
		const fetchAndSetCartItems = async () => {
			try {
				const items = await fetchCartItems(checkoutId);
				console.log(items)
				setCartItems(items.lineItems.edges);
				setCheckoutWebUrl(items.webUrl)
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



	return (
		<div>
			<Box position="relative" width='fit-content' onClick={onOpen}>
				<Button
					leftIcon={<FaShoppingCart />}
					colorScheme="teal"
					variant="ghost"
				>
					{currentCartItems && currentCartItems.length > 0 && (
						<Text>{currentCartItems.length}</Text>
					)}
				</Button>

			</Box>

			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Your Cart</DrawerHeader>

					<DrawerBody>
						<Box>
							{currentCartItems && currentCartItems.map((item) => (

								<Flex key={item.node.id} justifyContent="space-between" alignItems='center'>
									{item.node.title} - {item.node.quantity}
									{/* {item.node.variant.priceV2.amount} {item.node.variant.priceV2.currencyCode} */}
									<IconButton icon={<MdDelete />} onClick={() => removeFromCartAction(checkoutId, item.node.id)} >Remove</IconButton>
								</Flex>
							))}
						</Box>
						{!currentCartItems && <p>Cart is empty</p>}
						{currentCartItems && currentCartItems.length == 0 && <p>Cart is empty</p>}
					</DrawerBody>
					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Contiue
						</Button>

						{currentCartItems && currentCartItems.length != 0 && <a href={checkoutWebUrl} ><Button colorScheme='green' >Checkout</Button></a>}



					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default CartComponent;

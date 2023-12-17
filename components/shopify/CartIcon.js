// components/CartIcon.js
import { Box, Text, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = ({ itemCount }) => {
  return (
    <Box>
      <IconButton
        icon={<FaShoppingCart />}
        aria-label="Shopping Cart"
        variant="outline"
        size="md"
      />
      {itemCount > 0 && (
        <Text fontSize="sm" fontWeight="bold">
          {itemCount}
        </Text>
      )}
    </Box>
  );
};

export default CartIcon;

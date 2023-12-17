// components/Header.js
import { Box, Flex, Spacer, Heading } from '@chakra-ui/react';
import CartIcon from './CartIcon'; // Adjust the path accordingly

const Header = ({ cartItemCount }) => {
  return (
    <Flex p="4" bg="teal.500" color="white">
      <Box>
        <Heading size="md">Your Shop</Heading>
      </Box>
      <Spacer />
      <Box>
        <CartIcon itemCount={cartItemCount} />
      </Box>
    </Flex>
  );
};

export default Header;

import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Box p={5} bg="green.900" textColor="green.50" minH="5rem" boxShadow="base">
      <Flex
        justifyContent="space-around"
        alignItems="flex-start"
        gap={{ base: "10", md: "20" }}
        maxW="container.xl"
        flexDirection={{ base: "column", md: "row" }}
        margin="0 auto"
      >
        <Stack>
          <Text fontWeight="bold">COMPANY</Text>
          <Link href="/aboutus" passHref>
            <Text>About Us</Text>
          </Link>
          <Link href="https://athayogliving.com" passHref>
            <Text>Athayog Living</Text>
          </Link>
        </Stack>
        <Stack>
          <Text fontWeight="bold">CONTACT US</Text>
          <Text>info@athayogliving.com</Text>
          <Text>+919611771434</Text>
        </Stack>
        <Stack>
          <Text fontWeight="bold">POLICIES</Text>

          <Link href="/policies/terms" passHref>
            <Text>Terms Of Service</Text>
          </Link>
          <Link href="/policies/privacy" passHref>
            <Text>Privacy Policy</Text>
          </Link>
          <Link href="/policies/shipping" passHref>
            <Text>Shipping Policy</Text>
          </Link>
          <Link href="/policies/refund" passHref>
            <Text>Refund Policy</Text>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Footer;

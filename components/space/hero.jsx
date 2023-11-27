// HeroSpace.js
import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

const HeroSpace = ({ imageUrl }) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      p={10}
      bgGradient="linear(to-r, #ECE0D1, #B0E57C)"
    >
      <Box
        flex="1"
        maxW={{ base: '100%', md: '50%' }}
        alignSelf={{ base: 'center', md: 'flex-start' }}
      >
        <Image
          src={imageUrl}
          alt="Hero Image"
          width={400}
          height={200}
          layout="responsive"
          objectFit="contain"
          objectPosition="center"
        />
      </Box>

      <Box flex="1" textAlign={{ base: 'center', md: 'left' }} ml={{ base: 0, md: 8 }}>
        <Heading as="h1" size="xl" mb={4} color="black">
         Athayog Group Classes
        </Heading>
        <Text fontSize="lg" mb={4} color="black">
        Transform your practice in our empowering group yoga sessions. Immerse yourself in a supportive community, fostering positive lifestyle changes. Discover the harmony of mind, body, and soul. Join us on a journey to elevate your well-being through the ancient wisdom of yoga. Embrace the power of connection and wellness with us today
        </Text>
        <Button colorScheme='blue' >Buy Now</Button>
      </Box>
    </Flex>
  );
};

export default HeroSpace;

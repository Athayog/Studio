// HeroSpace.js
import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSpace = ({ imageUrl }) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      
      bg='aygreen.100'
     
    >
      <Box
        flex="1"
        maxW={{ base: '100%', md: '50%' }}
        alignSelf={{ base: 'center', md: 'flex-start' }}
        position='relative'
        overflow='hidden'
      >
        <Image
          src={imageUrl}
          alt="Hero Image"
          layout="fill"
          objectPosition="center center"
          className="class-image"
          objectFit="cover"
          placeholder='blur'
          maxH="100%"
          maxW="100%"
        />
      </Box>

      <Box flex="1" textAlign={{ base: 'center', md: 'left' }} ml={{ base: 0, md: 8 }}>
        <Heading as="h1" size="2xl" mb={4} color="black">
          Athayog Group Classes
        </Heading>
        <Text fontSize="lg" mb={4} color="black" fontWeight='normal'>
          Transform your practice in our empowering group yoga sessions. Immerse yourself in a supportive community, fostering positive lifestyle changes. Discover the harmony of mind, body, and soul. Join us on a journey to elevate your well-being through the ancient wisdom of yoga. Embrace the power of connection and wellness with us today
        </Text>
        <Link
          href="/group-classes/offerings"
          passHref={true}
        >

          <Button colorScheme='blue' size="lg" borderBottom='5px solid #84986D' shadow='xl' >Buy Now</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default HeroSpace;

import { ChevronDownIcon, LinkIcon } from '@chakra-ui/icons';
import {
     Box,
     Button,
     chakra,
     Divider,
     Flex,
     Heading,
     Link,
     Stack,
     Text
} from '@chakra-ui/react';
import Image from 'next/image';
import RetreatHero from 'public/retreat-hero.jpg';
import React from 'react';
import NavbarHelper from '../shared/NavbarHelper';
function Register({ heroImage }) {
     return (
          <>
               <Flex
                    justifyContent="center"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    direction="column"
                    textColor="white"
                    position="relative"
                    background="linear-gradient(to bottom,rgba(0,0,0,0.9) 10%,rgba(0,0,0,0.9))"
               >
                    <Box zIndex={-1}>
                         <Image
                              src={heroImage}
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                         />
                    </Box>

                    <Box
                         width={{ base: '100%', lg: 'container.lg' }}
                         position={{ base: 'relative' }}
                         textAlign="center"
                         p={{ base: '5', md: '10' }}
                    >
                         <Stack spacing={5}>
                              <Heading
                                   fontSize={{
                                        base: '2xl',
                                        md: '2xl',
                                        lg: '2xl'
                                   }}
                                   fontWeight="bold"
                                   textColor="white"
                              >
                                   Register Now
                              </Heading>
                         </Stack>

                         <Flex gap={5} justifyContent="center">
                              Get 2 FREE trial classes and sign up for our
                              monthly packages! Grab the Exclusive Launch Offer
                              NOW!
                         </Flex>
                    </Box>
               </Flex>
          </>
     );
}

export default Register;

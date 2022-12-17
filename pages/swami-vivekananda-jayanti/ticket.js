import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import {
     Box,
     Button,
     Container,
     FormControl,
     FormLabel,
     Input,
     Stack
} from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';

function Ticket() {
     return (
          <div>
               <NavbarHelper />
               <Box
                    bg="#fdf6ee"
                    // bgGradient="linear(to-r, #fdf6ee, #c38484)"
                    minHeight="100vh"
               >
                    <Container maxW="container.xl" py={10}>
                         {' '}
                         <Link passHref href="/swami-vivekananda-jayanti">
                              <Button
                                   leftIcon={<IoArrowBackCircle />}
                                   width="max-content"
                                   variant="solid"
                                   colorScheme="ayorange"
                                   mb={6}
                              >
                                   Back
                              </Button>
                         </Link>
                         <Stack
                              spacing={6}
                              bg="white"
                              boxShadow="base"
                              rounded="sm"
                              p={5}
                              width="100%"
                         >
                              <FormControl>
                                   <FormLabel htmlFor="email">
                                        Enter Your Registered Email
                                   </FormLabel>
                                   <Input id="email" name="email" />
                              </FormControl>
                              <FormControl>
                                   <Button size="sm" colorScheme="blue">
                                        Get Ticket
                                   </Button>
                              </FormControl>
                         </Stack>
                    </Container>
               </Box>
          </div>
     );
}

export default Ticket;
Ticket.Layout = HomeLayout;

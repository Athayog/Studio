import { useAuth } from '@/lib/auth';
import { Box, Button, Flex, Heading, useToast, toast } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import cookie from 'js-cookie';

function getCookie(cname) {
     let name = cname + '=';
     let decodedCookie = decodeURIComponent(document.cookie);
     let ca = decodedCookie.split(';');
     for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
               c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
               return c.substring(name.length, c.length);
          }
     }
     return null;
}

const Register = ({ registerTo }) => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();
     const toast = useToast();
     const handleRegister = () => {
          let cookie = getCookie('athayog-auth');
          if (!cookie) {
               toast({
                    title: 'Login First',
                    description:
                         'Create or Login to your account to continue payment',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true
               });

               cookie.set('routeTo', `/offerings/${registerTo}`, {
                    expires: 1
               });

               router.push('/account/login');

               return;
          } else {
               router.push(`/register/${registerTo}`);
          }
     };
     return (
          <Box height={{ base: '15rem', md: '20rem', lg: 'sm' }} bg="white">
               <Flex
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    height="100%"
                    width="100%"
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         color="primaryDarkGray"
                    >
                         Register Now.
                    </Heading>

                    <Button
                         bg="aygreen.100"
                         color="primaryDarkGray"
                         variant="solid"
                         size="sm"
                         fontSize="md"
                         rounded="md"
                         onClick={() => handleRegister()}
                         mt={10}
                         px={10}
                         py={5}
                    >
                         Register
                    </Button>
               </Flex>
          </Box>
     );
};

export default Register;

import {
     Button,
     Divider,
     FormControl,
     FormErrorMessage,
     FormLabel,
     Heading,
     Input,
     Stack,
     Text,
     toast,
     useDisclosure,
     useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import Router, { useRouter } from 'next/router';

import firebase from '@/lib/firebase';
import { AnimatePresence } from 'framer-motion';
import cookie from 'js-cookie';
import { MotionStack } from '../shared/MotionElements';
import { FaGoogle } from 'react-icons/fa';
import { PhoneIcon } from '@chakra-ui/icons';

const Login = () => {
     const { handleSubmit, register, errors, reset, getValues } = useForm();
     const { signinWithEmail } = useAuth();
     const {signinWithGoogle} = useAuth();
      const auth = firebase.auth();
     const [loading, setLoading] = useState(false);
     const toast = useToast();
     const router = useRouter();
     const routeCookie = cookie.get('routeTo');
     const [email, setEmail] = useState('');

     const isRoute =
          routeCookie == '' || routeCookie == undefined ? '/' : routeCookie;

     const onUserLogin = async ({ email, password }) => {
          if (email.match(/^[a-zA-Z0-9+_.-]+@athayogliving.com/)) {
               toast({
                    title: `Can't use administrator account`,
                    description: `Can't use this email as it already authorized`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               return;
          }
          setLoading(true);
          await signinWithEmail(email, password, isRoute).catch((error) => {
               setLoading(false);
               toast({
                    title: 'An error occurred.',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               reset();
          });
     };

     const forgotPassword = async () => {
          const emailAddress = getValues('email');

          if (emailAddress !== '') {
               auth.sendPasswordResetEmail(emailAddress)
                    .then(function () {
                         toast({
                              title: 'Email Sent',
                              description: 'Password reset email sent',
                              status: 'success',
                              duration: 5000,
                              isClosable: true
                         });
                    })
                    .catch(function (error) {
                         toast({
                              title: 'An error occurred.',
                              description: error.message,
                              status: 'error',
                              duration: 5000,
                              isClosable: true
                         });
                    });
          } else {
               toast({
                    title: 'An error occurred.',
                    description: 'Please enter the email field',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
          }
     };

     const handleGoogleLogin = () => {
          signinWithGoogle('/')
     }

     return (
          <>
               <Heading
                    textAlign="center"
                    fontWeight="normal"
                    fontSize={['2xl', '2xl', '4xl']}
                    color="primaryDarkGray"
               >
                    Log In
               </Heading>

              
               <Stack
                    spacing={{ base: 5, md: 8, lg: 8 }}
                    mt={5}
                    width={{ base: '100%', md: 'sm', lg: 'sm' }}
               >
                    <Divider color="black" />
                 
                    <Button
                              type="submit"
                              onClick={() => handleGoogleLogin()}
                              colorScheme="none"
                              color="black"
                              isLoading={loading}
                              _active={{
                                   transform: 'scale(0.95)'
                              }}
                              
                              bg="gray.100"
                             className="login-with-google-btn"
                             leftIcon={<FaGoogle/>}
                         >
                              Log in with Google
                         </Button>
               </Stack>

               <Stack
                    spacing={{ base: 5, md: 8, lg: 8 }}
                    mt={1}
                    width={{ base: '100%', md: 'sm', lg: 'sm' }}
               >
                    <Divider color="black" />
                    <Button
                         type="submit"
                         colorScheme="aygray"
                         leftIcon={<PhoneIcon/>}
                         id="sign-in-button"
                         width="100%"
                         onClick={(e) => router.push('/account/otp')}
                         _active={{
                              transform: 'scale(0.95)'
                         }}
                    >
                         Login Via Phone
                    </Button>
                   
               </Stack>
          </>
     );
};

export default Login;

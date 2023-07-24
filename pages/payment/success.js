import {
     Box,
     Flex,
     Grid,
     Text,
     Heading,
     VStack,
     chakra,
     Spinner,
     Divider,
     Button
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import Image from 'next/image';
import HomeLayout from '@/components/layout/HomeLayout';
import paymentSuccess from 'public/paymentSuccess.svg';
import NavbarHelper from '@/components/shared/NavbarHelper';
import Head from 'next/head';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { useReactToPrint } from 'react-to-print';

const success = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();
     const { razorpayPaymentId, razorpayOrderId, courseName } = router.query;

     const { data, error } = useSWR(
          user
               ? [
                      `/api/user/purchase/${user.uid}?orderId=${razorpayOrderId}`,
                      user.token
                 ]
               : null,
          fetcher
     );

     const componentRef = useRef();
     const handlePrint = useReactToPrint({
          content: () => componentRef.current
     });

     if (!razorpayPaymentId || !user) {
          return (
               <Grid height="100vh" placeItems="center">
                    <Grid placeItems="center">
                         <Spinner />
                         <Text>Please do not refresh</Text>
                    </Grid>
               </Grid>
          );
     }
     console.log(data);
     if (!data) {
          return (
               <Grid height="100vh" placeItems="center">
                    <Grid placeItems="center">
                         <Spinner />
                         <Text>Please do not refresh</Text>
                    </Grid>
               </Grid>
          );
     }

     return (
          <>
               {' '}
               <Head>
                    <title>Success - AthayogLiving</title>
               </Head>
               <NavbarHelper />
               <Grid placeItems="center" bg="primaryWhite">
                    <Box margin={{ base: '0', md: '5rem 0', lg: '5rem 0' }}>
                         <Box
                              bg="white"
                              boxShadow="base"
                              rounded={{ base: 'none', md: 'lg', lg: 'lg' }}
                              margin="rem 0"
                              padding={{ base: 3, md: 5, lg: 10 }}
                              height="100%"
                              w={{ base: '100%', md: 'lg', lg: 'lg' }}
                         >
                              <VStack
                                   justify="space-around"
                                   spacing={2}
                                   ref={componentRef}
                              >
                                   <Image
                                        height="300px"
                                        width="300px"
                                        src={paymentSuccess}
                                   />
                                   <Box>
                                        <Heading
                                             textAlign="center"
                                             color="gray.800"
                                        >
                                             Payment Successfull
                                        </Heading>
                                        <Text
                                             textAlign="center"
                                             color="gray.500"
                                             mt={3}
                                        >
                                             Your payment has been successfull.
                                             You can check your purchases in my
                                             account section
                                        </Text>

                                        <Box
                                             mt={5}
                                             textAlign="center"
                                             border="1px solid "
                                             borderColor="gray.100"
                                             rounded="lg"
                                             padding={{
                                                  base: 3,
                                                  md: 3,
                                                  lg: 3
                                             }}
                                        >
                                             <Flex
                                                  width="100%"
                                                  justifyContent="space-between"
                                             >
                                                  <Text>Course Name:</Text>
                                                  <Text>{courseName}</Text>
                                             </Flex>
                                             <Divider mt={2} mb={2} />
                                             <Flex
                                                  width="100%"
                                                  justifyContent="space-between"
                                             >
                                                  <Text>Order Id:</Text>
                                                  <Text>{razorpayOrderId}</Text>
                                             </Flex>
                                             <Divider mt={2} mb={2} />
                                             <Flex
                                                  width="100%"
                                                  justifyContent="space-between"
                                             >
                                                  <Text>Location :</Text>
                                                  <Text>
                                                       <a href=" https://goo.gl/maps/8hJdBnm1xKTDVb8z7">
                                                            Athayog Studio
                                                            Indiranagar
                                                       </a>
                                                  </Text>
                                             </Flex>
                                             <Divider mt={2} mb={2} />
                                             <Flex
                                                  width="100%"
                                                  justifyContent="space-between"
                                             >
                                                  <Text>Contact :</Text>
                                                  <Text>
                                                       <a href="tel:+919611771434">
                                                            +91 8690333111
                                                       </a>
                                                  </Text>
                                             </Flex>

                                             {data && (
                                                  <>
                                                       <Divider mt={2} mb={2} />
                                                       <Flex
                                                            width="100%"
                                                            justifyContent="space-between"
                                                       >
                                                            <Text>
                                                                 Duration :
                                                            </Text>
                                                            <Text>
                                                                 {
                                                                      data
                                                                           .purchases[0]
                                                                           .duration
                                                                 }{' '}
                                                                 Days
                                                            </Text>
                                                       </Flex>
                                                       <Divider mt={2} mb={2} />
                                                       <Flex
                                                            width="100%"
                                                            justifyContent="space-between"
                                                       >
                                                            <Text>Price :</Text>
                                                            <Text>
                                                                 {
                                                                      data
                                                                           .purchases[0]
                                                                           .price
                                                                 }
                                                            </Text>
                                                       </Flex>
                                                  </>
                                             )}
                                        </Box>
                                   </Box>
                                   <Box bg="green.100" p={2} rounded="md">
                                        <Text textAlign="center">
                                             Please come to the studio and
                                             present receipt as proof to begin
                                             the class.
                                        </Text>
                                   </Box>
                              </VStack>
                              <Button
                                   mt={5}
                                   width="full"
                                   colorScheme="aygreen"
                                   onClick={handlePrint}
                              >
                                   Print Receipt
                              </Button>
                         </Box>
                    </Box>
               </Grid>
          </>
     );
};

export default success;
success.Layout = HomeLayout;

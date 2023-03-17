import React from 'react';
import OfferImage from 'public/ugadi_offer.png';
import Image from 'next/image';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';

function Offer() {
     return (
          <Box bg="#faf8f3">
               <Grid
                    gridTemplateColumns={{ md: '1fr', lg: '50% 1fr' }}
                    position="relative"
                    // maxW="80%"
                    margin="0 auto"
               >
                    <Box
                         display="block"
                         height="100%"
                         width="100%"
                         position="relative"
                    >
                         <Image
                              src={OfferImage}
                              alt="Ugadi Offer"
                              height="100%"
                              width="100%"
                              layout="responsive"
                         />
                    </Box>
                    <Flex
                         fontSize={{
                              base: 'xl',
                              sm: 'xl',
                              md: '2xl',
                              lg: '4xl'
                         }}
                         justifyContent="center"
                         alignItems="center"
                         direction="column"
                         gap={10}
                         p={10}
                         fontWeight="normal"
                         textAlign="center"
                    >
                         <Text>Is time to grab a best offer this Ugadi!</Text>
                         <Text textAlign="center" width="100%">
                              Come avail a FREE yoga mat or a coupon worth Rs.
                              2000/- when you enroll into an 8 or 12 month yoga
                              package with us!!
                         </Text>
                         <Text>Offer valid only till 31st march 2023</Text>
                         <Text>Hurry up!!</Text>
                    </Flex>
               </Grid>
          </Box>
     );
}

export default Offer;

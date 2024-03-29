import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { offeringsData } from '@/components/home/ContentData';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { MotionBox } from '../shared/MotionElements';

const Offerings = () => {
     return (
          <Box height="100%" bg="primaryWhite" width="100%">
               <Flex
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    height="100%"
                    width="100%"
                    padding={{ base: '2rem 0', md: '3rem 0', lg: '3rem 0' }}
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         color="primaryDarkGray"
                         as="h2"
                    >
                         Our Offerings
                    </Heading>
                    <Box width="95%" margin="auto">
                         <Grid
                              marginTop={{
                                   base: '10',
                                   md: '20',
                                   lg: '20'
                              }}
                              gridGap="1rem"
                              width="100%"
                              gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))"
                              alignItems="start"
                         >
                              {offeringsData.offering.map((offer, index) => {
                                   return (
                                        <Link
                                             href={offer.link}
                                             passHref
                                             key={uuidv4()}
                                             index={index}
                                        >
                                             <Flex
                                                  direction="column"
                                                  justifyContent="center"
                                                  alignItems="center"
                                                  cursor="pointer"
                                             >
                                                  <MotionBox
                                                       rounded="full"
                                                       height="150px"
                                                       width="150px"
                                                       overflow="hidden"
                                                       border="5px solid"
                                                       exit={{ opacity: 0 }}
                                                       initial={{ opacity: 0 }}
                                                       animate={{ opacity: 1 }}
                                                       borderColor="primaryGreen"
                                                       whileHover={{
                                                            scale: 1.1
                                                       }}
                                                       whileTap={{ scale: 0.9 }}
                                                  >
                                                       <Image
                                                            src={offer.image}
                                                            alt={offer.name}
                                                            layout="responsive"
                                                            objectFit="cover"
                                                            height="150px"
                                                            width="150px"
                                                       />
                                                  </MotionBox>
                                                  <Text
                                                       mt={10}
                                                       fontSize="lg"
                                                       color="black"
                                                  >
                                                       Athayog {offer.name}
                                                  </Text>
                                                  <Text
                                                       color="gray.600"
                                                       fontSize="md"
                                                  >
                                                       {offer.simple}
                                                  </Text>
                                                  <Text
                                                       mt={5}
                                                       px="5"
                                                       color="primaryDarkGray"
                                                       textAlign="center"
                                                  >
                                                       {offer.information}
                                                  </Text>
                                             </Flex>
                                        </Link>
                                   );
                              })}
                         </Grid>
                    </Box>
               </Flex>
          </Box>
     );
};

export default Offerings;

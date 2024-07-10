// pages/WeightLossProgram.js
import React from 'react';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import HomeWall from 'public/WL_1.svg';
import HomeWoman from 'public/WL_2.png';
import Image from 'next/image';
import styles from './style.module.css'; // Import CSS module
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

function WeightLossProgram() {
     return (
          <div>
               <NavbarHelper />

               {/* Home */}
               <section className={styles.backgroundSection}>
                    <Box>
                         <Heading color="#CF1B2A" fontSize="74px">
                              3 Months Yoga Weight Loss Program
                         </Heading>
                         <Text fontSize="30px">This 3 month program at AthaYog offers a holistic approach to weight loss, helping you achieve lasting results through Asana practice and Pesonalised support</Text>
                         <Text fontWeight="semibold" fontSize="36px" color="#097300">
                              Starting from 29th July
                         </Text>
                         <Link href="/yoga-arambha/register" passHref>
                              <Button
                                   p={{ base: '30px 33px', md: '30px 50px', lg: '30px 50px' }}
                                   fontSize={{
                                        base: '16px',
                                        md: '22px',
                                        lg: '22px',
                                        xl: '26px'
                                   }}
                                   fontWeight="700"
                                   _hover={{ backgroundColor: '#BF1D2C' }}
                                   backgroundColor="#097300"
                                   color="white"
                                   rounded="full"
                                   mt="10px"
                              >
                                   Register Now
                              </Button>
                         </Link>
                    </Box>
                    <Box>
                      
                         <Image src={HomeWall} layout="fill" objectFit="cover" className={styles.backgroundImage} />
                    </Box>
                    <Image src={HomeWoman} />
               </section>
               <section className={styles.backgroundSection}>
                    <Heading color="#CF1B2A" fontSize="74px">
                         Asana Practice
                    </Heading>
               </section>
          </div>
     );
}

export default WeightLossProgram;
WeightLossProgram.Layout = HomeLayout;

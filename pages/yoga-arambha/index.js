import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box, Heading, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import React from 'react';
import { chakra } from '@chakra-ui/react';
import HeroFlower1 from 'public/A24-Flower.svg';
import HeroFlower2 from 'public/A24-Flower-2.svg';
import ArambhaLogo from 'public/ar24_logo.png';
import HeroGirlLeft from 'public/24_Girl_Left.png';
import HeroGirlRight from 'public/24_Girl_Right.png';
import { Button } from '@chakra-ui/button';

const PinkButton = ({ children, ...props }) => {
     return (
          <Button p={{ base: '32px 33px', md: '34px 60px', lg: '44px 70px' }} backgroundColor="#EA3B4A" color="white" rounded="full" {...props}>
               {children}
          </Button>
     );
};

function YogaArambha() {
     return (
          <Box name="parent">
               <NavbarHelper />{' '}
               <Box
                    width={{
                         base: '100px',
                         md: '300px',
                         lg: 'auto'
                    }}
                    pos
                    position="absolute"
                    top="100"
                    left="0"
               >
                    <Image src={HeroFlower1} />
               </Box>
               <Box 
                name='flowerRight'
                    width={{
                          base: '100px',
                         md: '300px',
                         xl: 'auto'
                    }}
                    position="absolute"
                    top="100"
                    right="0"
               >
                    <Image src={HeroFlower2} />
               </Box>
               <Box position="absolute" top="100" right="10" display={{ base: 'none', lg: 'block' }}>
                    <Image src={ArambhaLogo} />
               </Box>
               <Box maxW="1440px" width="100%" margin="0 auto" marginTop={{ base: '0px', lg: '40px' }} p={10}>
                    {/* Hero Section */}
                    <Box as="section" position="relative" width="100%">
                         {/* Absolute Background */}

                         <Box
                              width={{
                                   base: '0px',
                                   sm: '0px',
                                   md: '0px',
                                   lg: '0px',
                                   xl: '350px'
                              }}
                              position="absolute"
                              top="160"
                              left="0"
                         >
                              <Image src={HeroGirlLeft} />
                         </Box>

                         <Box
                              width={{
                                   base: '0px',
                                   sm: '0px',
                                   md: '0px',
                                   lg: '0px',
                                   xl: '450px'
                              }}
                              position="absolute"
                              top="160"
                              right="0"
                         >
                              <Image src={HeroGirlRight} />
                         </Box>

                         <Box name="content" textAlign="center">
                              <Box display={{ base: 'block', lg: 'none' }}>
                                   <Image src={ArambhaLogo} />
                              </Box>
                              <Heading
                                   color="#71312A"
                                   fontSize={{
                                        base: '32px',
                                        sm: '32px',
                                        md: '36px',
                                        lg: '56px',
                                        xl: '64px'
                                   }}
                              >
                                   Yoga Arambha 2024 <br /> Empower Your Inner Goddess
                              </Heading>
                              <Text
                                   fontSize={{
                                        base: '18px',
                                        sm: '18px',
                                        md: '22px',
                                        lg: '22px',
                                        xl: '32px'
                                   }}
                                   fontWeight="bold"
                                   style={{ fontFamily: 'Montserrat' }}
                                   marginTop="34px"
                              >
                                   Join AthaYog&apos;s International Day of Yoga Celebration
                              </Text>
                              <Text
                                   fontSize={{
                                        base: '15px',
                                        sm: '15px',
                                        md: '22px',
                                        lg: '22px',
                                        xl: '30px'
                                   }}
                                   color="#AA645B"
                                   fontWeight="semibold"
                                   style={{ fontFamily: 'Montserrat' }}
                                   marginTop={{
                                        base: '12px',
                                        sm: '12px',
                                        md: '18px',
                                        lg: '18px',
                                        xl: '18px'
                                   }}
                              >
                                   Empower Your Mind, Body & Spirit with Yoga
                              </Text>
                              <PinkButton margin="0 auto" marginTop={{ base: '30px', md: '50px', lg: '60px' }} display="flex" gap="2px" flexDirection="column" justfifyContent="center" alignItems="center">
                                   <chakra.span
                                        fontSize={{
                                             base: '16px',
                                             md: '22px',
                                             lg: '22px',
                                             xl: '26px'
                                        }}
                                        fontWeight="bold"
                                   >
                                        Register Now
                                   </chakra.span>

                                   <chakra.span
                                        fontWeight="semibold"
                                        fontSize={{
                                             base: '14px',
                                             md: '22px',
                                             lg: '22px',
                                             xl: '26px'
                                        }}
                                   >
                                        Free & For Everyone
                                   </chakra.span>
                              </PinkButton>

                              <Box
                                   name="about"
                                   marginTop={{
                                        base: '32px',
                                        sm: '32px',
                                        md: '60px',
                                        lg: '100px',
                                        xl: '120px'
                                   }}
                              >
                                   <Heading
                                        as="h3"
                                        fontWeight="semibold"
                                        fontSize={{
                                             base: '32px',
                                             sm: '32px',
                                             md: '44px',
                                             lg: '54px',
                                             xl: '64px'
                                        }}
                                   >
                                        About the Event
                                   </Heading>
                                   <Text
                                        maxWidth="1054px"
                                        lineHeight={{ base: '24px', sm: '24px', md: '32px', lg: '32px', xl: '44px' }}
                                        margin="0 auto"
                                        marginTop="20px"
                                        fontWeight="semibold"
                                        color="#003744"
                                        fontSize={{
                                             base: '14px',
                                             sm: '14px',
                                             md: '22px',
                                             lg: '22px',
                                             xl: '30px'
                                        }}
                                   >
                                        AthaYog invites you to a special International Day of Yoga event dedicated to celebrating the strength, resilience and power of women. Through yoga, breath work and community, we'll explore practices that empower us on all levels.
                                   </Text>
                              </Box>
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
}

export default YogaArambha;
YogaArambha.Layout = HomeLayout;

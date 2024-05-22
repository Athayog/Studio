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
          <Button p="44px 70px" backgroundColor="#EA3B4A" color="white" rounded="full" {...props}>
               {children}
          </Button>
     );
};

function YogaArambha() {
     return (
          <Box name="parent">
              <NavbarHelper />
               {' '}
               <Box position="absolute" top="100" left="0">
                    <Image src={HeroFlower1} />
               </Box>
               <Box position="absolute"  top="100"  right="0">
                    <Image src={HeroFlower2} />
               </Box>
                  <Box position="absolute" top="100" right="10">
                              <Image src={ArambhaLogo} />
                         </Box>
               <Box maxW="1440px" width="100%" margin="0 auto" marginTop="40px" p={10}>
                  

                    {/* Hero Section */}
                    <Box as="section" position="relative" width="100%">
                         {/* Absolute Background */}

                      

                         <Box position="absolute" top="160" left="0">
                              <Image src={HeroGirlLeft} />
                         </Box>

                         <Box position="absolute" top="160" right="0">
                              <Image src={HeroGirlRight} />
                         </Box>

                         <Box name="content" textAlign="center">
                              <Heading
                                   color="#71312A"
                                   fontSize={{
                                        sm: '26px',
                                        md: '36px',
                                        lg: '56px',
                                        xl: '64px'
                                   }}
                              >
                                   Yoga Arambha 2024 <br /> Empower Your Inner Goddess
                              </Heading>
                              <Text
                                   fontSize={{
                                        sm: '22px',
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
                                        sm: '22px',
                                        md: '22px',
                                        lg: '22px',
                                        xl: '30px'
                                   }}
                                   color="#AA645B"
                                   fontWeight="semibold"
                                   style={{ fontFamily: 'Montserrat' }}
                                   marginTop="18px"
                              >
                                   Empower Your Mind, Body & Spirit with Yoga
                              </Text>
                              <PinkButton margin="0 auto" marginTop="60px" display="flex" flexDirection="column" justfifyContent="center" alignItems="center">
                                   <chakra.span
                                        fontSize={{
                                             sm: '22px',
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
                                             sm: '22px',
                                             md: '22px',
                                             lg: '22px',
                                             xl: '26px'
                                        }}
                                   >
                                        Free & For Everyone
                                   </chakra.span>
                              </PinkButton>

                              <Box name="about" marginTop="120px">
                                   <Heading
                                        as="h3"
                                        fontWeight="semibold"
                                        fontSize={{
                                             sm: '34px',
                                             md: '44px',
                                             lg: '54px',
                                             xl: '64px'
                                        }}
                                   >
                                        About the Event
                                   </Heading>
                                   <Text
                                        maxWidth="1054px"
                                        lineHeight="44px"
                                        margin="0 auto"
                                        marginTop="12px"
                                        fontWeight="semibold"
                                        color="#003744"
                                        fontSize={{
                                             sm: '22px',
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

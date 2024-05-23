import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box, Divider, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import React from 'react';
import { chakra } from '@chakra-ui/react';
import HeroFlower1 from 'public/A24-Flower.svg';
import HeroFlower2 from 'public/A24-Flower-2.svg';
import ArambhaLogo from 'public/ar24_logo.png';
import HeroGirlLeft from 'public/24_Girl_Left.png';
import HeroGirlRight from 'public/24_Girl_Right.png';
import DateCalendar from 'public/24calendar.svg';
import DateMap from 'public/24Map.svg';
import Guest from 'public/24Guest.png';
import Clock from 'public/24clock.png';
import Club from 'public/Club24.png';
import Why1 from 'public/24Why1.png';
import Why2 from 'public/24Why2.png';
import Why3 from 'public/24Why3.png';
import What1 from 'public/24What1.png';
import What2 from 'public/24What2.png';
import What3 from 'public/24What3.png';
import What4 from 'public/24What4.png';
import MapLeft from 'public/24MapLeft.jpg';
import MapRight from 'public/24MapRight.png';
import { Button } from '@chakra-ui/button';
import GalleryDesktop from 'public/24Gallery.png';

const PinkButton = ({ children, ...props }) => {
     return (
          <Button p={{ base: '32px 33px', md: '34px 60px', lg: '44px 70px' }} _hover={{ backgroundColor: '#BF1D2C' }} backgroundColor="#EA3B4A" color="white" rounded="full" {...props}>
               {children}
          </Button>
     );
};

function YogaArambha() {
     const schedule = [
          { time: '5:30 AM', event: '- Registrations open' },
          { time: '6:00 AM - 6:15 AM', event: '- Opening Ceremony' },
          { time: '6:15 AM - 7:15 AM', event: '- Special Yoga Session by Principal Teacher Sharath Basavaraju C' },
          { time: '7:15 AM - 7:30 AM', event: '- Chief Guest Speech' },
          { time: '7:30 AM - 7:45 AM', event: '- Yoga Talent Showcase' },
          { time: '7:45 AM - 8:00 AM', event: '- Closing Ceremony' },
          { time: '8:00 onwards', event: '- Breakfast' }
     ];
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
                    name="flowerRight"
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

                    <Box data-name="calendar" display="flex" width="100%" justifyContent="center" alignItems="center" marginTop="52px">
                         <Flex flexDirection="column" width="100%" gap="10px" justifyContent="center" alignItems="center">
                              <Flex alignItems="center" gap="15px">
                                   <Box>
                                        <Image src={DateCalendar} />
                                   </Box>
                                   <Box style={{ fontFamily: 'Montserrat' }} fontSize="37px">
                                        Date
                                   </Box>
                              </Flex>
                              <Text fontWeight="bold" fontSize="42px">
                                   June 21, 2024
                              </Text>
                         </Flex>
                         <Divider orientation="vertical" bg="#C47E77" height="150px" width="2px" />
                         <Flex flexDirection="column" width="100%" gap="10px" justifyContent="center" alignItems="center">
                              <Flex alignItems="center" gap="15px">
                                   <Box>
                                        <Image src={DateMap} />{' '}
                                   </Box>
                                   <Box style={{ fontFamily: 'Montserrat' }} fontSize="37px">
                                        Location
                                   </Box>
                              </Flex>
                              <Text fontWeight="bold" fontSize="42px">
                                   Indiranagar club
                              </Text>
                         </Flex>
                    </Box>

                    <Box name="schedule" margin="o auto">
                         <Flex class="schedule-container" justifyContent="flex-start" alignItems="center" marginTop="70px" gap="70px">
                              <Flex class="schedule-time" flexDirection="column" gap="20px" justifyContent="center" alignItems="center">
                                   <Image src={Clock} />
                                   <Text fontFamily="Montserrat" fontSize="48px" fontWeight="medium">
                                        Time
                                   </Text>
                              </Flex>
                              <Flex position="relative" class="schedule-table">
                                   <Box
                                        top="0"
                                        left="0"
                                        zIndex="-1"
                                        width="850px"
                                        height="500px"
                                        position="absolute"
                                        name="table"
                                        filter="blur(14px)"
                                        background="linear-gradient(
                          -90deg,
                          rgba(255, 246, 246, 0.7) 15.67%,
                          rgba(255, 237, 229, 0.7) 70%
                        );"
                                   ></Box>
                                   <Flex direction="column" maxW="1200px" padding="4" overflowX="auto">
                                        {schedule.map((item, index) => (
                                             <Flex fontWeight="bold" fontSize="28px" key={index} color={index % 2 === 0 ? '#B80000' : 'black'} padding="2">
                                                  <Box flex="1">{item.time}</Box>
                                                  <Box flex="3">{item.event}</Box>
                                             </Flex>
                                        ))}
                                   </Flex>
                              </Flex>
                         </Flex>
                    </Box>

                    <Flex justifyContent="center" alignItems="center">
                         <PinkButton
                              margin="0 auto"
                              marginTop="100px"
                              fontWeigh="bold"
                              p={{ base: '20px 33px', md: '20px 60px', lg: '30px 70px' }}
                              fontSize={{
                                   base: '16px',
                                   md: '22px',
                                   lg: '22px',
                                   xl: '26px'
                              }}
                         >
                              Register Now Free & For Everyone
                         </PinkButton>
                    </Flex>

                    <Flex name="guest" position="relative" marginTop="70px">
                         <Box
                              top="0"
                              left="0"
                              zIndex="-1"
                              width="100%"
                              height="100%"
                              position="absolute"
                              name="table"
                              filter="blur(14px)"
                              bg="linear-gradient(
                                    90deg,
                                    rgba(255, 243, 238, 0.4),
                                    rgba(255, 212, 215, 0.4)
                                );"
                         ></Box>
                         <Flex justifyContent="center" alignItems="center">
                              <Image src={Guest} />
                              <Text maxWidth="700px" marginLeft="70px" marginRight="40px" fontSize="36px" fontWeight="bold">
                                   Proudly supported by <chakra.span color="#992C2C">B N S Reddy.</chakra.span> Inspector general of Police IPS(R). President of Indiranagar Club
                              </Text>
                              <Image src={Club} />
                         </Flex>
                    </Flex>

                    <Flex name="about" flexDirection="column" justfifyContent="center" gap="20px" alignItems="center" width="100%" marginTop="95px">
                         <Text fontSize="64px" fontWeight="bold">
                              About AthaYog
                         </Text>
                         <Text fontSize="28px" fontWeight="medium">
                              “Atha ” is derived from a Sanskit word which translates to “ now, here begins ” and Yog, means “ to join ” or “ union ”. At AthaYog, we are devoted to preserving the long-standing legacy of Yog and propagating the true purpose, philosophies and practices associated with this age-old wisdom. Our teachings are deep rooted in ancient scriptures - the Vedas, Sankhya Philosophy, Bhagwat Geeta, Patanjali’s Yoga Sutras, Hatha Yoga Pradipika and the teachings of all our gurus and their institutions.
                         </Text>
                         <Text mt="20px" fontSize="64px" fontWeight="bold">
                              What We Do
                         </Text>
                         <Text fontSize="28px" fontWeight="medium">
                              Sharing transformational tools to help one reconnect with their divine nature and progress in their journey of inner transformation. Reinstating one ' s belief in the ancient wisdom of Yog by reviving this knowledge. Ingraining Yog as a way of life that needs to be practiced and instilled in the fabric of living and being. Creating a positive and pristine environment that is conducive to one’s practice.
                         </Text>
                    </Flex>

                    <Flex marginTop="80px" flexDirection="column">
                         <Text textAlign="center" width="100%" fontSize="64px" fontWeight="bold">
                              Why Yoga Arambha?
                         </Text>
                         <Flex justifyContent="center" alignItems="baseline" marginTop="47px" gap="37px">
                              <Flex rounded="md" overflow="hidden" maxW="400px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Image src={Why1} />
                                   <Text fontSize="32px" fontWeight="bold">
                                        Yoga as Innerness
                                   </Text>
                                   <Text fontSize="22px" fontWeight="semibold">
                                        Yoga integrates mind and body through breath control, meditation and movement which cultivates inner strength, resilience and well-being, not just physical fitness.
                                   </Text>
                              </Flex>
                              <Flex rounded="md" overflow="hidden" maxW="400px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Image src={Why2} />
                                   <Text fontSize="32px" fontWeight="bold">
                                        Yoga for All
                                   </Text>
                                   <Text fontSize="22px" fontWeight="semibold">
                                        Yoga welcomes all women, regardless of background or experience, to discover strength, peace and joy.
                                   </Text>
                              </Flex>
                              <Flex rounded="md" overflow="hidden" maxW="400px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Image src={Why3} />
                                   <Text fontSize="32px" fontWeight="bold">
                                        Women's Empowerment
                                   </Text>
                                   <Text fontSize="22px" fontWeight="semibold">
                                        Yoga nurtures a woman's holistic well being, strengthening her body, calming her mind and uplifting her spirit.
                                   </Text>
                              </Flex>
                         </Flex>
                    </Flex>

                    <Flex marginTop="60px" flexDirection="column">
                         <Text textAlign="center" width="100%" fontSize="64px" fontWeight="bold">
                              What to Expect
                         </Text>
                         <Grid gridTemplateColumns="repeat(2,1fr)" justifyContent="center" alignItems="baseline" marginTop="47px" gap="52px">
                              <Flex alignSelf="center" rounded="md" overflow="hidden" maxW="500px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Box rounded="md" overflow="hidden">
                                        <Image alt="What" src={What1} />
                                   </Box>

                                   <Text fontSize="32px" fontWeight="bold">
                                        Yoga Practice
                                   </Text>
                                   <Text textAlign="center" fontSize="28px" fontWeight="semibold" maxWidth="500px">
                                        Tailored to all levels, focusing on postures and flows that promote strength, flexibility and energy.
                                   </Text>
                              </Flex>
                              <Flex alignSelf="center" rounded="md" overflow="hidden" maxW="500px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Box rounded="md" overflow="hidden">
                                        <Image alt="What" src={What2} />
                                   </Box>
                                   <Text textAlign="center" fontSize="32px" fontWeight="bold">
                                        Breath Work
                                   </Text>
                                   <Text textAlign="center" fontSize="28px" fontWeight="semibold" maxWidth="500px">
                                        Guided practices to calm the mind, reduce stress and enhance vitality.
                                   </Text>
                              </Flex>
                              <Flex alignSelf="center" rounded="md" overflow="hidden" maxW="500px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Box rounded="md" overflow="hidden">
                                        <Image alt="What" src={What3} />
                                   </Box>
                                   <Text textAlign="center" fontSize="32px" fontWeight="bold">
                                        Community Connection
                                   </Text>
                                   <Text textAlign="center" fontSize="28px" fontWeight="semibold" maxWidth="500px">
                                        Opportunities to connect with other women in a supportive and uplifting environment.
                                   </Text>
                              </Flex>
                              <Flex alignSelf="center" rounded="md" overflow="hidden" maxW="500px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Box rounded="md" overflow="hidden">
                                        <Image alt="What" src={What4} />
                                   </Box>
                                   <Text textAlign="center" fontSize="32px" fontWeight="bold">
                                        Community Connection
                                   </Text>
                                   <Text textAlign="center" fontSize="28px" fontWeight="semibold" maxWidth="500px">
                                        Opportunities to connect with other women in a supportive and uplifting environment.
                                   </Text>
                              </Flex>
                         </Grid>
                         <Flex justifyContent="center" alignItems="center">
                              <PinkButton
                                   margin="0 auto"
                                   marginTop="100px"
                                   fontWeigh="bold"
                                   p={{ base: '20px 33px', md: '20px 60px', lg: '30px 70px' }}
                                   fontSize={{
                                        base: '16px',
                                        md: '22px',
                                        lg: '22px',
                                        xl: '26px'
                                   }}
                              >
                                   Register Now Free & For Everyone
                              </PinkButton>
                         </Flex>
                         <Box bg="#CBCBCB" padding="40px" marginTop="62px">
                              <Text fontSize="46px" fontWeight="bold" textAlign="center">
                                   Map View
                              </Text>
                              <Flex>
                                   <Image src={MapLeft} />
                                   <Image src={MapRight} />
                              </Flex>
                         </Box>

                         <PinkButton
                              margin="0 auto"
                              marginTop="100px"
                              fontWeigh="bold"
                              p={{ base: '20px 33px', md: '20px 60px', lg: '30px 70px' }}
                              fontSize={{
                                   base: '16px',
                                   md: '22px',
                                   lg: '22px',
                                   xl: '26px'
                              }}
                         >
                              Register Now
                         </PinkButton>

                         <Box marginTop="135px">
                              <Image src={GalleryDesktop} />
                         </Box>
                    </Flex>
               </Box>
          </Box>
     );
}

export default YogaArambha;
YogaArambha.Layout = HomeLayout;

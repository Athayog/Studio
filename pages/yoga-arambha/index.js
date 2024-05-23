import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Button } from '@chakra-ui/button';
import { Box, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/react';
import Image from 'next/image';
import GalleryDesktop from 'public/24Gallery.png';
import GalleryMobile from 'public/24GalleryMobile.png';
import Guest from 'public/24Guest.png';
import DateMap from 'public/24Map.svg';
import MapLeft from 'public/24MapLeft.jpg';
import MapRight from 'public/24MapRight.png';
import What1 from 'public/24What1.png';
import What2 from 'public/24What2.png';
import What3 from 'public/24What3.png';
import What4 from 'public/24What4.png';
import Why1 from 'public/24Why1.png';
import Why2 from 'public/24Why2.png';
import Why3 from 'public/24Why3.png';
import HeroGirlLeft from 'public/24_Girl_Left.png';
import HeroGirlRight from 'public/24_Girl_Right.png';
import DateCalendar from 'public/24calendar.svg';
import Clock from 'public/24clock.png';
import HeroFlower2 from 'public/A24-Flower-2.svg';
import HeroFlower1 from 'public/A24-Flower.svg';
import HeroFlower3 from 'public/A24-Flower-3.svg';
import HeroFlower4 from 'public/A24-Flower-4.svg';
import HeroFlower5 from 'public/A24-Flower-5.svg';
import HeroFlower6 from 'public/A24-Flower-6.svg';
import Club from 'public/Club24.png';
import ArambhaLogo from 'public/ar24_logo.png';
import MapMobile from 'public/24MapMobile.png';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

const PinkButton = ({ children, ...props }) => {
     return (
          <Link href="/yoga-arambha/register" passHref>
               <Button p={{ base: '32px 33px', md: '34px 60px', lg: '44px 70px' }} _hover={{ backgroundColor: '#BF1D2C' }} backgroundColor="#EA3B4A" color="white" rounded="full" {...props}>
                    {children}
               </Button>
          </Link>
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

     const isMobile = useMediaQuery({ query: '(max-width: 390px)' });
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' });

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
                    <Image placeholder='blur' src={HeroFlower1} />
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
                    <Image placeholder='blur' src={HeroFlower2} />
               </Box>
               <Box
                    name="flowerRight"
                    width={{
                         base: '100px',
                         md: '300px',
                         xl: 'auto'
                    }}
                    position="absolute"
                    top="800"
                    left="0"
               >
                    <Image placeholder='blur' src={HeroFlower5} />
               </Box>
               <Box
                    name="flowerRight"
                    width={{
                         base: '100px',
                         md: '300px',
                         xl: 'auto'
                    }}
                    position="absolute"
                    top="800"
                    right="0"
               >
                    <Image placeholder='blur' src={HeroFlower4} />
               </Box>
               <Box
                    name="flowerRight"
                    width={{
                         base: '100px',
                         md: '300px',
                         xl: 'auto'
                    }}
                    position="absolute"
                    top="1500"
                    right="0"
               >
                    <Image placeholder='blur' src={HeroFlower6} />
               </Box>
               <Box position="absolute" top="100" right="10" display={{ base: 'none', lg: 'block' }}>
                    <Image placeholder='blur' src={ArambhaLogo} />
               </Box>
               <Box maxW="1440px" width="100%" margin="0 auto" marginTop={{ base: '0px', lg: '40px' }} p={{ base: 0, md: 10 }}>
                    {/* Hero Section */}
                    <Box as="section" position="relative" width="100%" p={{ base: 10, md: 0 }}>
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
                              <Image placeholder='blur' src={HeroGirlLeft} />
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
                              <Image placeholder='blur' src={HeroGirlRight} />
                         </Box>

                         <Box name="content" textAlign="center">
                              <Box display={{ base: 'block', lg: 'none' }}>
                                   <Image placeholder='blur' src={ArambhaLogo} />
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
                                   <Box width={{ base: '30px', md: '30px', lg: '40px', xl: '100%' }}>
                                        <Image placeholder='blur' src={DateCalendar} />
                                   </Box>
                                   <Box style={{ fontFamily: 'Montserrat' }} fontSize={{ base: '20px', sm: '20px', md: '32px', lg: '32px', xl: '37px' }}>
                                        Date
                                   </Box>
                              </Flex>
                              <Text fontWeight="bold" fontSize={{ base: '20px', sm: '20px', md: '32px', lg: '32px', xl: '42px' }}>
                                   June 21, 2024
                              </Text>
                         </Flex>
                         <Divider orientation="vertical" bg="#C47E77" height={{ base: '80px', sm: '80px', md: '80px', lg: '100px', xl: '150px' }} width="2px" />
                         <Flex flexDirection="column" width="100%" gap="10px" justifyContent="center" alignItems="center">
                              <Flex alignItems="center" gap="15px">
                                   <Box width={{ base: '30px', md: '30px', lg: '40px', xl: '100%' }}>
                                        <Image placeholder='blur' src={DateMap} />{' '}
                                   </Box>
                                   <Box style={{ fontFamily: 'Montserrat' }} fontSize={{ base: '20px', sm: '20px', md: '32px', lg: '32px', xl: '37px' }}>
                                        Location
                                   </Box>
                              </Flex>
                              <Text fontWeight="bold" fontSize={{ base: '20px', sm: '20px', md: '32px', lg: '32px', xl: '42px' }}>
                                   Indiranagar club
                              </Text>
                         </Flex>
                    </Box>

                    <Box name="schedule" margin="o auto">
                         <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} name="schedules-container" justifyContent="flex-start" alignItems="center" marginTop={{ base: '26px', sm: '20px', md: '38px', lg: '68px', xl: '70px' }} gap={{ base: '20px', sm: '20px', md: '38px', lg: '68px', xl: '70px' }}>
                              <Flex class="schedule-time" flexDirection="column" gap="20px" flexDirection={{ base: 'row', lg: 'column' }} justifyContent="center" alignItems="center">
                                   <Box width={{ base: '40px', md: '30px', lg: '40px', xl: '100%' }}>
                                        {' '}
                                        <Image placeholder='blur' src={Clock} />
                                   </Box>

                                   <Text fontFamily="Montserrat" fontSize={{ base: '18px', sm: '18pxpx', md: '28px', lg: '38px', xl: '48px' }} fontWeight="medium">
                                        Time
                                   </Text>
                              </Flex>
                              <Box style={{ position: 'relative' }}>
                                   <Box
                                        top="0"
                                        left="0"
                                        zIndex="-1"
                                        width="100%"
                                        height="100%"
                                        position="absolute"
                                        name="table"
                                        filter="blur(14px)"
                                        background="linear-gradient(
                          -90deg,
                          rgba(255, 246, 246, 0.7) 15.67%,
                          rgba(255, 237, 229, 0.7) 70%
                        );"
                                   ></Box>
                                   <Flex direction="column" padding="4" overflowX="auto">
                                        {schedule.map((item, index) => (
                                             <Flex fontWeight="bold" fontSize={{ base: '15px', sm: '15px', md: '20px', lg: '25px', xl: '28px' }} key={index} color={index % 2 === 0 ? '#B80000' : 'black'} padding="2">
                                                  <Box flex="1">{item.time}</Box>
                                                  <Box flex="3">{item.event}</Box>
                                             </Flex>
                                        ))}
                                   </Flex>
                              </Box>
                         </Box>
                    </Box>

                    <Flex justifyContent="center" alignItems="center">
                         <PinkButton
                              margin="0 auto"
                              marginTop={{ base: '20px', sm: '20px', md: '50px', lg: '60px', xl: '100px' }}
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
                         <Flex width="100%" justifyContent="space-between" alignItems="center" flexDirection={{ base: 'column', md: 'row' }} gap={{ base: '15px', md: '0px' }}>
                              <Box width={{ base: '200px', md: '300px', lg: '300px', xl: '300px' }}>
                                   {' '}
                                   <Image placeholder='blur' src={Guest} />
                              </Box>

                              <Text textAlign={{ base: 'center', md: 'left' }} marginLeft={{ base: '0px', md: '70px' }} marginRight={{ base: '0', md: '40px' }} fontSize={{ base: '26px', sm: '26px', md: '25px', lg: '25px', xl: '36px' }} fontWeight="bold">
                                   Proudly supported by <chakra.span color="#992C2C">B N S Reddy.</chakra.span> <br /> Inspector general of Police IPS(R). President of Indiranagar Club
                              </Text>
                              <Box width={{ base: '200px', md: '300px', lg: '300px', xl: '300px' }}>
                                   {' '}
                                   <Image placeholder='blur' src={Club} />
                              </Box>
                         </Flex>
                    </Flex>

                    <Flex name="about" p={{ base: 5, md: 0 }} flexDirection="column" justfifyContent="center" gap={{ base: '10px', md: '20px' }} alignItems="center" width="100%" marginTop="95px">
                         <Text
                              fontSize={{
                                   base: '32px',
                                   sm: '32px',
                                   md: '44px',
                                   lg: '54px',
                                   xl: '64px'
                              }}
                              fontWeight="bold"
                         >
                              About AthaYog
                         </Text>
                         <Text
                              fontSize={{
                                   base: '16px',
                                   md: '22px',
                                   lg: '28px',
                                   xl: '28px'
                              }}
                              fontWeight="medium"
                              textAlign="center"
                         >
                              “Atha ” is derived from a Sanskit word which translates to “ now, here begins ” and Yog, means “ to join ” or “ union ”. At AthaYog, we are devoted to preserving the long-standing legacy of Yog and propagating the true purpose, philosophies and practices associated with this age-old wisdom. Our teachings are deep rooted in ancient scriptures - the Vedas, Sankhya Philosophy, Bhagwat Geeta, Patanjali’s Yoga Sutras, Hatha Yoga Pradipika and the teachings of all our gurus and their institutions.
                         </Text>
                         <Text
                              mt="20px"
                              fontSize={{
                                   base: '32px',
                                   sm: '32px',
                                   md: '44px',
                                   lg: '54px',
                                   xl: '64px'
                              }}
                              fontWeight="bold"
                         >
                              What We Do
                         </Text>
                         <Text
                              fontSize={{
                                   base: '16px',
                                   md: '22px',
                                   lg: '28px',
                                   xl: '28px'
                              }}
                              fontWeight="medium"
                              textAlign="center"
                         >
                              Sharing transformational tools to help one reconnect with their divine nature and progress in their journey of inner transformation. Reinstating one ' s belief in the ancient wisdom of Yog by reviving this knowledge. Ingraining Yog as a way of life that needs to be practiced and instilled in the fabric of living and being. Creating a positive and pristine environment that is conducive to one’s practice.
                         </Text>
                    </Flex>

                    <Flex marginTop={{ base: '27px', md: '80px' }} flexDirection="column">
                         <Text
                              textAlign="center"
                              width="100%"
                              fontSize={{
                                   base: '32px',
                                   sm: '32px',
                                   md: '44px',
                                   lg: '54px',
                                   xl: '64px'
                              }}
                              fontWeight="bold"
                         >
                              Why Yoga Arambha?
                         </Text>
                         <Flex p={{ base: 10, md: 0 }} justifyContent="center" alignItems="baseline" marginTop={{ base: '27px', md: '47px' }} gap="37px" flexWrap="wrap">
                              <Flex rounded="md" overflow="hidden" maxW="400px" flexDirection="column" gap={{ base: '15px', md: '15px' }} justifyContent="center" alignItems="center">
                                   <Image placeholder='blur' src={Why1} />
                                   <Text
                                        fontSize={{
                                             base: '23px',
                                             md: '23px',
                                             lg: '32px',
                                             xl: '32px'
                                        }}
                                        fontWeight="bold"
                                   >
                                        Yoga as Innerness
                                   </Text>
                                   <Text
                                        style={{ fontFamily: 'Montserrat' }}
                                        fontSize={{
                                             base: '16px',
                                             md: '22px',
                                             lg: '22px',
                                             xl: '22px'
                                        }}
                                        textAlign="center"
                                        fontWeight="semibold"
                                   >
                                        Yoga integrates mind and body through breath control, meditation and movement which cultivates inner strength, resilience and well-being, not just physical fitness.
                                   </Text>
                              </Flex>
                              <Flex rounded="md" overflow="hidden" maxW="400px" flexDirection="column" gap={{ base: '15px', md: '15px' }} justifyContent="center" alignItems="center">
                                   <Image placeholder='blur' src={Why2} />
                                   <Text
                                        fontSize={{
                                             base: '23px',
                                             md: '23px',
                                             lg: '32px',
                                             xl: '32px'
                                        }}
                                        fontWeight="bold"
                                   >
                                        Yoga for All
                                   </Text>
                                   <Text
                                        style={{ fontFamily: 'Montserrat' }}
                                        fontSize={{
                                             base: '16px',
                                             md: '22px',
                                             lg: '22px',
                                             xl: '22px'
                                        }}
                                        textAlign="center"
                                        fontWeight="semibold"
                                   >
                                        Yoga welcomes all women, regardless of background or experience, to discover strength, peace and joy.
                                   </Text>
                              </Flex>
                              <Flex rounded="md" overflow="hidden" maxW="400px" flexDirection="column" gap={{ base: '15px', md: '15px' }} justifyContent="center" alignItems="center">
                                   <Image placeholder='blur' src={Why3} />
                                   <Text
                                        fontSize={{
                                             base: '23px',
                                             md: '23px',
                                             lg: '32px',
                                             xl: '32px'
                                        }}
                                        fontWeight="bold"
                                   >
                                        Women's Empowerment
                                   </Text>
                                   <Text
                                        style={{ fontFamily: 'Montserrat' }}
                                        fontSize={{
                                             base: '16px',
                                             md: '22px',
                                             lg: '22px',
                                             xl: '22px'
                                        }}
                                        textAlign="center"
                                        fontWeight="semibold"
                                   >
                                        Yoga nurtures a woman's holistic well being, strengthening her body, calming her mind and uplifting her spirit.
                                   </Text>
                              </Flex>
                         </Flex>
                    </Flex>

                    <Flex marginTop={{ base: '27px', md: '60px' }} flexDirection="column">
                         <Text
                              textAlign="center"
                              width="100%"
                              fontSize={{
                                   base: '32px',
                                   sm: '32px',
                                   md: '44px',
                                   lg: '54px',
                                   xl: '64px'
                              }}
                              fontWeight="bold"
                         >
                              What to Expect
                         </Text>
                         <Grid p={{ base: 10, md: 0 }} gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} justifyItems="center" alignItems="center" marginTop={{ base: '27px', md: '47px' }} gap="52px">
                              <Flex justifySelf={{ base: 'auto', lg: 'flex-end' }} alignSelf="baseline" rounded="md" overflow="hidden" maxW="500px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Box rounded="md" overflow="hidden">
                                        <Image placeholder='blur' alt="What" src={What1} />
                                   </Box>
                                   <Text
                                        fontSize={{
                                             base: '23px',
                                             md: '23px',
                                             lg: '32px',
                                             xl: '32px'
                                        }}
                                        fontWeight="bold"
                                   >
                                        Yoga Practice
                                   </Text>
                                   <Text
                                        textAlign="center"
                                        fontSize={{
                                             base: '16px',
                                             md: '22px',
                                             lg: '28px',
                                             xl: '28px'
                                        }}
                                        style={{ fontFamily: 'Montserrat' }}
                                        fontWeight="semibold"
                                        maxWidth="500px"
                                   >
                                        Tailored to all levels, focusing on postures and flows that promote strength, flexibility and energy.
                                   </Text>
                              </Flex>
                              <Flex justifySelf={{ base: 'auto', lg: 'flex-start' }} alignSelf="baseline" rounded="md" overflow="hidden" maxW="500px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Box rounded="md" overflow="hidden">
                                        <Image placeholder='blur' alt="What" src={What2} />
                                   </Box>
                                   <Text
                                        textAlign="center"
                                        fontSize={{
                                             base: '23px',
                                             md: '23px',
                                             lg: '32px',
                                             xl: '32px'
                                        }}
                                        fontWeight="bold"
                                   >
                                        Breath Work
                                   </Text>
                                   <Text
                                        textAlign="center"
                                        fontSize={{
                                             base: '16px',
                                             md: '22px',
                                             lg: '28px',
                                             xl: '28px'
                                        }}
                                        fontWeight="semibold"
                                        maxWidth="500px"
                                        style={{ fontFamily: 'Montserrat' }}
                                   >
                                        Guided practices to calm the mind, reduce stress and enhance vitality.
                                   </Text>
                              </Flex>
                              <Flex justifySelf={{ base: 'auto', lg: 'flex-end' }} alignSelf="baseline" rounded="md" overflow="hidden" maxW="500px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Box rounded="md" overflow="hidden">
                                        <Image placeholder='blur' alt="What" src={What3} />
                                   </Box>
                                   <Text
                                        textAlign="center"
                                        fontSize={{
                                             base: '23px',
                                             md: '23px',
                                             lg: '32px',
                                             xl: '32px'
                                        }}
                                        fontWeight="bold"
                                   >
                                        Community Connection
                                   </Text>
                                   <Text
                                        textAlign="center"
                                        fontSize={{
                                             base: '16px',
                                             md: '22px',
                                             lg: '28px',
                                             xl: '28px'
                                        }}
                                        fontWeight="semibold"
                                        maxWidth="500px"
                                        style={{ fontFamily: 'Montserrat' }}
                                   >
                                        Opportunities to connect with other women in a supportive and uplifting environment.
                                   </Text>
                              </Flex>
                              <Flex justifySelf={{ base: 'auto', lg: 'flex-start' }} alignSelf="baseline" rounded="md" overflow="hidden" maxW="500px" flexDirection="column" gap="15px" justifyContent="center" alignItems="center">
                                   <Box rounded="md" overflow="hidden">
                                        <Image placeholder='blur' alt="What" src={What4} />
                                   </Box>
                                   <Text
                                        textAlign="center"
                                        fontSize={{
                                             base: '23px',
                                             md: '23px',
                                             lg: '32px',
                                             xl: '32px'
                                        }}
                                        fontWeight="bold"
                                   >
                                        Community Connection
                                   </Text>
                                   <Text
                                        textAlign="center"
                                        fontSize={{
                                             base: '16px',
                                             md: '22px',
                                             lg: '28px',
                                             xl: '28px'
                                        }}
                                        fontWeight="semibold"
                                        maxWidth="500px"
                                        style={{ fontFamily: 'Montserrat' }}
                                   >
                                        Opportunities to connect with other women in a supportive and uplifting environment.
                                   </Text>
                              </Flex>
                         </Grid>
                         <Flex justifyContent="center" alignItems="center">
                              <PinkButton
                                   margin="0 auto"
                                   marginTop={{ base: '21px', md: '100px' }}
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
                         <Box bg="#CBCBCB" padding="40px" marginTop={{ base: '45px', lg: '62px' }}>
                              <Text fontSize={{ base: '26px', md: '36px', lg: '46px' }} fontWeight="bold" textAlign="center">
                                   Map View
                              </Text>
                              {isMobile ? (
                                   <Image placeholder='blur' src={MapMobile} />
                              ) : (
                                   <Flex>
                                        <Image placeholder='blur' src={MapLeft} />
                                        <Image placeholder='blur' src={MapRight} />
                                   </Flex>
                              )}
                         </Box>

                         <PinkButton
                              margin="0 auto"
                              marginTop={{ base: '21px', md: '100px' }}
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

                         <Box marginTop={{ base: '21px', md: '135px' }}>{isMobile ? <Image placeholder='blur' src={GalleryMobile} /> : <Image placeholder='blur' src={GalleryDesktop} />}</Box>
                    </Flex>
               </Box>
          </Box>
     );
}

export default YogaArambha;
YogaArambha.Layout = HomeLayout;

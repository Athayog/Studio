import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box, Button, List, ListItem, Text, UnorderedList, chakra, position } from '@chakra-ui/react';
import React from 'react';
import Girl1 from 'public/mental-health/1.png';
import Girl2 from 'public/mental-health/2.png';
import Girl3 from 'public/mental-health/3.png';
import Large from 'public/mental-health/large.png';
import Medium from 'public/mental-health/medium.png';
import Mobile from 'public/mental-health/mobile.png';
import Image from 'next/image';
import Calendar from 'public/mental-health/solar_calendar-date-bold.svg';
import Clock from 'public/mental-health/weui_time-filled.svg';
import Solar from 'public/mental-health/mingcute_sandglass-fill.svg';
import HeroGirl1 from 'public/mental-health/girl_hero_1.png';
import HeroGirl2 from 'public/mental-health/girl_hero_2.png';
import { useMediaQuery } from 'react-responsive';
import styles from './styles.module.scss';

const whoShouldAttend = {
     title: 'Who Should Attend',
     list: ['Anyone looking to boost their mental well-being.', 'Yoga practitioners (beginner to advanced levels).', 'Students dealing with stress.', 'Corporate professionals managing workplace pressure.', 'Anyone interested in mindfulness and self-care']
};

const experience = {
     title: 'What You’ll Experience',
     list: [
          {
               title: '60-Minute Yoga Session',
               subtext: 'Focusing on restorative yoga poses and breathwork for relaxation and mental clarity.'
          },
          {
               title: 'Mindfulness Practices',
               subtext: 'Learn meditation and visualisation techniques to cultivate a calm and focused mind.'
          },
          {
               title: 'Mental Health Talk',
               subtext: 'A brief discussion on how yoga can support mental well-being, guided by a mental health professional or experienced yoga instructor.'
          },
          {
               title: 'Interactive Q&A Session',
               subtext: 'Connect with the community and get your questions answered.'
          }
     ]
};

const workshop = {
     title: 'After the Workshop',
     list: [
          {
               title: 'Join Our Instagram Community',
               subtext: 'A dedicated space for participants to share their experiences and support each other.'
          },
          {
               title: 'Participate in a Self-Help Group',
               subtext: 'A 10-day follow-up group for continued support, insights and mindfulness practices.'
          },
          {
               title: 'Exclusive Offer',
               subtext: 'Get access to our next online 7-Day Mind Cleansing and Relaxation Workshop for just ₹999! Dive deeper into relaxation and mindfulness techniques.'
          }
     ]
};

const ChipData = [
     {
          icon: Calendar,
          text: 'October 10, 2024',
          color: 'rgba(239,201,193,0.27)',
          textColor: '#CF5402'
     },
     {
          icon: Clock,
          text: '7:00 PM - 8:30 PM',
          color: '#EAE9EF',
          textColor: '#6153AA'
     },
     {
          icon: Solar,
          text: '1.5 Hours',
          color: '#E7EAD6',
          textColor: '#546200'
     }
];

const Chip = ({ icon, text, color, textColor }) => {
     return (
          <Box bgColor={color} rounded={{ base: '10px', md: 'full' }} display="flex" padding="5px 10px" color={textColor} alignItems="center" gap="10px" width={{ base: '142px', md: 'max-content' }}>
               <Box display={{ base: 'none', sm: 'none', md: 'block' }}>
                    <Image src={icon} alt={text} width={28} height={28} />
               </Box>
               <Text fontSize={{ base: '26px', md: '28px' }} fontWeight={{ base: 'medium', lg: 'bold' }}>
                    {text}
               </Text>
          </Box>
     );
};
function MentalHealth() {
     const tabletBelow = useMediaQuery({ query: '(max-width: 1024px)' });
     const mobileBelow = useMediaQuery({ query: '(max-width: 600px)' });

     let ImageBg = Large;

     if (mobileBelow) {
          ImageBg = Mobile;
     } else if (tabletBelow) {
          ImageBg = Medium;
     }

     return (
          <div>
               <NavbarHelper />
               <Box position="relative" minH={{ base: '65vh', lg: '80vh' }}>
                    <Box zIndex="2" position="relative" display="flex" flexDir="column" justifyContent="center" alignItems={{ base: 'baseline', lg: 'center' }} minH={{ base: '65vh', lg: '80vh' }} padding={{ base: '20px', md: '50px' }}>
                         <Text color="#022483" fontSize={{ base: '48px', md: '54px', lg: '62px' }} fontWeight="bold" display={{ base: 'none', sm: 'none', md: 'block' }} lineHeight="54px">
                              Yoga for Mental Health - Online
                         </Text>
                         <Text color="#022483" fontSize={{ base: '48px', md: '54px', lg: '62px' }} fontWeight="bold" display={{ base: 'block', sm: 'block', md: 'none' }} lineHeight="54px">
                              Yoga for <br /> Mental Health <br /> Online
                         </Text>
                         <Box display="flex" gap="30px" marginTop={{ base: '10px', lg: '48px' }} flexWrap="wrap" flexDirection={{ base: 'column', md: 'row' }}>
                              {ChipData.map((item, index) => (
                                   <Chip key={index} icon={item.icon} text={item.text} color={item.color} textColor={item.textColor} />
                              ))}
                         </Box>
                         <Text fontSize="28px" fontWeight="500" marginTop="37px" color="#B75951" display={{ base: 'none', sm: 'none', md: 'block' }}>
                              Special Offer
                         </Text>
                         <Box bg="white" padding={{ base: '15px 20px', lg: '17px 52px' }} display={{ base: 'none', sm: 'none', md: 'block' }} rounded="20px" textAlign="center" marginTop="20px">
                              <Text fontSize={{ base: '19px', lg: '22px' }} fontWeight="500">
                                   Original Price:
                                   <chakra.span className={styles.diagonal}>₹299</chakra.span>
                              </Text>
                              <Text fontSize={{ base: '26px', lg: '32px' }} fontWeight="500" color="#198424" lineHeight="38px">
                                   Limited Time Offer: <chakra.span fontSize={{ base: '44px', lg: '51px' }}>₹99</chakra.span>
                              </Text>
                         </Box>
                         <a href="https://rzp.io/rzp/58j5hFDolP" target="_blank" rel="noreferrer">
                              <Button bg="#1046B2" rounded="full" _hover={{ backgroundColor: '#326FEA' }} display={{ base: 'none', sm: 'none', md: 'block' }} color="#fff" width={{ base: '283px', md: '330px' }} height={{ base: '62px', md: '70px' }} fontSize={{ base: '27px', md: '32px' }} marginTop="32px">
                                   Register Now
                              </Button>
                         </a>
                    </Box>
                    <Box zIndex="2" position="relative">
                         <Box position="absolute" bottom="0px" left="0px" display={{ base: 'none', lg: 'block' }} width={{ base: '150px', md: '300px', lg: '350px' }} height="auto">
                              <Image src={HeroGirl1} alt="HeroArtwork" layout="responsive" />
                         </Box>
                         <Box position="absolute" right="0px" bottom="0px" width={{ base: '250px', md: '250px', lg: '300px' }} height="auto">
                              <Image src={HeroGirl2} alt="HeroArtwork" layout="responsive" />
                         </Box>
                    </Box>

                    <Image src={ImageBg} layout="fill" alt="Large" placeholder="blur" />
               </Box>
               <Box bg="white" padding={{ base: '5px 10px', lg: '17px 52px' }} display={{ base: 'block', sm: 'block', md: 'none' }} rounded="20px" textAlign="center" marginTop="20px">
                    <Text fontSize={{ base: '19px', lg: '22px' }} fontWeight="500">
                         Original Price: <chakra.span className={styles.diagonal}>₹299</chakra.span>
                    </Text>
                    <Text fontSize={{ base: '26px', lg: '32px' }} fontWeight="500" color="#198424" lineHeight="38px">
                         Limited Time Offer: <chakra.span fontSize={{ base: '44px', lg: '51px' }}>₹99</chakra.span>
                    </Text>
               </Box>

               <Box backgroundImage="linear-gradient(to bottom, rgba(253, 161, 200, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)" padding={{ base: '30px 20px', md: '100px 20px' }}>
                    <a href="https://rzp.io/rzp/58j5hFDolP" target="_blank" rel="noreferrer">
                         <Button bg="#1046B2" rounded="full" _hover={{ backgroundColor: '#326FEA' }} margin="0 auto" marginBottom="30px" display={{ base: 'block', sm: 'block', md: 'none' }} color="#fff" width={{ base: '283px', md: '330px' }} height={{ base: '62px', md: '70px' }} fontSize={{ base: '27px', md: '32px' }}>
                              Register Now
                         </Button>
                    </a>
                    <Box maxWidth="1440px" margin="0 auto" textAlign="center">
                         <Box>
                              <Text fontSize={{ base: '30px', md: '30px', lg: '38px' }} lineHeight="35px" textAlign={'center'} fontWeight="bold">
                                   About the Workshop
                              </Text>
                              <Text maxW="4xl" margin="30px auto 0 auto" fontSize={{ base: '18px', md: '24px', lg: '24px' }}>
                                   In celebration of World Mental Health Day, this virtual workshop is designed to help you manage stress, improve mindfulness and enhance overall well-being through yoga. Our session is open to all and aims to provide practical tools for a more peaceful mind and body.
                              </Text>
                         </Box>

                         <Box textAlign="left" display="flex" flexDirection={{ base: 'column-reverse', md: 'row', lg: 'row' }} justifyContent="space-between" alignItems={'center'} gap={{ base: '20px', md: '50px' }} margin={{ base: '50px 0px', md: '100px 0px' }}>
                              <Box width="100%">
                                   <Text fontSize={{ base: '30px', md: '30px', lg: '38px' }} lineHeight="35px" textAlign={{ base: 'center', md: 'left' }} fontWeight="bold">
                                        {whoShouldAttend.title}
                                   </Text>
                                   <UnorderedList marginTop="20px" width="100%" fontSize={{ base: '18px', md: '19px', lg: '24px' }}>
                                        {whoShouldAttend.list.map((item, index) => (
                                             <ListItem color="#000" width="100%" fontWeight="medium" key={index} marginBottom="10px">
                                                  {item}
                                             </ListItem>
                                        ))}
                                   </UnorderedList>
                              </Box>
                              <Box maxWidth={{ base: '100%', md: '400px' }}>
                                   <Image src={Girl1} alt="Girl1" placeholder="blur" />
                              </Box>
                         </Box>
                         <Box textAlign="left" display="flex" flexDirection={{ base: 'column-reverse', md: 'row', lg: 'row' }} justifyContent="space-between" alignItems={'center'} gap={{ base: '20px', md: '50px' }} margin={{ base: '50px 0px', md: '100px 0px' }}>
                              <Box>
                                   <Text fontSize={{ base: '30px', md: '30px', lg: '38px' }} lineHeight="35px" textAlign={{ base: 'center', md: 'left' }} fontWeight="bold">
                                        {experience.title}
                                   </Text>
                                   <UnorderedList marginTop="20px" width="100%" fontSize={{ base: '18px', md: '19px', lg: '24px' }}>
                                        {experience.list.map((item, index) => (
                                             <ListItem fontWeight="medium" key={index} marginBottom="10px">
                                                  <chakra.span color="#000" fontWeight="bold">
                                                       {item.title}:{' '}
                                                  </chakra.span>
                                                  <chakra.span>{item.subtext}</chakra.span>
                                             </ListItem>
                                        ))}
                                   </UnorderedList>
                              </Box>
                              <Box maxWidth={{ base: '100%', md: '400px' }}>
                                   <Image src={Girl2} alt="Girl1" placeholder="blur" />
                              </Box>
                         </Box>
                         <Box textAlign="left" display="flex" flexDirection={{ base: 'column-reverse', md: 'row', lg: 'row' }} justifyContent="space-between" alignItems={'center'} gap={{ base: '20px', md: '50px' }} margin={{ base: '50px 0px', md: '100px 0px' }}>
                              <Box>
                                   <Text fontSize={{ base: '30px', md: '30px', lg: '38px' }} lineHeight="35px" textAlign={{ base: 'center', md: 'left' }} fontWeight="bold">
                                        {workshop.title}
                                   </Text>
                                   <UnorderedList marginTop="20px" width="100%" fontSize={{ base: '18px', md: '19px', lg: '24px' }}>
                                        {workshop.list.map((item, index) => (
                                             <ListItem fontWeight="medium" key={index} marginBottom="10px">
                                                  <chakra.span color="#000" fontWeight="bold">
                                                       {item.title}:{' '}
                                                  </chakra.span>
                                                  <chakra.span>{item.subtext}</chakra.span>
                                             </ListItem>
                                        ))}
                                   </UnorderedList>
                              </Box>
                              <Box maxWidth={{ base: '100%', md: '400px' }}>
                                   <Image src={Girl3} alt="Girl1" placeholder="blur" />
                              </Box>
                         </Box>
                         <Box>
                              <Text fontWeight="medium" maxW="4xl" margin="0 auto" fontSize={{ base: '24px', md: '26px', lg: '30px' }}>
                                   Register now to secure your spot and elevate your mental well-being through yoga and mindfulness!
                              </Text>
                              <a href="https://rzp.io/rzp/58j5hFDolP" target="_blank" rel="noreferrer">
                                   <Button bg="#1046B2" rounded="full" _hover={{ backgroundColor: '#326FEA' }} color="#fff" width={{ base: '283px', md: '330px' }} height={{ base: '62px', md: '70px' }} fontSize={{ base: '27px', md: '32px' }} marginTop="32px">
                                        Register Now
                                   </Button>
                              </a>
                         </Box>
                    </Box>
               </Box>
          </div>
     );
}

export default MentalHealth;
MentalHealth.Layout = HomeLayout;

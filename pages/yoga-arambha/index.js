import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import ar1 from 'public/ar_1.png';
import ar2 from 'public/ar_2.png';

const YogArambha = () => {
     return (
          <div>
               <NavbarHelper />
               <Flex position="relative" justifyContent="center" maxWidth="1440px" padding="25px 36px" margin="0 auto" flexDirection="column" textAlign="center">
                    <Heading lineHeight="76px" fontWeight="bold" fontSize="64px" color="#71312A" textAlign="center">
                         Yoga Arambha 2024 <br /> Empower Your Inner Goddess
                    </Heading>
                    <Text lineHeight="46px" fontFamily="Montserrat" mt="12px" fontSize="32px" fontWeight="bold" color="#202020">
                         Join AthaYog&apos;s International Day of Yoga Celebration
                    </Text>
                    <Text lineHeight="44px" fontFamily="Montserrat" mt="12px" fontSize="30px" fontWeight="semibold" color="#AA645B">
                         Empower Your Mind, Body & Spirit with Yoga
                    </Text>

                    <Button
                         background="#EA3B4A"
                         fontSize="36px"
                         rounded="full"
                         lineHeight="46px"
                         color="#FFFFFF"
                         width="427px"
                         height="116px"
                         margin="0 auto"
                         mt="76px"
                         display="flex"
                         flexDirection="column"
                    >
                         {' '}
                         <chakra.span fontWeight="bold">Register Now</chakra.span> <chakra.span>Free & For Everyone</chakra.span>{' '}
                    </Button>

                    <Box width="359px" position="absolute" overflow="hidden" left="0" top="150px">
                         <Image src={ar1} layout="responsive" objectFit="cover" placeholder="blur" alt="Swami" />
                    </Box>
                    <Box width="455px" right="0" top="150px" position="absolute" overflow="hidden">
                         <Image src={ar2} layout="responsive" objectFit="cover" placeholder="blur" alt="Swami" />
                    </Box>

                    <Box mt="120px">
                         <Text fontSize="64px" fontWeight="semibold">
                              About the Event
                         </Text>
                         <Text mt="12px" fontSize="30px" fontWeight="semibold">
                              AthaYog invites you to a special International Day of Yoga event dedicated to celebrating the strength, resilience and power of women. Through yoga, breath work and
                              community, we&apos;ll explore practices that empower us on all levels.
                         </Text>
                    </Box>
               </Flex>
          </div>
     );
};

export default YogArambha;
YogArambha.Layout = HomeLayout;

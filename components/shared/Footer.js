import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import {
     Box,
     Flex,
     HStack,
     Stack,
     Text,
     Link as ChakraLink,
     Grid,
     chakra
} from '@chakra-ui/react';
import {
     AiOutlineFacebook,
     AiOutlineInstagram,
     AiOutlineYoutube
} from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
     return (
          <Flex
               bg="aygreen.700"
               height="100%"
               justifyContent="center"
               alignItems="center"
               width="100%"
          >
               <Grid
                    gridGap="3rem"
                    gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                    alignItems="start"
                    padding={{
                         base: '3rem 2rem',
                         md: '2rem 4rem ',
                         lg: '3rem 0'
                    }}
                    width={{ base: '100%', md: '90%', lg: '80%' }}
               >
                    <Stack spacing={4} color="white">
                         <Text
                              color="white"
                              fontWeight="medium"
                              textTransform="uppercase"
                         >
                              Site Links
                         </Text>
                         <Link href="/" passHref>
                              <Text cursor="pointer">Home</Text>
                         </Link>
                         <Link href="/about" passHref>
                              <Text cursor="pointer">About</Text>
                         </Link>
                         <Link href="/privacy" passHref>
                              <Text cursor="pointer">Privacy Policy</Text>
                         </Link>

                         <Link href="/refund" passHref>
                              <Text cursor="pointer">Refund Policy</Text>
                         </Link>
                         <Link href="/terms" passHref>
                              <Text cursor="pointer">Terms & Conditions</Text>
                         </Link>
                    </Stack>
                    <Stack spacing={4} color="white">
                         <Text
                              color="white"
                              fontWeight="medium"
                              textTransform="uppercase"
                         >
                              Offerings
                         </Text>
                         <Link href="/classes/workshops" passHref>
                              <Text cursor="pointer">AthaYog Workshops</Text>
                         </Link>
                         <Link href="/courses/shikshana" passHref>
                              <Text cursor="pointer">
                                   AthaYog Shikshana Pada
                              </Text>
                         </Link>
                         <Link href="/classes/space" passHref>
                              <Text cursor="pointer">AthaYog Space </Text>
                         </Link>
                         <Link href="/classes/online" passHref>
                              <Text cursor="pointer">AthaYog Online </Text>
                         </Link>
                         <Link href="/classes/personal" passHref>
                              <Text cursor="pointer">AthaYog Personal</Text>
                         </Link>
                         <Link href="/classes/onsite" passHref>
                              <Text cursor="pointer">AthaYog Onsite</Text>
                         </Link>
                         <Link href="/courses/chikitsa" passHref>
                              <Text cursor="pointer">AthaYog Chikitsa</Text>
                         </Link>
                    </Stack>

                    <Stack spacing={4} color="white">
                         <Text
                              color="white"
                              fontWeight="medium"
                              textTransform="uppercase"
                         >
                              Reach Us
                         </Text>
                         <a href="tel:+919611771434">
                              <PhoneIcon mr={3} size="1.5rem" />
                              +91 8690333111
                         </a>
                         <a href="mailto:info@athayogliving.com">
                              <EmailIcon mr={3} size="1.5rem" />
                              info@athayogliving.com
                         </a>
                         <HStack spacing="1rem">
                              <ChakraLink
                                   href="https://www.instagram.com/athayogliving/"
                                   isExternal
                                   aria-label="instagram"
                              >
                                   <AiOutlineInstagram size="1.5rem" />
                              </ChakraLink>
                              <ChakraLink
                                   href="https://www.facebook.com/athayogliving/"
                                   isExternal
                                   aria-label="facebook"
                              >
                                   <AiOutlineFacebook size="1.5rem" />
                              </ChakraLink>
                              <ChakraLink
                                   href="https://www.youtube.com/channel/UCrcAojiHuSq7YJulqRN8NBw"
                                   isExternal
                                   aria-label="facebook"
                              >
                                   <AiOutlineYoutube size="1.5rem" />
                              </ChakraLink>
                         </HStack>
                         <Text>
                              <chakra.span textDecoration="underline">
                                   Head Branch
                              </chakra.span>{' '}
                              <br />
                              No.3293, 1st floor, 12th main, HAL 2nd stage,
                              Indiranagar, Bengaluru, Karnataka - 560038
                         </Text>
                         <Text>
                              <chakra.span textDecoration="underline">
                                   KR Puram Branch{' '}
                              </chakra.span>{' '}
                              <br />
                              307, Athayog living, Sun Rise Arcade, Devasandra
                              Main Road, Kodigehalli, Krishnarajapura,
                              Bengaluru, Karnataka - 560036
                         </Text>
                    </Stack>
                    <Stack color="white" spacing={5}>
                         <Box>
                              <chakra.span textDecoration="underline">
                                   Head Branch
                              </chakra.span>
                              <iframe
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0327167179826!2d77.63410251527463!3d12.969758318426862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17beabf7494b%3A0x43f0a854e3d6096f!2sAthaYog%20Living!5e0!3m2!1sen!2sin!4v1636645641301!5m2!1sen!2sin"
                                   width="600"
                                   height="450"
                                   title="Athayog Google Map"
                                   frameBorder={0}
                                   style={{
                                        border: 0,
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '5px'
                                   }}
                                   allowFullScreen={false}
                                   tabIndex={0}
                              ></iframe>
                         </Box>
                         <Box>
                              <chakra.span textDecoration="underline">
                                   KR Puram Branch
                              </chakra.span>

                              <iframe
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4847988052406!2d77.71351501529448!3d13.004770190834247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11291dc28c27%3A0xd39ba6332f2b865c!2sAthaYog%20Living!5e0!3m2!1sen!2sin!4v1615373298875!5m2!1sen!2sin"
                                   width="600"
                                   height="450"
                                   title="Athayog Google Map"
                                   frameBorder={0}
                                   style={{
                                        border: 0,
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '5px'
                                   }}
                                   allowFullScreen={false}
                                   tabIndex={0}
                              ></iframe>
                         </Box>
                    </Stack>
               </Grid>
          </Flex>
     );
};

export default Footer;

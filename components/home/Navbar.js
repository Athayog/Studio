import { useAuth } from '@/lib/auth';
import {
     Avatar,
     Box,
     Button,
     Center,
     chakra,
     CloseButton,
     Drawer,
     DrawerBody,
     DrawerCloseButton,
     DrawerContent,
     DrawerFooter,
     DrawerHeader,
     DrawerOverlay,
     Flex,
     HStack,
     Menu,
     MenuButton,
     MenuItem,
     MenuList,
     Text,
     useDisclosure,
     VStack
} from '@chakra-ui/react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from 'public/Logo_Filled.png';
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { MotionButton } from '../shared/MotionElements';
import SwiperCore, { Autoplay } from 'swiper';

const Navbar = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();
     const { isOpen, onOpen, onClose } = useDisclosure();
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

     const [offer, showOffer] = useState(true);
     const signOut = (redirect) => {
          onClose();
          signout(redirect);
     };
     SwiperCore.use([Autoplay]);
     const announcements = null;

     const announcementsURLS = ['/kids-yoga-camp', '/yoga-retreat'];

     return (
          <Box zIndex={3} position="fixed" width="100%">
               <Center
                    bg="white"
                    transition="linear"
                    transform="initial"
                    style={{ backdropFilter: 'blur(5px)' }}
                    width="100%"
                    height={{ base: '4rem', md: '4rem', lg: '4rem' }}
               >
                    <Flex
                         alignItems="center"
                         justifyContent="space-between"
                         minWidth="80%"
                    >
                         <Flex
                              display={{
                                   base: 'flex',
                                   md: 'flex',
                                   lg: 'none'
                              }}
                         >
                              <HiMenu fontSize="1.2rem" onClick={onOpen} />
                         </Flex>
                         <Flex alignItems="center">
                              <Link passHref href="/">
                                   <Flex alignItems="center" cursor="pointer">
                                        <Box>
                                             <Image
                                                  src={Logo}
                                                  alt="logo"
                                                  height={
                                                       isTabletOrMobile
                                                            ? 25
                                                            : 35
                                                  }
                                                  width={
                                                       isTabletOrMobile
                                                            ? 25
                                                            : 35
                                                  }
                                             />
                                        </Box>

                                        <Text
                                             color="#46563E"
                                             fontSize={{
                                                  base: 'xl',
                                                  md: '2xl',
                                                  lg: '3xl'
                                             }}
                                             ml={2}
                                             fontWeight="normal"
                                             cursor="pointer"
                                             letterSpacing="-2.5px"
                                        >
                                             Atha Yog
                                        </Text>
                                   </Flex>
                              </Link>

                              <HStack
                                   ml={{ base: '3rem', md: '3rem', lg: '5rem' }}
                                   variant="ghost"
                                   spacing="6"
                                   size="sm"
                                   color="primaryBlack"
                                   display={{
                                        base: 'none',
                                        md: 'none',
                                        lg: 'block'
                                   }}
                                   mr="1rem"
                              >
                                   <Link href="/" passHref>
                                        <MotionButton
                                             fontWeight="normal"
                                             fontSize="md"
                                             bg="transparent"
                                             variant="ghost"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',

                                                  borderColor: '#bec3c9'
                                             }}
                                             whileHover={{
                                                  transition: { duration: 1 }
                                             }}
                                             whileTap={{ scale: 0.9 }}
                                             isActive={
                                                  router.pathname == '/'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Home
                                        </MotionButton>
                                   </Link>

                                   <Link href="/about" as="about" passHref>
                                        <Button
                                             fontWeight="normal"
                                             fontSize="md"
                                             variant="ghost"
                                             bg="transparent"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',
                                                  transform: 'scale(0.98)',
                                                  borderColor: '#bec3c9'
                                             }}
                                             isActive={
                                                  router.pathname == '/about'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             About
                                        </Button>
                                   </Link>
                                   <Link href="/classes">
                                        <Button
                                             fontWeight="normal"
                                             fontSize="md"
                                             variant="ghost"
                                             bg="transparent"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',
                                                  transform: 'scale(0.98)',
                                                  borderColor: '#bec3c9'
                                             }}
                                             isActive={
                                                  router.pathname == '/classes'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Classes
                                        </Button>
                                   </Link>
                                   <Link href="/courses">
                                        <Button
                                             fontWeight="normal"
                                             fontSize="md"
                                             variant="ghost"
                                             bg="transparent"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',
                                                  transform: 'scale(0.98)',
                                                  borderColor: '#bec3c9'
                                             }}
                                             isActive={
                                                  router.pathname == '/courses'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Courses
                                        </Button>
                                   </Link>
                                   <Link href="/career">
                                        <Button
                                             fontWeight="normal"
                                             fontSize="md"
                                             variant="ghost"
                                             bg="transparent"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',
                                                  transform: 'scale(0.98)',
                                                  borderColor: '#bec3c9'
                                             }}
                                             isActive={
                                                  router.pathname == '/career'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Career
                                        </Button>
                                   </Link>
                              </HStack>

                              <HStack
                                   variant="ghost"
                                   spacing="6"
                                   size="sm"
                                   ml={2}
                                   color="primaryBlack"
                                   mr="1rem"
                              ></HStack>
                         </Flex>

                         <Flex
                              display={{ base: 'none', md: 'none', lg: 'flex' }}
                         >
                              <Link href="/register/trial">
                                   <Button
                                        bg="aygreen.100"
                                        _hover={{
                                             bg: 'aygreen.200'
                                        }}
                                        variant="solid"
                                        size="sm"
                                        fontSize="md"
                                        color="gray.700"
                                        mr={10}
                                        boxShadow="base"
                                        rounded="md"
                                        px={8}
                                        py={4}
                                   >
                                        Free Trial
                                   </Button>
                              </Link>

                              {user ? (
                                   <Menu>
                                        <MenuButton size="sm" boxShadow="base">
                                             <Avatar
                                                  name={user?.name}
                                                  size="sm"
                                             />
                                        </MenuButton>
                                        <MenuList
                                             fontSize="md"
                                             bg="aygreen.100"
                                        >
                                             <Link passHref href="/account">
                                                  <MenuItem>
                                                       My Account
                                                  </MenuItem>
                                             </Link>

                                             <MenuItem
                                                  onClick={() => signOut('/')}
                                             >
                                                  Logout
                                             </MenuItem>
                                        </MenuList>
                                   </Menu>
                              ) : (
                                   <Link
                                        passHref
                                        href="/account/[signup]"
                                        as="/account/signup"
                                   >
                                        <Button
                                             bg="aygray.100"
                                             boxShadow="base"
                                             color="primaryDarkGray"
                                             variant="solid"
                                             size="sm"
                                             fontSize="md"
                                             rounded="md"
                                             px={8}
                                             py={4}
                                        >
                                             Join Us
                                        </Button>
                                   </Link>
                              )}
                         </Flex>
                    </Flex>
               </Center>

               <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay zIndex="12000">
                         <DrawerContent>
                              <DrawerCloseButton />
                              <DrawerHeader>Navigation</DrawerHeader>

                              <DrawerBody>
                                   <VStack spacing={5} align="stretch">
                                        <Link passHref href="/">
                                             <Button
                                                  isActive={
                                                       router.pathname == '/'
                                                            ? true
                                                            : ''
                                                  }
                                                  onClick={onClose}
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Home
                                             </Button>
                                        </Link>
                                        <Link passHref href="/about">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/about'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  About Us
                                             </Button>
                                        </Link>

                                        <Link passHref href="/classes">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/classes'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Classes
                                             </Button>
                                        </Link>
                                        <Link passHref href="/courses">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/courses'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Courses
                                             </Button>
                                        </Link>
                                        <Link passHref href="/career">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/career'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Career
                                             </Button>
                                        </Link>
                                   </VStack>
                              </DrawerBody>

                              <DrawerFooter>
                                   {user ? (
                                        <Menu>
                                             <MenuButton size="sm">
                                                  <Avatar
                                                       name={user?.name}
                                                       size="sm"
                                                  />
                                             </MenuButton>
                                             <MenuList
                                                  fontSize="md"
                                                  bg="aygreen.100"
                                             >
                                                  <Link
                                                       passHref
                                                       href="/account"
                                                  >
                                                       <MenuItem
                                                            onClick={onClose}
                                                       >
                                                            Account
                                                       </MenuItem>
                                                  </Link>

                                                  <MenuItem
                                                       onClick={() =>
                                                            signOut('/')
                                                       }
                                                  >
                                                       Logout
                                                  </MenuItem>
                                             </MenuList>
                                        </Menu>
                                   ) : (
                                        <Link
                                             passHref
                                             href="/account/[signup]"
                                             as="/account/signup"
                                        >
                                             <Button
                                                  colorScheme="aygreen"
                                                  fontSize="md"
                                                  rounded="md"
                                                  onClick={onClose}
                                             >
                                                  Join Us
                                             </Button>
                                        </Link>
                                   )}
                              </DrawerFooter>
                         </DrawerContent>
                    </DrawerOverlay>
               </Drawer>
          </Box>
     );
};

export default Navbar;

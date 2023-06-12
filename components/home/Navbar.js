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
     IconButton,
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
import { CloseIcon } from '@chakra-ui/icons';

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
               {offer && (
                    <Box
                         bg="rgb(58,60,59)"
                         color="white"
                         p={{ base: '2', sm: '2', md: '2' }}
                         textAlign="center"
                         fontWeight="medium"
                         position="relative"
                    >
                         Sadhana practice for International Day of Yoga -
                         Starting from June 1st 2023 to June 21st 2023 -{' '}
                         <a
                              href="https://forms.gle/QfG6JP6iccHCp1ez7"
                              target="_blank"
                              rel="noreferrer"
                         >
                              <strong>
                                   <u>Register Now</u>
                              </strong>
                         </a>
                         <IconButton
                              icon={<CloseIcon />}
                              cursor="pointer"
                              position="absolute"
                              top={{ base: '2px', sm: '2px', md: '8px' }}
                              size="xs"
                              right={{ base: '2px', sm: '2px', md: '20px' }}
                              bg="transparent"
                              colorScheme="green"
                              onClick={() => showOffer(false)}
                         ></IconButton>
                    </Box>
               )}

               <Center
                    bg="white"
                    transition="linear"
                    transform="initial"
                    style={{ backdropFilter: 'blur(5px)' }}
                    borderBottom="1px solid #efefef"
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

                                   <Link href="/about" passHref>
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
                                   <Link href="/classes" passHref>
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
                                   <Link href="/courses" passHref>
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
                                   {/* <Link href="/career" passHref>
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
                                   </Link> */}
                                   <Link href="/yoga-day" passHref>
                                        <Button
                                             fontWeight="normal"
                                             fontSize="md"
                                             variant="ghost"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',
                                                  transform: 'scale(0.98)',
                                                  borderColor: '#bec3c9'
                                             }}
                                             isActive={
                                                  router.pathname == '/yoga-day'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Yoga Day 2023
                                        </Button>
                                   </Link>
                                   <Link href="/store" passHref>
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
                                                  router.pathname == '/store'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Store
                                        </MotionButton>
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
                              <Link href="/register/trial" passHref>
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
                                        <MenuButton size="sm" boxShadow="none">
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
                                        {/* <Link passHref href="/career">
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
                                        </Link> */}
                                        <Link passHref href="/yoga-day">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/yoga-day'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Yoga Day 2023
                                             </Button>
                                        </Link>
                                        <Link passHref href="/store">
                                             <Button
                                                  isActive={
                                                       router.pathname ==
                                                       '/store'
                                                            ? true
                                                            : ''
                                                  }
                                                  onClick={onClose}
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Store
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

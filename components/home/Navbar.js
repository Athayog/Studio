import { useAuth } from '@/lib/auth';
import { Avatar, Box, Button, Center, chakra, CloseButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, VStack } from '@chakra-ui/react';
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
import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';

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

     const announcementsURLS = ['/yoga-arambha', '/yoga-arambha/register'];

     return (
          <>
               <Box zIndex={3} position="fixed" width="100%">
                    {/* {!announcementsURLS.includes(router.pathname) && <Link href='/yoga-arambha' passHref><Box textAlign='center' cursor='pointer' textDecoration='underline' py={1} color='white' bg="red.600">Yoga Arambha 2024 Registration is Live! Click Here to Join!</Box></Link>} */}
                    <Box bg="white" transition="linear" transform="initial" display="flex" alignItems="center" justifyContent="space-around" style={{ backdropFilter: 'blur(5px)' }} borderBottom="1px solid #efefef" width="100%" height={{ base: '4rem', md: '4rem', lg: '4rem' }}>
                         <Flex alignItems="center" justifyContent="space-between" minWidth="80%">
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
                                                  <Image src={Logo} alt="logo" height={isTabletOrMobile ? 25 : 35} width={isTabletOrMobile ? 25 : 35} />
                                             </Box>

                                             <Text
                                                  color="#46563E"
                                                  fontSize={{
                                                       base: 'xl',
                                                       md: 'xl',
                                                       lg: 'xl',
                                                       xl: '2xl'
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
                                        ml={{
                                             base: '2rem',
                                             md: '2rem',
                                             lg: '2rem',
                                             xl: '3rem'
                                        }}
                                        variant="ghost"
                                        spacing={{ base: '2', md: '2', lg: '2', xl: '6' }}
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
                                                       transition: {
                                                            duration: 1
                                                       }
                                                  }}
                                                  whileTap={{ scale: 0.9 }}
                                                  isActive={router.pathname == '/' ? true : ''}
                                                  size="sm"
                                             >
                                                  Home
                                             </MotionButton>
                                        </Link>

                                        <Link href="/about" passHref>
                                             <Button
                                                  fontWeight="normal"
                                                  fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }}
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
                                                  isActive={router.pathname == '/about' ? true : ''}
                                                  size="sm"
                                             >
                                                  About Us
                                             </Button>
                                        </Link>
                                        <Link href="/group-classes" passHref>
                                             <Button
                                                  fontWeight="normal"
                                                  fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }}
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
                                                  isActive={router.pathname == '/group-classes' ? true : ''}
                                                  size="sm"
                                             >
                                                  Group Class
                                             </Button>
                                        </Link>
                                        <Link href="/classes/personal" passHref>
                                             <Button
                                                  fontWeight="normal"
                                                  fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }}
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
                                                  isActive={router.pathname == '/classes/personal' ? true : ''}
                                                  size="sm"
                                             >
                                                  Personal Training
                                             </Button>
                                        </Link>

                                        <Menu>
                                             <MenuButton fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }} size="sm" background="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
                                                  Yoga Academy
                                             </MenuButton>
                                             <MenuList fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }}>
                                                  <Link href="/residential-program" passHref>
                                                       <MenuItem>Residential</MenuItem>
                                                  </Link>
                                                  <Link href="/yoga-academy" passHref>
                                                       <MenuItem>Non residential</MenuItem>
                                                  </Link>
                                             </MenuList>
                                        </Menu>

                                        <Menu>
                                             <MenuButton fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }} size="sm" background="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
                                                  Others
                                             </MenuButton>
                                             <MenuList fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }}>
                                                  <Link href="/career" passHref>
                                                       <MenuItem>Career</MenuItem>
                                                  </Link>
                                                  <Link href="/store" passHref>
                                                       <MenuItem>Store</MenuItem>
                                                  </Link>
                                                  <Link href="/courses/chikitsa" passHref>
                                                       <MenuItem>Yoga Therapy</MenuItem>
                                                  </Link>
                                             </MenuList>
                                        </Menu>
                                   </HStack>
                              </Flex>

                              <Flex
                                   display={{
                                        base: 'none',
                                        md: 'none',
                                        lg: 'flex'
                                   }}
                              >
                                   <Link href="/register/trial" passHref>
                                        <Button
                                             bg="aygreen.100"
                                             _hover={{
                                                  bg: 'aygreen.200'
                                             }}
                                             variant="solid"
                                             size="sm"
                                             fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }}
                                             color="gray.700"
                                             mr={{ sm: '3', md: '3', lg: '3', xl: '5' }}
                                             boxShadow="base"
                                             rounded="md"
                                             px={{ base: '6', md: '6', lg: '8', xl: '8' }}
                                             py={4}
                                        >
                                             Free Trial
                                        </Button>
                                   </Link>

                                   {user ? (
                                        <Menu>
                                             <MenuButton size="sm" boxShadow="none">
                                                  <Avatar name={user?.name} size="sm" />
                                             </MenuButton>
                                             <MenuList fontSize="md" bg="aygreen.100">
                                                  <Link passHref href="/account">
                                                       <MenuItem>My Account</MenuItem>
                                                  </Link>

                                                  <MenuItem onClick={() => signOut('/')}>Logout</MenuItem>
                                             </MenuList>
                                        </Menu>
                                   ) : (
                                        <Link passHref href="/account/[signup]" as="/account/signup">
                                             <Button bg="aygray.100" boxShadow="base" color="primaryDarkGray" variant="solid" size="sm" fontSize={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }} rounded="md" px={{ base: '6', md: '6', lg: '8', xl: '8' }} py={4}>
                                                  Join Us
                                             </Button>
                                        </Link>
                                   )}
                              </Flex>
                         </Flex>
                    </Box>

                    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                         <DrawerOverlay zIndex="12000">
                              <DrawerContent>
                                   <DrawerCloseButton />
                                   <DrawerHeader>Navigation</DrawerHeader>

                                   <DrawerBody>
                                        <VStack spacing={5} align="stretch">
                                             <Link passHref href="/">
                                                  <Button isActive={router.pathname == '/' ? true : ''} onClick={onClose} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       Home
                                                  </Button>
                                             </Link>
                                             <Link passHref href="/about">
                                                  <Button onClick={onClose} isActive={router.pathname == '/about' ? true : ''} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       About Us
                                                  </Button>
                                             </Link>

                                             <Link passHref href="/group-classes">
                                                  <Button onClick={onClose} isActive={router.pathname == '/group-classes' ? true : ''} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       Group Classes
                                                  </Button>
                                             </Link>
                                             <Link passHref href="/classes/personal">
                                                  <Button onClick={onClose} isActive={router.pathname == '/classes/personal' ? true : ''} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       Personal Training
                                                  </Button>
                                             </Link>
                                             <Link passHref href="/residential-program">
                                                  <Button onClick={onClose} isActive={router.pathname == '/residential-program' ? true : ''} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       Yoga Academy (Residential)
                                                  </Button>
                                             </Link>
                                             <Link passHref href="/yoga-academy">
                                                  <Button onClick={onClose} isActive={router.pathname == '/yoga-academy' ? true : ''} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       Yoga Academy (Non residential)
                                                  </Button>
                                             </Link>
                                             <Link passHref href="/store">
                                                  <Button isActive={router.pathname == '/store' ? true : ''} onClick={onClose} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       Store
                                                  </Button>
                                             </Link>
                                             <Link passHref href="/career">
                                                  <Button isActive={router.pathname == '/career' ? true : ''} onClick={onClose} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       Career
                                                  </Button>
                                             </Link>
                                             <Link passHref href="/courses/chikitsa">
                                                  <Button isActive={router.pathname == '/courses/chikitsa' ? true : ''} onClick={onClose} rounded="md" variant="ghost" colorScheme="aygreen" justifyContent="left">
                                                       Yoga Therapy
                                                  </Button>
                                             </Link>
                                        </VStack>
                                   </DrawerBody>

                                   <DrawerFooter>
                                        {user ? (
                                             <Menu>
                                                  <MenuButton size="sm">
                                                       <Avatar name={user?.name} size="sm" />
                                                  </MenuButton>
                                                  <MenuList fontSize="md" bg="aygreen.100">
                                                       <Link passHref href="/account">
                                                            <MenuItem onClick={onClose}>Account</MenuItem>
                                                       </Link>

                                                       <MenuItem onClick={() => signOut('/')}>Logout</MenuItem>
                                                  </MenuList>
                                             </Menu>
                                        ) : (
                                             <Link passHref href="/account/[signup]" as="/account/signup">
                                                  <Button colorScheme="aygreen" fontSize="md" rounded="md" onClick={onClose}>
                                                       Join Us
                                                  </Button>
                                             </Link>
                                        )}
                                   </DrawerFooter>
                              </DrawerContent>
                         </DrawerOverlay>
                    </Drawer>
               </Box>
          </>
     );
};

export default Navbar;

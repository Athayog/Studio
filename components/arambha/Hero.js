import {
     Box,
     Button,
     Flex,
     Heading,
     Stack,
     Text,
     useBreakpointValue
} from '@chakra-ui/react';
import Image from 'next/image';
import HeroDesktop from 'public/career3.jpg';
import { Link } from 'react-scroll';
import NavbarHelper from '../shared/NavbarHelper';

function Hero() {
     const buttonSize = useBreakpointValue(['md', 'lg']);

     return (
          <>
               <NavbarHelper />
               <Flex
                    height={{ base: '80vh', md: '65vh', lg: '65vh' }}
                    justifyContent="center"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    direction="column"
                    textColor="white"
                    position="relative"
                    background="linear-gradient(to bottom,rgba(0,0,0,0.7) 10%,rgba(0,0,0,0.7))"
               >
                    <Box zIndex={-1}>
                         <Image
                              src={HeroDesktop}
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                              placeholder="blur"
                         />
                    </Box>

                    <Box
                         width={{ base: '100%', lg: 'container.lg' }}
                         position={{ base: 'relative' }}
                         textAlign="center"
                         p={{ base: '5', md: '10' }}
                    >
                         <Text
                              mb={10}
                              fontSize={{
                                   base: 'lg',
                                   md: 'xl',
                                   lg: '2xl'
                              }}
                         >
                              June 18th, 2023 | 5.30 AM Onwards
                         </Text>
                         <Stack spacing={8}>
                              <Heading
                                   fontSize={{
                                        base: '6xl',
                                        md: '6xl',
                                        lg: '7xl'
                                   }}
                                   fontWeight="bold"
                                   textColor="white"
                                   fontFamily="Caveat"
                              >
                                   YOGA <br /> ARAMBHA
                              </Heading>
                              <Text
                                   fontSize={{
                                        base: 'xl',
                                        md: 'xl',
                                        lg: '3xl'
                                   }}
                              >
                                   {' '}
                                   International Day Of Yoga
                              </Text>
                         </Stack>
                         {/* <Divider mt={10} mb={5} /> */}
                         <Box mt={20}>
                              {' '}
                              <Flex
                                   gap={{
                                        base: '3',
                                        md: '3',
                                        lg: '5'
                                   }}
                                   justifyContent="center"
                                   direction={{
                                        base: 'column',
                                        md: 'row',
                                        lg: 'row'
                                   }}
                                   mt={10}
                              >
                                   <Link
                                        href="/yoga-day/register/"
                                        passHref={true}
                                   >
                                        <Button
                                             variant="solid"
                                             colorScheme="aygreen"
                                             size={buttonSize}
                                             rounded="full"
                                        >
                                             Register to attend
                                        </Button>
                                   </Link>
                                   <Link
                                        href="/yoga-day/register/"
                                        passHref={true}
                                   >
                                        <Button
                                             variant="solid"
                                             colorScheme="aygray"
                                             size={buttonSize}
                                             rounded="full"
                                        >
                                             See event schedule
                                        </Button>
                                   </Link>
                              </Flex>
                              <Flex
                                   justifyContent="center"
                                   alignItems="center"
                                   gap={5}
                                   mt={5}
                              >
                                   {' '}
                                   <Link passHref href="/yoga-day/ticket">
                                        <Button
                                             variant="solid"
                                             colorScheme="blackAlpha"
                                             size="sm"
                                             textDecoration="underline"
                                        >
                                             Already Registered? Download Your
                                             Ticket Here
                                        </Button>
                                   </Link>
                              </Flex>
                         </Box>
                    </Box>
               </Flex>
          </>
     );
}

export default Hero;

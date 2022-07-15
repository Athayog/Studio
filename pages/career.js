import Hero from '@/components/career/Hero';
import HookForm from '@/components/career/HookForm';
import HomeLayout from '@/components/layout/HomeLayout';
import {
     Box,
     Button,
     Container,
     Flex,
     Grid,
     Heading,
     Stack,
     Text,
     useBreakpointValue
} from '@chakra-ui/react';
import Image from 'next/image';

import career1 from 'public/career1.jpg';
import career2 from 'public/career2.jpg';
import { Link } from 'react-scroll';
function Career() {
     const buttonSize = useBreakpointValue(['md', 'md']);

     return (
          <div>
               <Hero />
               <Container
                    maxW="container.xl"
                    py={{ base: '10', md: '20' }}
                    px={5}
               >
                    <Stack
                         spacing={8}
                         justifyContent="center"
                         width="100%"
                         alignItems="center"
                    >
                         <Heading
                              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                              textAlign="center"
                         >
                              Spreading the Yogic way of life in the modern
                              world
                         </Heading>
                         <Text
                              fontWeight="normal"
                              fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }}
                         >
                              AthaYog Living Academy is committed to transform
                              people’s lives through the traditional teachings
                              of Yoga. We educate everyone in our space, online,
                              onsite and even in the corporate world to seek
                              their true potential through the tools of the
                              ancient wisdom.
                         </Text>
                         <Link
                              activeClass="active"
                              to="apply"
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}
                         >
                              <Button
                                   w={{ base: 'full', md: 'md' }}
                                   rounded="sm"
                                   size={buttonSize}
                                   backgroundColor="gray.800"
                                   textColor="gray.100"
                                   _hover={{ bg: 'gray.600' }}
                                   href="#apply"
                              >
                                   Apply Now
                              </Button>
                         </Link>
                    </Stack>
               </Container>

               <Box bg="gray.50" py={20} width="100%" px={5}>
                    <Heading
                         textAlign="center"
                         as="h3"
                         fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                         maxW="max-content"
                         margin="0 auto"
                    >
                         WORKING IN ATHAYOG (WHAT IT’S LIKE & WHY)
                    </Heading>{' '}
                    <Flex width="100%" gap={20} direction="column">
                         <Grid
                              gridTemplateColumns={{
                                   base: 'repeat(1,1fr)',
                                   md: 'repeat(2,1fr)',
                                   lg: 'repeat(2,1fr)'
                              }}
                              gridTemplateRows={{
                                   base: '15rem 1fr',
                                   md: 'repeat(1,1fr)',
                                   lg: 'repeat(1,1fr)'
                              }}
                              gap={10}
                              justifyContent="space-between"
                              width={{ base: '90vw', md: '85vw', lg: '80vw' }}
                              margin="0 auto"
                              mt={20}
                         >
                              <Stack
                                   spacing={10}
                                   order={{ base: '1', md: '0', lg: '0' }}
                              >
                                   <Heading fontSize="xl">
                                        LIFE AT ATHAYOG LIVING/ WORKING AT
                                        ATHAYOG LIVING
                                   </Heading>
                                   <Stack
                                        spacing={5}
                                        fontSize="lg"
                                        textColor="gray.600"
                                   >
                                        <Text>
                                             We are a dynamic team of young,
                                             energetic and diverse individuals
                                             united by our shared love for Yoga.
                                             We strive hard to guide people who
                                             join our academy with
                                             transformative tools of Yoga.
                                        </Text>
                                        <Text>
                                             Our day starts early as we educate
                                             different groups of people across
                                             Bangalore providing them with time,
                                             space and guidance to embody the
                                             practice of Yoga in the modern
                                             lifestyle. When we are not
                                             teaching, we practice, learn, share
                                             our knowledge and stay updated to
                                             be our best selves as educators for
                                             our members who show up on their
                                             mats every single day.
                                        </Text>
                                   </Stack>
                              </Stack>
                              <Box
                                   position="relative"
                                   order={{ base: '0', md: '0', lg: '1' }}
                              >
                                   <Image
                                        src={career1}
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                        placeholder="blur"
                                   />
                              </Box>
                         </Grid>
                         <Grid
                              gridTemplateColumns={{
                                   base: 'repeat(1,1fr)',
                                   md: 'repeat(2,1fr)',
                                   lg: 'repeat(2,1fr)'
                              }}
                              gridTemplateRows={{
                                   base: '15rem 1fr',
                                   md: 'repeat(1,1fr)',
                                   lg: 'repeat(1,1fr)'
                              }}
                              gap={10}
                              justifyContent="space-between"
                              width={{ base: '90vw', md: '85vw', lg: '80vw' }}
                              margin="0 auto"
                         >
                              <Box position="relative">
                                   <Image
                                        src={career2}
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                        placeholder="blur"
                                   />
                              </Box>
                              <Stack spacing={10}>
                                   <Heading fontSize="xl">
                                        WHY CHOOSE TO WORK AT ATHAYOG?
                                   </Heading>
                                   <Stack
                                        spacing={5}
                                        fontSize="lg"
                                        textColor="gray.600"
                                   >
                                        <Text>
                                             As an organization that provides
                                             wellness and education, we evolve
                                             everyday being around people and
                                             learning from them in return as we
                                             guide them through their personal
                                             journey.
                                        </Text>
                                        <Text>
                                             When you work at AthaYog Living,
                                             you receive as much as you share,
                                             you learn as much as you guide
                                             people and an abundance of
                                             transformation happens within
                                             yourself. That’s what the power of
                                             Yoga does when you spread the
                                             teachings to people who truly seek.
                                             And as you help people get closer
                                             to their true selves, you discover
                                             more about yourself whether you are
                                             inside the class or outside guiding
                                             people.
                                        </Text>
                                   </Stack>
                              </Stack>
                         </Grid>
                    </Flex>
               </Box>
               <Box bg="gray.100" py={10}>
                    <HookForm />
               </Box>
          </div>
     );
}

export default Career;
Career.Layout = HomeLayout;

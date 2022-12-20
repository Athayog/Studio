import {
     AspectRatio,
     Box,
     Button,
     chakra,
     Container,
     Divider,
     Flex,
     Heading,
     Text
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import swamiImage from 'public/swami.png';
import NavbarHelper from '../shared/NavbarHelper';
import Gallery from './Gallery';
import Schedule from './Schedule';

function JayantiHero() {
     return (
          <>
               <NavbarHelper />
               <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
               >
                    <Box
                         bg="#fdf6ee"
                         py={{ base: 10, sm: 10, md: 20, lg: 20 }}
                         width="100%"
                         height="100%"
                         px={10}
                    >
                         {' '}
                         <Flex
                              alignItems="center"
                              justifyContent="center"
                              gap={10}
                              width="100%"
                              height="100%"
                              direction={{
                                   base: 'column',
                                   sm: 'column',
                                   md: 'row'
                              }}
                         >
                              <Box
                                   width={{
                                        base: '300px',
                                        sm: '300px',
                                        md: '300px',
                                        lg: '400px'
                                   }}
                                   height={{
                                        base: '300px',
                                        sm: '300px',
                                        md: '300px',
                                        lg: '400px'
                                   }}
                                   position="relative"
                                   borderRadius="full"
                                   overflow="hidden"
                                   rounded="full"
                              >
                                   <Image
                                        src={swamiImage}
                                        layout="responsive"
                                        objectFit="cover"
                                        placeholder="blur"
                                        alt="Swami"
                                   />
                              </Box>
                              <Box>
                                   <Heading
                                        as="h1"
                                        textAlign="center"
                                        mb={{
                                             base: 8,
                                             sm: 8,
                                             md: 8,
                                             lg: 8
                                        }}
                                        fontSize={{
                                             base: '2xl',
                                             sm: '3xl',
                                             md: '3xl',
                                             lg: '4xl'
                                        }}
                                        position="relative"
                                        textTransform="uppercase"
                                        width={{
                                             base: '100%',
                                             sm: '100%',
                                             md: 'max-content'
                                        }}
                                        _after={{
                                             content: '""',
                                             position: 'absolute',
                                             top: '100%',
                                             width: '100%',
                                             left: '0',
                                             height: '3px',
                                             borderRadius: '2px',
                                             background:
                                                  'linear-gradient(to right,#e45727,#b12623)'
                                        }}
                                   >
                                        Young by Heart ❤️
                                   </Heading>
                                   <Flex
                                        direction="column"
                                        mb={10}
                                        fontSize={{
                                             base: 'xl',
                                             sm: 'xl',
                                             md: '2xl',
                                             lg: '2xl'
                                        }}
                                        textAlign={{
                                             base: 'center',
                                             sm: 'center',
                                             md: 'left'
                                        }}
                                        maxW={{
                                             base: '100%',
                                             sm: 'md'
                                        }}
                                        fontWeight="light"
                                   >
                                        <Text>
                                             {' '}
                                             <q>
                                                  My faith is in the younger
                                                  generation, the modern
                                                  generation. They will work out
                                                  the whole problem, like lions.
                                             </q>
                                        </Text>

                                        <Text
                                             fontWeight="normal"
                                             textAlign="center"
                                        >
                                             {' '}
                                             - Swami Vivekananda
                                        </Text>
                                   </Flex>
                              </Box>
                         </Flex>
                         <Text
                              textAlign="center"
                              color="#4c0605"
                              fontSize={{ base: 'xl', sm: '3xl' }}
                              mt={{ base: 5, lg: 10 }}
                         >
                              <chakra.span>
                                   5:00 am onwards, 12th January 2023
                              </chakra.span>
                              <chakra.span mx={3} fontWeight="light">
                                   at
                              </chakra.span>
                              <chakra.span fontWeight="light">
                                   Athayog Living Indiranagar
                              </chakra.span>
                         </Text>
                    </Box>

                    <Flex
                         direction="column"
                         gap={10}
                         my={20}
                         textAlign="center"
                         px={10}
                    >
                         <Heading
                              as="h2"
                              fontWeight="normal"
                              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                              maxW="5xl"
                              margin="0 auto"
                         >
                              Namaskara Bengaluru, Come join us for a day filled
                              with exciting talents, rejuvenating yoga sessions,
                              a marathon and much more.
                         </Heading>
                         <Box>
                              <Text
                                   textAlign="center"
                                   fontSize="2xl"
                                   maxW="4xl"
                                   margin="0 auto"
                                   fontWeight="light"
                              >
                                   AthaYog is celebrating{' '}
                                   <chakra.span fontWeight="normal">
                                        Swami Vivekananda Jayanthi
                                   </chakra.span>{' '}
                                   and{'  '}
                                   <chakra.span fontWeight="normal">
                                        {' '}
                                        National Youth Day{' '}
                                   </chakra.span>
                              </Text>
                         </Box>
                         <Link
                              passHref
                              href="/swami-vivekananda-jayanti/register"
                         >
                              <Button
                                   width="max-content"
                                   margin="0 auto"
                                   variant="solid"
                                   colorScheme="ayorange"
                              >
                                   Register Now
                              </Button>
                         </Link>
                         <Flex
                              justifyContent="center"
                              alignItems="center"
                              gap={5}
                         >
                              {' '}
                              <Link
                                   passHref
                                   href="/swami-vivekananda-jayanti/ticket"
                              >
                                   <Button
                                        variant="solid"
                                        colorScheme="gray"
                                        size="sm"
                                   >
                                        Already Registred? Downlaod Your Ticket
                                        Here
                                   </Button>
                              </Link>
                         </Flex>

                         <Divider />
                         <Flex direction="column" gap={10}>
                              {' '}
                              <Flex
                                   gap={10}
                                   direction="column"
                                   justifyContent="start"
                                   alignItems="start"
                                   fontSize="2xl"
                                   maxW="full"
                                   fontWeight="light"
                                   textAlign="center"
                              >
                                   <Text w="full">
                                        We have curated a line-up of events for
                                        the day and welcome all youth to
                                        participate. Here is the schedule for
                                        the full day program
                                   </Text>
                              </Flex>
                              <Schedule />
                              <Text
                                   color="#4c0605"
                                   borderColor="#4c0605"
                                   border="1px solid"
                                   p={5}
                                   fontSize="2xl"
                                   fontWeight="normal"
                              >
                                   We are also conducting a Donation Campaign
                                   for NGOs from January 1st to 10th and we look
                                   forward for all interested individuals to
                                   unite for a great cause.
                              </Text>
                         </Flex>
                    </Flex>
               </Flex>
          </>
     );
}

export default JayantiHero;

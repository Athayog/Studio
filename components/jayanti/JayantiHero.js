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

function JayantiHero({ images }) {
     return (
          <>
               <NavbarHelper />
               <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
               >
                    <Box bg="#fdf6ee" py={20} width="100%" height="100%">
                         {' '}
                         <Flex
                              alignItems="center"
                              justifyContent="center"
                              gap={10}
                              width="100%"
                              height="100%"
                         >
                              <Box
                                   width="400px"
                                   height="400px"
                                   position="relative"
                                   borderRadius="full"
                                   overflow="hidden"
                                   rounded="full"
                              >
                                   <Image
                                        src={swamiImage}
                                        layout="responsive"
                                        objectFit="cover"
                                        alt="Swami"
                                   />
                              </Box>
                              <Box>
                                   <Heading
                                        as="h1"
                                        textAlign="center"
                                        mb={10}
                                        fontSize="4xl"
                                        position="relative"
                                        width="max-content"
                                        _after={{
                                             content: '""',
                                             position: 'absolute',
                                             top: '100%',
                                             width: '100%',
                                             left: '0',
                                             height: '6px',
                                             borderRadius: '2px',
                                             background:
                                                  'linear-gradient(to right,#e45727,#b12623)'
                                        }}
                                   >
                                        Swami Vivekananda Jayanti
                                   </Heading>
                                   <Text
                                        mb={10}
                                        fontSize="2xl"
                                        maxW="md"
                                        fontWeight="light"
                                   >
                                        <q>
                                             Young by Heart ❤️ My faith is in
                                             the younger generation, the modern
                                             generation. They will work out the
                                             whole problem, like lions.
                                        </q>
                                        - Swami Vivekananda.
                                   </Text>
                              </Box>
                         </Flex>
                         <Text
                              textAlign="center"
                              color="#4c0605"
                              fontSize="3xl"
                              mt={20}
                         >
                              <chakra.span>
                                   5:00 am onwards, 12th January 2023
                              </chakra.span>
                              <chakra.span
                                   mx={3}
                                   fontWeight="light"
                                   fontSize="2rem"
                              >
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
                    >
                         <Heading
                              as="h2"
                              fontWeight="normal"
                              fontSize="4xl"
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
                              href="swami-vivekananda-jayanti/register"
                         >
                              <Button
                                   width="max-content"
                                   margin="0 auto"
                                   variant="outline"
                                   colorScheme="ayorange"
                              >
                                   Register Now
                              </Button>
                         </Link>

                         <Button
                              variant="link"
                              width="max-content"
                              margin="0 auto"
                              colorScheme="black"
                         >
                              Already Registred? Downlaod Your Ticket Here
                         </Button>

                         <Divider />
                         <Flex>
                              {' '}
                              <Flex
                                   gap={10}
                                   direction="column"
                                   justifyContent="start"
                                   alignItems="start"
                                   fontSize="2xl"
                                   maxW="5xl"
                                   px={10}
                                   fontWeight="light"
                                   textAlign="left"
                              >
                                   <Text>
                                        We have curated a line-up of events for
                                        the day and welcome all youth to
                                        participate. Here is the schedule for
                                        the full day program
                                   </Text>
                                   <Text
                                        color="#4c0605"
                                        borderColor="#4c0605"
                                        border="1px solid"
                                        p={5}
                                        fontWeight="normal"
                                   >
                                        We are also conducting a Donation
                                        Campaign for NGOs from January 1st to
                                        10th and we look forward for all
                                        interested individuals to unite for a
                                        great cause.
                                   </Text>
                              </Flex>
                              <Schedule />
                         </Flex>
                    </Flex>
               </Flex>
          </>
     );
}

export default JayantiHero;

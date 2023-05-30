import {
     Box,
     Button,
     Container,
     Flex,
     Grid,
     Heading,
     Stack,
     Text,
     chakra,
     useBreakpointValue,
     useToast
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import idy from 'public/og.png';

function Welcome() {
     const buttonSize = useBreakpointValue(['sm', 'md']);
     const toast = new useToast();

     function shareNative() {
          return new Promise(async (resolve) => {
               const shareUrl = `${window.location.href}`;

               await navigator.share({
                    text: 'Athayog Yoga Day - Arambha',
                    url: shareUrl
               });

               resolve();
          });
     }
     function shareFallback() {
          return new Promise(async (resolve) => {
               const shareUrl = `${window.location.href}`;
               navigator.clipboard.writeText(shareUrl);
               toast({
                    title: 'Copied',
                    description: 'URL has been copied to url',
                    status: 'success',
                    duration: 9000,
                    isClosable: true
               });
               resolve();
          });
     }

     const onWebShare = async () => {
          if (navigator && navigator.share) {
               await shareNative();
          } else {
               await shareFallback();
          }
     };
     return (
          <Container maxW="container.xl">
               <Stack
                    spacing={10}
                    bottom="0"
                    width="100%"
                    textAlign="center"
                    py={20}
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
               >
                    <Flex gap={5} spacing={10}>
                         <Box
                              overflow="hidden"
                              height="8rem"
                              width="8rem"
                              position="relative"
                         >
                              <Image
                                   src={idy}
                                   alt="azadi logo"
                                   objectFit="contain"
                                   layout="fill"
                              />
                         </Box>
                    </Flex>
                    <Heading
                         textAlign="center"
                         fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                         display={{ base: 'none', md: 'block' }}
                         fontWeight="normal"
                    >
                         <chakra.span>Namaskara Bengaluru, </chakra.span>
                         <chakra.span> Arise & Awake.</chakra.span>
                         <br />
                         Join us this International Day of Yoga!
                    </Heading>

                    <Box
                         textAlign="center"
                         fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                         fontWeight="normal"
                         display={{ base: 'block', md: 'none' }}
                    >
                         <Text>Namaskara Bengaluru, </Text>
                         <Text> Arise & Awake.</Text>
                         <br />
                         Join us this International Day of Yoga!
                    </Box>

                    <Text
                         fontSize={{ base: 'xl', md: '3xl', lg: '3xl' }}
                         fontWeight="normal"
                    >
                         June 18th, 2023 | Sunday 5.30 AM - 9:00 AM
                         <br />
                         Defense Colony Ground, Indiranagar, Bengaluru
                    </Text>

                    <Flex
                         alignItems="center"
                         gap={5}
                         direction={['column', 'column']}
                    >
                         <Link href="/yoga-day/register/" passHref={true}>
                              <Button
                                   size={buttonSize}
                                   colorScheme="aygreen"
                                   rounded="none"
                                   maxW="max-content"
                              >
                                   REGISTER NOW! - FREE AND OPEN TO ALL
                              </Button>
                         </Link>
                         <Flex
                              justifyContent="center"
                              alignItems="center"
                              gap={5}
                         >
                              {' '}
                              <Link passHref href="/yoga-day/ticket">
                                   <Button
                                        variant="solid"
                                        colorScheme="gray"
                                        size="sm"
                                   >
                                        Already Registered? Download Your Ticket
                                        Here
                                   </Button>
                              </Link>
                         </Flex>

                         <Flex
                              alignItems="center"
                              borderColor="gray.200"
                              maxW="md"
                              direction="column"
                              gap={3}
                         >
                              <Text>
                                   Celebrate with your Friends and Family
                              </Text>
                              <Button
                                   colorScheme="red"
                                   size={buttonSize}
                                   variant="outline"
                                   onClick={() => onWebShare()}
                                   rounded="none"
                              >
                                   SHARE
                              </Button>
                         </Flex>
                    </Flex>
               </Stack>
               <Stack
                    spacing={10}
                    py={10}
                    fontWeight="light"
                    fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
                    textColor="black"
               >
                    <Text textAlign="left">
                         AthaYog Living is celebrating Yoga with a grand
                         festival and we cordially invite each and every one of
                         you to celebrate the Yogic way of life.
                    </Text>
                    <Grid
                         templateColumns={{
                              base: 'repeat(1,1fr)',
                              md: 'repeat(2,1fr)',
                              lg: 'repeat(2,1fr)'
                         }}
                         gap={10}
                    >
                         <Stack spacing={10}>
                              <Text fontSize="2xl" fontWeight="bold">
                                   Yoga as an ‘innercise’
                              </Text>
                              <Text>
                                   One of our main goals is to help individuals
                                   cultivate and enrich their inner self as much
                                   as they work on their external needs like
                                   career, physical fitness, entertainment and
                                   leisure. In this way, Yoga is not just an
                                   exercise for the physical body but also a
                                   means to build resilience for dealing with
                                   life’s challenges.
                              </Text>
                              <Text>
                                   <strong>
                                        Last year, we celebrated International
                                        Day of Yoga{' '}
                                   </strong>
                                   at kittur rani chennamma stadium with{' '}
                                   <strong>700+ practitioners</strong> enjoying
                                   Multiple activities at the space including
                                   the Special Yoga session, yoga challenge
                                   competition, AR, VR, etc
                              </Text>
                              <Text>
                                   Let&apos;s gather on our Second Event and be
                                   a part of a conscious journey of YOGA
                                   ARAMBHA, an effort to bring health first.
                              </Text>
                              <Text fontStyle="italic">
                                   Meet people from all walks of life united
                                   through Yoga.
                              </Text>
                         </Stack>
                         <Stack
                              spacing={10}
                              padding={{ base: '3', md: '6', lg: '10' }}
                              bg="aygray.100"
                         >
                              <Text fontWeight="medium">Who Can Join?</Text>
                              <Text>YOGA IS FOR ALL. </Text>
                              <Text>
                                   Athyayog values the importance of community
                                   and Yoga helps rebuild this sense of
                                   community by allowing people of different
                                   backgrounds, ages, and interests to share the
                                   experience.
                              </Text>
                              <Text fontStyle="italic">
                                   Please note that it is open to all above 6
                                   years.
                              </Text>
                              <Box rounded="md" overflow="hidden">
                                   <Image
                                        src="https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/arambha%2FIDY_14.png?alt=media&token=08a7962a-5f38-47ee-98df-4b59bed16422"
                                        layout="responsive"
                                        objectFit="cover"
                                        height={50}
                                        width={100}
                                   />
                              </Box>
                         </Stack>
                    </Grid>
                    <Flex
                         borderTop="4px solid"
                         borderBottom="4px solid"
                         borderColor="orange.300"
                         py={5}
                         gap={5}
                         px={3}
                    >
                         <Text
                              textColor="teal.500"
                              fontWeight="bold"
                              fontSize="2xl"
                              width="max-content"
                         >
                              Special Day
                         </Text>
                         <Text textColor="green.900" fontWeight="normal">
                              Get absorbed in{' '}
                              <chakra.strong>
                                   transcendental music
                              </chakra.strong>{' '}
                              and Immersive{' '}
                              <chakra.strong>AR experience</chakra.strong> at
                              the venue!{' '}
                              <chakra.strong>
                                   Gratitude Goodie Bags{' '}
                              </chakra.strong>
                              for everyone attending the event.
                         </Text>
                    </Flex>
               </Stack>
          </Container>
     );
}

export default Welcome;

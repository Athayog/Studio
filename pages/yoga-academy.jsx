import Gallery from '@/components/lakshayan/Gallery';
import Hero from '@/components/lakshayan/Hero';
import Register from '@/components/lakshayan/Register';
import HomeLayout from '@/components/layout/HomeLayout';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-scroll';

function YogaAcademy() {
     const images = [
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_1.jpg?alt=media&token=a1e26fd3-48cc-475c-ab4c-3acd06707a69',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_10.jpg?alt=media&token=3c64db9f-7f4f-47b4-acbd-c66203c51d4d',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_2.jpg?alt=media&token=65ba3605-486f-4055-a821-46ad3a06d276',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_3.jpg?alt=media&token=aaba99a7-41af-4abe-bd77-0f08dba2a871',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_4.jpg?alt=media&token=6c8c03e2-673f-480b-9652-c5b4226b54db',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_5.jpg?alt=media&token=79424732-3f5d-4d32-8d5a-8c384c6093f4',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_6.jpg?alt=media&token=147eaabc-e8c2-4246-b816-f59efe14378c',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_7.jpg?alt=media&token=40b0bdf9-5571-4568-8313-b30dcac2b7e0',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_8.jpg?alt=media&token=6ee9d17b-4fcb-479a-86cb-5ba64506a678',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/lakshay_academy%2Facademy_9.jpg?alt=media&token=e9f7c68d-c154-466c-a91f-b25284e6ad84'
     ];
     return (
          <Box>
               <section>
                    <Hero heroImage={images[1]} />
               </section>{' '}
               <Box bg="white" color="gray.900" id="main-section">
                    {' '}
                    <Flex
                         gap={10}
                         direction="column"
                         maxW="80vw"
                         margin="0 auto"
                         py={20}
                    >
                         <Box>
                              <Heading fontSize="3xl">About Athayog</Heading>
                              <Text mt={3} fontSize="xl">
                                   AthaYog Living is an institution of Yog,
                                   devoted to preserving the long-standing
                                   legacy of Yoga by propagating the true
                                   purpose, philosophies and practices
                                   associated with Yogic wisdom. Our academy and
                                   teachers are certified with Yoga Alliance,
                                   which is a globally recognised certification!
                              </Text>
                         </Box>
                         <Box fontSize="xl">
                              <Text>
                                   AthaYog Living is launching a Yoga academy in
                                   Lakshyan Academy of Sports! Lakshyan Academy
                                   of Sports offers world-class sports
                                   facilities, with the goal of producing
                                   tomorrow&apos;s champions. They are located
                                   in Sarjapur, Bangalore.
                              </Text>
                              <Text mt={5}>
                                   Regular classes by AthaYog will take place at{' '}
                                   <u> 7AM, 8AM, 9AM, 5 PM and 6 PM</u>. These
                                   sessions are open to all with flexible
                                   timings, skillful teachers, hygienic
                                   environment, best infrastructure, authentic
                                   yoga practices, holistic yoga hall and
                                   spacious parking facility.
                              </Text>
                         </Box>
                    </Flex>
               </Box>
               <Gallery />
               <Register heroImage={images[2]} />
          </Box>
     );
}
export default YogaAcademy;
YogaAcademy.Layout = HomeLayout;
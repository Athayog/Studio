import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogOnline from 'public/athayogOnline.jpg';
import Information from '@/components/shared/Information';
import Pricing from '@/components/shared/Pricing';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';
import Schedule from '@/components/shared/Schedule';
import {
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Heading,
     Flex,
     Box,
     Text,
     List,
     ListItem,
     ListIcon,
     Badge
} from '@chakra-ui/react';
import OnlineCourses from '@/components/shared/OnlineCourses';
import ProsAndCons from '@/components/shared/ProsAndCons';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
export async function getStaticProps(context) {
     const { offers } = await getOffer('online');

     if (!offers) {
          return {
               notFound: true
          };
     }
     return {
          props: {
               offers: JSON.parse(JSON.stringify(offers)),
               notFound: false
          },
          revalidate: 1
     };
}

const Online = ({ offers, notFound }) => {
     const pageData = {
          name: 'Online',
          heroImage: athayogOnline,
          whatis: `You may be looking to keep your practice going at a steady pace but are unsure about stepping out in the midst of the pandemic. With AthaYog Online, you can continue from the comfort of your own space.`,
          prosAndCons: [
               [
                    'Practise in the safety and comfort of your home',
                    'Solitude - Practise behind closed doors and in your own company',
                    'Beneficial for physically unfit people who can’t commute.',
                    'Practise in your own time.',
                    'Practise from anywhere around the globe.'
               ],
               [
                    'Need a strong connection/ Technical issues',
                    'Lack of teacher’s physical presence.',
                    'Clarity of teacher’s demonstration, voice and screen display',
                    'Lack of physical correction.',
                    'Need for space and phone support for better angle/ visibility.'
               ]
          ]
     };

     const apiPricing = [];
     offers.map((data) => {
          if (data.isActive) {
               apiPricing.push({
                    id: data.id,
                    courseName: data.name,
                    description: data.description,
                    duration: data.isTrial
                         ? data.days + ' Days Trial'
                         : data.days + ' Days',
                    isTrial: data.isTrial,
                    old_price: data.old_price,
                    isGeneral: data.isGeneral,
                    durationNum: data.days,
                    price: data.price
               });
          }
     });
     const d = new Date();

     const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
     ];

     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Hero pageData={pageData} />
               {/* <Information pageData={pageData} /> */}
               {/* <OnlineCourses /> */}
               <BreadCrumb subLinks="classes" currentPage="Online" />
               <Flex
                    margin="auto"
                    padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    bg="primaryWhite"
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width={{ base: '95%', md: '90%', lg: '90%' }}
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: '2xl', md: '3xl' }}
                         >
                              Online Schedule For Yoga Arambha Sadhana
                         </Heading>
                         <Box
                              overflowX="auto"
                              width="100%"
                              boxShadow="base"
                              rounded="lg"
                              mt={10}
                         >
                              <Table
                                   variant="simple"
                                   size="sm"
                                   bg="white"
                                   colorScheme="aygreen"
                                   className="scheduleTable"
                              >
                                   <Thead>
                                        <Tr>
                                             <Th bg="aygreen.200">Time</Th>
                                             <Th bg="aygreen.200">Monday</Th>
                                             <Th bg="aygreen.200">Tuesday</Th>
                                             <Th bg="aygreen.200">Wednesday</Th>
                                             <Th bg="aygreen.200">Thursday</Th>
                                             <Th bg="aygreen.200">Friday</Th>
                                             <Th bg="aygreen.200">Saturday</Th>
                                             <Th bg="aygreen.200">Sunday</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Text width="150px">
                                                       6.00 AM - 7.00 AM
                                                  </Text>
                                             </Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Sivananda</Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7.00 AM - 8.00 AM
                                             </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm Of Being </Td>
                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony </Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  11:00 AM - 4:00 PM
                                             </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  4:00 PM - 5:00 PM
                                             </Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  5:00 PM - 6:00 PM
                                             </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Universal Harmony</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7:00 PM - 8:00 PM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Inner World</Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>

                         <Box
                              mt={10}
                              textAlign="left"
                              width="100%"
                              boxShadow="base"
                              bg="white"
                              rounded="md"
                              p={3}
                         >
                              <Box>
                                   <Text
                                        fontWeight="medium"
                                        textTransform="uppercase"
                                   >
                                        Timings Information
                                   </Text>

                                   <Flex gap={10} my={2} direction="row">
                                        <Flex direction="column" gap={1}>
                                             <Box>Monday - Sunday</Box>
                                             {/* <Box>Saturday - Sunday</Box> */}
                                        </Flex>
                                        <Flex direction="column" gap={1}>
                                             <Box>06:00 AM - 08:00 PM</Box>
                                             {/* <Box>07:00 AM - 08:00 PM</Box> */}
                                        </Flex>
                                   </Flex>
                              </Box>
                              {/* <List mt={3}>
                                   <ListItem>
                                        <ListIcon
                                             as={BsFillArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Athayog living will be closed on 2nd
                                        Saturday of every Month.
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={BsFillArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        2nd May - 13th May: Sadhana Camp - 11:00
                                        AM - 1:00 PM
                                   </ListItem>
                              </List>

                              <Badge
                                   whiteSpace="pre-wrap"
                                   fontWeight="medium"
                                   mt={3}
                              >
                                   Note: 108 Surya Namaskara will be practiced
                                   on 1st Saturday of every month, 7am - 9am
                                   batch.{' '}
                              </Badge> */}
                         </Box>
                    </Flex>
               </Flex>

               <Pricing
                    pricing={apiPricing}
                    registerTo={pageData.name.toLocaleLowerCase()}
               />

               <ProsAndCons data={pageData.prosAndCons} name="Online" />
          </motion.div>
     );
};

export default Online;
Online.Layout = HomeLayout;

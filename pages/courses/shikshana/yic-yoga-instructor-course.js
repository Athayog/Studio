import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import NavbarHelper from '@/components/shared/NavbarHelper';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import ShikshanaCalendarTable from '@/components/shared/ShikshanaCalendarTable';
import ShikshanaInformation from '@/components/shared/ShikshanaInformation';
import {
     Box,
     Flex,
     Heading,
     HStack,
     Stack,
     Text,
     ListItem,
     OrderedList
} from '@chakra-ui/layout';

import { chakra } from '@chakra-ui/system';
import {
     Table,
     TableCaption,
     TableContainer,
     Tbody,
     Td,
     Th,
     Thead,
     Tr
} from '@chakra-ui/table';
import { Tag, TagLabel } from '@chakra-ui/tag';
import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
function YicYoga() {
     const specialEvent = [
          {
               time: '6am - 8:30am (Weekday, Mon-Fri)',
               location: 'KR Puram',
               months: ['January', 'May', 'September'],
               courseName: null,
               details: [
                    {
                         date: '3rd January 2022 - 12th April 2022'
                    },
                    {
                         date: '2nd May 2022 - 5th August 2022'
                    },
                    {
                         date: '5th September 2022 - 13th December 2022'
                    }
               ]
          },
          {
               time: '11am - 4pm (Weekday, Mon-Fri)',
               location: 'Indiranagar',
               months: ['January', 'February', 'April', 'July', 'October'],
               courseName: null,
               details: [
                    {
                         date: '3rd January 2022 - 3rd March 2022'
                    },
                    {
                         date: '7th February 2022 - 1st April 2022'
                    },
                    {
                         date: '4th April 2022 - 2nd June 2022'
                    },
                    {
                         date: '4th July 2022 - 2nd September 2022'
                    },
                    {
                         date: '3rd Oct 2022 - 2nd December 2022'
                    }
               ]
          },
          {
               time: '11am - 4pm (Weekend, Sat-Sun)',
               location: 'Indiranagar',
               months: ['February', 'August'],
               courseName: null,
               details: [
                    {
                         date: '5th February 2022 - 18th June 2022 (Indiranagar) '
                    },
                    {
                         date: '6th August 2022 - 11th December 2022 (KR Puram)'
                    }
               ]
          }
     ];
     const events = [
          {
               name: 'YIC',
               data: specialEvent
          }
     ];

     return (
          <>
               <HeaderLayout>
                    <Heading>YIC Yoga Instructor Course</Heading>
                    <Stack spacing={2} my={5}>
                         <Text>
                              The yoga instructor course is a one month course
                              that helps an individual to shape their
                              personality and transform their knowledge to teach
                              yoga comprehensively. It is propounded by Swami
                              Vivekananda, the Indian Hindu monk who was a key
                              figure in the introduction of the Indian
                              philosophies of Vedanta and Yoga. The objective of
                              this course is to provide instructions, training,
                              research and advancement of all the streams of
                              yoga and its applications. Undertaking extra-mural
                              studies and activities will help contribute to
                              Peace, Poise, Harmony, Love, Health & Happiness.
                              It brings together theory and practical subjects
                              that cover breathing techniques, asanas, Sat
                              Kriyas, Pranayama and meditation techniques. The
                              theory would include an introduction to Patanjali
                              and Hatha yoga along with studies of Spiritual
                              Masters and Applications of Yoga.
                         </Text>
                    </Stack>
                    <Box mt={10}>
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              The syllabus consists of topics like :
                         </Heading>
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <OrderedList spacing={20}>
                                   <HStack
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                        spacing={{
                                             base: 0,
                                             md: 20,
                                             lg: 20
                                        }}
                                        flexDirection={{
                                             base: 'column',
                                             md: 'row',
                                             lg: 'row'
                                        }}
                                   >
                                        <Box>
                                             <ListItem>
                                                  Introduction to Yoga and its
                                                  Streams
                                             </ListItem>
                                             <ListItem>
                                                  Life and Message of Spiritual
                                                  Masters & Indian Culture
                                             </ListItem>
                                             <ListItem>
                                                  Report Writing & Presentation
                                             </ListItem>
                                             <ListItem>
                                                  Kriyā, Āsana, Prāṇāyāma,
                                                  Dhyāna – Practice &
                                                  Presentation
                                             </ListItem>
                                             <ListItem>
                                                  Teaching Techniques -
                                                  Worksheet Writing &
                                                  Presentation
                                             </ListItem>
                                             <ListItem>
                                                  Karma Yoga, Maitri Milana,
                                                  Kīrtana, Krīḍa Yoga & Ānanda
                                                  Sabhā
                                             </ListItem>
                                        </Box>
                                   </HStack>
                              </OrderedList>
                         </Flex>
                    </Box>
                    <Box mt={10}>
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              Course Inclusion
                         </Heading>
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <OrderedList spacing={20}>
                                   <HStack
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                        spacing={{
                                             base: 0,
                                             md: 20,
                                             lg: 20
                                        }}
                                        flexDirection={{
                                             base: 'column',
                                             md: 'row',
                                             lg: 'row'
                                        }}
                                   >
                                        <Box>
                                             <ListItem>
                                                  Classical Asanas
                                             </ListItem>
                                             <ListItem>Pranayama</ListItem>
                                             <ListItem>Yoga Nidra</ListItem>
                                             <ListItem>
                                                  Anatomy & Physiology
                                             </ListItem>
                                             <ListItem>Philosophy</ListItem>
                                             <ListItem>
                                                  Yoga Text / Yoga Sutra -
                                                  Bhagvatgita
                                             </ListItem>
                                             <ListItem>Ayurveda</ListItem>
                                        </Box>
                                        <Box>
                                             <ListItem>Shatkarma</ListItem>
                                             <ListItem>Chanting</ListItem>
                                             <ListItem>2 Days Retreat</ListItem>
                                             <ListItem>
                                                  Teaching Methodology
                                             </ListItem>
                                             <ListItem>
                                                  Class Apprenticeship
                                             </ListItem>
                                             <ListItem>Internship</ListItem>
                                             <ListItem>
                                                  Career Opportunity
                                             </ListItem>
                                        </Box>
                                   </HStack>
                              </OrderedList>
                         </Flex>
                    </Box>{' '}
                    <Heading fontSize="2xl">TTC Schedule</Heading>
                    <Box
                         overflowX="auto"
                         mb={5}
                         className="yic_table"
                         width="100%"
                    >
                         {' '}
                         <Table border="1px solid #ddd" mt={6} size="md">
                              <Thead bg="gray.200">
                                   <Tr>
                                        <Th>Course</Th>
                                        <Th>Time</Th>
                                        <Th>January </Th>
                                        <Th>April </Th>
                                        <Th>July </Th>
                                        <Th>October </Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td fontWeight="bold">RYT 200 / YIC</Td>
                                        <Td>
                                             6am - 8:30am
                                             <chakra.span display="block">
                                                  (Weekday, Mon-Fri) - (Online)
                                             </chakra.span>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            2nd January 2023
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            31st March 2023
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            3rd April 2023{' '}
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>30th June 2023</Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            3rd July 2023{' '}
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            29th September 2023
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            2nd October 2023{' '}
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            22nd December 2023
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
                    <Box
                         overflowX="auto"
                         mb={5}
                         className="yic_table"
                         width="100%"
                    >
                         <Table border="1px solid #ddd" mt={6} size="md">
                              <Thead bg="gray.200">
                                   <Tr>
                                        <Th>Course</Th>
                                        <Th>Time</Th>
                                        <Th>January - (Indiranagar)</Th>
                                        <Th>April - (KR puram)</Th>
                                        <Th>July - (Indiranagar)</Th>
                                        <Th>September - (KR puram)</Th>
                                        <Th>November - (Indiranagar)</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td fontWeight="bold">RYT 200 / YIC</Td>
                                        <Td>
                                             11:00am - 4pm
                                             <chakra.span display="block">
                                                  (Weekday, Mon-Fri)
                                             </chakra.span>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            2nd January 2023{' '}
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>28th Feb 2023</Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            3rd April 2023{' '}
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>31st May 2023</Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            3rd July 2023{' '}
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            29th August 2023
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            4th September 2023{' '}
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            30th October 2023
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            1st November 2023
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            22nd December 2023{' '}
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
                    <Box
                         overflowX="auto"
                         mb={5}
                         className="yic_table"
                         width="100%"
                    >
                         {' '}
                         <Table border="1px solid #ddd" mt={6} size="md">
                              <Thead bg="gray.200">
                                   <Tr>
                                        <Th>Course</Th>
                                        <Th>Time</Th>
                                        <Th>January - (KR puram)</Th>
                                        <Th>May - (Indiranagar)</Th>
                                        <Th>September - (KR puram)</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td fontWeight="bold">RYT 200 / YIC</Td>
                                        <Td>
                                             {' '}
                                             11:00am - 4pm
                                             <chakra.span display="block">
                                                  (Weekend, Sat-Sun)
                                             </chakra.span>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            7th January 2023{' '}
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            30th April 2023
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box> 6th May 2023</Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            27th August 2023
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                        <Td>
                                             <Flex gap={3}>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            From
                                                       </Box>
                                                       <Box>
                                                            {' '}
                                                            2nd September 2023
                                                       </Box>
                                                  </Box>
                                                  <Box
                                                       borderRight="1px solid"
                                                       borderColor="gray.100"
                                                  >
                                                       {' '}
                                                  </Box>
                                                  <Box>
                                                       <Box
                                                            color="gray.600"
                                                            fontWeight="light"
                                                       >
                                                            To
                                                       </Box>
                                                       <Box>
                                                            4th December 2023
                                                       </Box>
                                                  </Box>
                                             </Flex>
                                        </Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
               </HeaderLayout>
               <ContactMore registerTo="yic" />
          </>
     );
}

export default YicYoga;
YicYoga.Layout = HomeLayout;

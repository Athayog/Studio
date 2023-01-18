import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import ShikshanaCalendarTable from '@/components/shared/ShikshanaCalendarTable';
import {
     Box,
     Flex,
     Heading,
     HStack,
     ListItem,
     OrderedList,
     Stack,
     Text
} from '@chakra-ui/layout';
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
import { chakra } from '@chakra-ui/react';
import React from 'react';

function RYT200Courses() {
     return (
          <>
               <HeaderLayout>
                    <Heading>RYT 200 Course</Heading>
                    <Stack spacing={2} my={5}>
                         <Stack spacing={5}>
                              {' '}
                              <Text>
                                   AthaYog Living is an institution of Yoga
                                   devoted to preserving its long-standing
                                   legacy by propagating true purpose,
                                   philosophies and practices. The name Athayog
                                   is derived from the combination of two
                                   Sanskrit words, ‘Atha’ which translates to
                                   ‘now’ and ‘Yog’ than means ‘to join’. Our
                                   deep-rooted knowledge in this field comes
                                   from age-old scriptures like the Vedas,
                                   Sankhya Philosophy, Bhagwat Geeta,
                                   Patanjali’s Yoga Sutras, Hatha Yoga Pradipika
                                   and the teachings of all our gurus. We also
                                   have a team of young, energetic and dynamic
                                   individuals who are constantly enhancing
                                   their Yogic knowledge.
                              </Text>
                              <Text>
                                   Registered Yoga Teacher (RYT) is a
                                   distinction given to yoga teachers whose
                                   training and teaching experience meet Yoga
                                   Alliance requirements. A registered Yoga
                                   teacher must complete training with a
                                   Registered Yoga School (RYS), which is
                                   confirms by Yoga Alliance. Teachers can
                                   register as an RYT 200 post completion of a
                                   200 hours teacher training program registered
                                   with Yoga Alliance. All training hours must
                                   come from the same school.
                              </Text>
                              <Text>
                                   The RYT 200 course at AthaYog is taught by
                                   our Principal Teacher and Founder, Sharath
                                   Basavaraju. His teachings come from Swami
                                   Satyananda Saraswati from Bihar School of
                                   Yoga and formal Yogic education from a Swami
                                   Vivekananda Yoga Anusandhana Samsthana.
                              </Text>
                         </Stack>
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
               <ContactMore registerTo="ryt_200" />
          </>
     );
}

export default RYT200Courses;
RYT200Courses.Layout = HomeLayout;

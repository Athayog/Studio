import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import {
     Box,
     Heading,
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
import React from 'react';

function RPYTCourses() {
     return (
          <>
               <HeaderLayout>
                    <Heading>RPYT Course</Heading>
                    <Box fontSize="xl">
                         <Stack spacing={5} mt={10}>
                              <Text fontWeight="medium" fontSize="3xl">
                                   Prenatal and Postnatal Yoga Teacher Training
                                   course
                              </Text>
                              <Text>
                                   This specialised course is designed to equip
                                   the yoga teachers who are certified as YIC /
                                   200 / 300 / 500 hours teachers from a reputed
                                   institution or an equivalent degree in Yoga
                                   to take their learnings as a teacher one step
                                   ahead. This skill allows them to learn the
                                   requirements of a Prenatal yoga teacher by
                                   providing the tools and techniques of
                                   planning and delivering a class based on the
                                   students conditions and circumstances.
                              </Text>
                              <Text>
                                   The objective of this course is to build a
                                   framework of understanding the physical body
                                   and the mental health of the students.Through
                                   the theory and practical application , you
                                   will gain the confidence to lead a safe and
                                   effective prenatal yoga class. Specially
                                   designed with a lot of care and attention the
                                   course helps you to bloom as an
                                   Internationally certified Prenatal Yoga
                                   Instructor.
                              </Text>
                         </Stack>
                         <Stack spacing={5} mt={10}>
                              <Text fontWeight="medium" fontSize="3xl">
                                   Course covers the following topics
                              </Text>
                              <OrderedList pl={5}>
                                   <ListItem>Yoga Philosophy</ListItem>
                                   <ListItem>Anatomy </ListItem>
                                   <ListItem>
                                        An overview of pregnancy - Trimester
                                        wise
                                   </ListItem>
                                   <ListItem>Garbh sanskar </ListItem>
                                   <ListItem>Exercise and Posture</ListItem>
                                   <ListItem>Pelvic health</ListItem>
                                   <ListItem>Relaxation techniques</ListItem>
                                   <ListItem>
                                        Physical changes during pregnancy
                                   </ListItem>
                                   <ListItem>Common concerns</ListItem>
                                   <ListItem>Emotional changes</ListItem>
                                   <ListItem>Foetal talk</ListItem>
                                   <ListItem>Ayurveda and diet</ListItem>
                                   <ListItem>Labour and delivery </ListItem>
                                   <ListItem>High risk pregnancy</ListItem>
                                   <ListItem>Lactation </ListItem>
                                   <ListItem>Lamaze breathing</ListItem>
                                   <ListItem>Postnatal care</ListItem>
                                   <ListItem>Child care </ListItem>
                                   <ListItem>Teaching methodology</ListItem>
                              </OrderedList>
                         </Stack>
                         <Box mt={5}>
                              <Text>
                                   <strong>Dates of Training: </strong>3rd Oct
                                   to 31st Oct
                              </Text>
                              <Text>
                                   <strong>Time:</strong> 11am to 3pm
                              </Text>
                              <Text>
                                   <strong>Place:</strong> Indiranagar studio
                              </Text>
                         </Box>
                         {/* <Heading mt={10} fontSize="xl">
                              Eligibility
                         </Heading>
                         <Box mt={5}>
                              <Text>Certified RYT200 / YIC /any</Text>
                              <Text>Other certification Graduates</Text>
                         </Box> */}
                    </Box>
                    <TableContainer mb={10} className="yic_table">
                         <Heading fontSize="2xl" mt={10}>
                              Shikshana Pada{' '}
                         </Heading>
                         <Table
                              variant="striped"
                              border="1px solid #ddd"
                              mt={6}
                              size="md"
                         >
                              <Thead>
                                   <Tr>
                                        <Th>Time</Th>
                                        <Th>Course</Th>
                                        <Th>January </Th>
                                        <Th>February </Th>
                                        <Th>March</Th>
                                        <Th>April</Th>
                                        <Th>May</Th>
                                        <Th>June</Th>
                                        <Th>July</Th>
                                        <Th>August </Th>
                                        <Th>September</Th>
                                        <Th>October</Th>
                                        <Th>November</Th>
                                        <Th>December</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td>
                                             11:00am - 3:00pm (Weekday, Mon-Fri)
                                             - Indiranagar
                                        </Td>
                                        <Td>RPYT</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td>
                                             6th March 2023 - 31st March 2023
                                        </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                   </Tr>
                                   <Tr>
                                        <Td>
                                             10am - 4pm (Weekend, Sat-Sun) -
                                             Indiranagar
                                        </Td>
                                        <Td>RPYT</Td>
                                        <Td></Td>
                                        <Td>
                                             5th February 2023 - 9th April 2023
                                        </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                   </Tr>

                                   <Tr>
                                        <Td>
                                             11:00am - 3:00pm (Weekday, Mon-Fri)
                                             - Indiranagar
                                        </Td>
                                        <Td>Yin Yoga </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td>1st June 2023 - 20th June 2023</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                   </Tr>
                                   <Tr>
                                        <Td>
                                             11:00am - 3:00pm (Weekday, Mon-Fri)
                                             - Indiranagar
                                        </Td>
                                        <Td>RCYT </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td>3rd July 2023 - 25th July 2023</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                   </Tr>
                                   <Tr>
                                        <Td>
                                             11:00am - 4pm (Weekday, Mon-Fri) -
                                             Indiranagar
                                        </Td>
                                        <Td>RYT 300 </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td>
                                             2nd August 2023 - 30th October 2023
                                        </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </TableContainer>
               </HeaderLayout>
               <ContactMore registerTo="RPYT" />
          </>
     );
}

export default RPYTCourses;
RPYTCourses.Layout = HomeLayout;

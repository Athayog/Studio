import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import {
     Box,
     Heading,
     ListItem,
     OrderedList,
     Stack,
     Table,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr
} from '@chakra-ui/layout';
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
               </HeaderLayout>
               <ContactMore registerTo="RPYT" />
          </>
     );
}

export default RPYTCourses;
RPYTCourses.Layout = HomeLayout;

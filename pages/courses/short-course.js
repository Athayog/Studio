import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import CoursesLayout from '@/components/shared/CoursesLayout';
import { Heading } from '@chakra-ui/layout';
import Head from 'next/head';
import {
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     TableContainer
} from '@chakra-ui/react';
function ShortCourses() {
     return (
          <>
               <Head>
                    <title>Short Courses - AthayogLiving</title>
               </Head>
               <CoursesLayout>
                    <Heading>Short Courses</Heading>
                    <TableContainer mt={6}>
                         <Table variant="striped" border="1px solid #ddd">
                              <Thead>
                                   <Tr>
                                        <Th>Month</Th>
                                        <Th>Dates</Th>
                                        <Th>Course</Th>

                                        <Th>Location</Th>
                                        <Th>Time</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td>January </Td>
                                        <Td>7th - 29th, Sat &amp; Sun</Td>
                                        <Td>
                                             Young adults Stress free Exam - 8th
                                             - 10th Standard
                                        </Td>

                                        <Td>Indiranagar</Td>
                                        <Td>4:00 PM - 5:30 PM</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>March</Td>
                                        <Td>22nd - 31st</Td>
                                        <Td>Pranyama</Td>

                                        <Td>Indiranagar</Td>
                                        <Td>10:00 AM - 11:30 AM</Td>
                                   </Tr>
                                   <Tr>
                                        <Td>March</Td>
                                        <Td>22nd - 31st</Td>
                                        <Td>Chaitra Navaratri</Td>

                                        <Td>Online</Td>
                                        <Td>6:00 PM - 7:00 PM</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>April</Td>
                                        <Td>10th - 21st </Td>
                                        <Td>Ashtanga - Level 1</Td>

                                        <Td>Online</Td>
                                        <Td>
                                             7:00 AM - 8:30 AM / 6:00 AM - 7:30
                                             AM
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td>April</Td>
                                        <Td>10th - 21st</Td>
                                        <Td>Kids camp</Td>

                                        <Td>Indiranagar</Td>
                                        <Td>10:00 AM - 12:00 PM</Td>
                                   </Tr>
                                   <Tr>
                                        <Td>April</Td>
                                        <Td>10th - 21st</Td>
                                        <Td>Kids camp</Td>

                                        <Td>KR Puram</Td>
                                        <Td>10:00 AM - 12:00 PM</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>May</Td>
                                        <Td>8th - 12th </Td>
                                        <Td>Anthar Mouna Level - 1</Td>

                                        <Td>Indiranagar</Td>
                                        <Td>10:00 AM - 11:30 AM</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>June</Td>
                                        <Td>1st - 20th</Td>
                                        <Td>IDY Sadhana</Td>

                                        <Td>All</Td>
                                        <Td>All time</Td>
                                   </Tr>
                                   <Tr>
                                        <Td>June</Td>
                                        <Td>26th - 30th </Td>
                                        <Td>Anthar Mouna Level - 2</Td>

                                        <Td>Indiranagar</Td>
                                        <Td>10:00 AM - 11:30 AM</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>July</Td>
                                        <Td>3rd - 14th</Td>
                                        <Td>Advance Hata yoga</Td>

                                        <Td>KR Puram</Td>
                                        <Td>
                                             7:00 AM - 8:30 AM / 6:00 AM - 7:30
                                             AM
                                        </Td>
                                   </Tr>

                                   <Tr>
                                        <Td>August </Td>
                                        <Td>21st - 25th</Td>
                                        <Td>Shravana-Manana</Td>

                                        <Td>KR Puram</Td>
                                        <Td>6:00 PM - 7:00 PM</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>October </Td>
                                        <Td>15th - 24th </Td>
                                        <Td>Sharad Navaratri</Td>

                                        <Td>Online</Td>
                                        <Td>6:00 PM - 7:00 PM</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>November </Td>
                                        <Td>15th - 1st January</Td>
                                        <Td>Sankalpa Sadhana </Td>

                                        <Td>KR Puram</Td>
                                        <Td>6:00 PM - 7:00 PM (Sunday)</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>November </Td>
                                        <Td>15th - 1st January</Td>
                                        <Td>Sankalpa Sadhana</Td>

                                        <Td>Indiranagar</Td>
                                        <Td>6:00 PM - 7:00 PM ( Saturday)</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </TableContainer>
               </CoursesLayout>
               <ContactMore registerTo="short_course" />
          </>
     );
}

export default ShortCourses;
ShortCourses.Layout = HomeLayout;

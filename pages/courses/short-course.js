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
                                        <Th>Teacher</Th>
                                        <Th>Location</Th>
                                        <Th>Time</Th>
                                        <Th>Fee</Th>
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
                                        <Td>Aarti</Td>
                                        <Td>Indiranagar</Td>
                                        <Td>4:00 PM - 5:30 PM</Td>
                                        <Td>3000</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>February </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                   </Tr>

                                   <Tr>
                                        <Td>March</Td>
                                        <Td>22nd - 31st</Td>
                                        <Td>Pranyama</Td>
                                        <Td>Srinath</Td>
                                        <Td>Indiranagar</Td>
                                        <Td>10:00 AM - 11:30 AM</Td>
                                        <Td>2000</Td>
                                   </Tr>
                                   <Tr>
                                        <Td>March</Td>
                                        <Td>22nd - 31st</Td>
                                        <Td>Chaitra Navaratri</Td>
                                        <Td>Sharath</Td>
                                        <Td>Online</Td>
                                        <Td>6:00 PM - 7:00 PM</Td>
                                        <Td>900</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>April</Td>
                                        <Td>10th - 21st </Td>
                                        <Td>Ashtanga - Level 1</Td>
                                        <Td>Gayatri </Td>
                                        <Td>Online</Td>
                                        <Td>
                                             7:00 AM - 8:30 AM / 6:00 AM - 7:30
                                             AM
                                        </Td>
                                        <Td>2000</Td>
                                   </Tr>
                                   <Tr>
                                        <Td>April</Td>
                                        <Td>10th - 21st</Td>
                                        <Td>Kids camp</Td>
                                        <Td>Harsha</Td>
                                        <Td>Indiranagar</Td>
                                        <Td>10:00 AM - 12:00 PM</Td>
                                        <Td>2000</Td>
                                   </Tr>
                                   <Tr>
                                        <Td>April</Td>
                                        <Td>10th - 21st</Td>
                                        <Td>Kids camp</Td>
                                        <Td>Anjali</Td>
                                        <Td>KR Puram</Td>
                                        <Td>10:00 AM - 12:00 PM</Td>
                                        <Td>2000</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>May</Td>
                                        <Td>8th - 12th </Td>
                                        <Td>Anthar Mouna Level - 1</Td>
                                        <Td>Srinath</Td>
                                        <Td>Indiranagar</Td>
                                        <Td>10:00 AM - 11:30 AM</Td>
                                        <Td>1000</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>June</Td>
                                        <Td>1st - 20th</Td>
                                        <Td>IDY Sadhana</Td>
                                        <Td>Sharath</Td>
                                        <Td>All</Td>
                                        <Td>All time</Td>
                                        <Td>FREE</Td>
                                   </Tr>
                                   <Tr>
                                        <Td>June</Td>
                                        <Td>26th - 30th </Td>
                                        <Td>Anthar Mouna Level - 2</Td>
                                        <Td>Srinath</Td>
                                        <Td>Indiranagar</Td>
                                        <Td>10:00 AM - 11:30 AM</Td>
                                        <Td>1000</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>July</Td>
                                        <Td>3rd - 14th</Td>
                                        <Td>Advance Hata yoga</Td>
                                        <Td>Shreeram / Madhusudhan</Td>
                                        <Td>KR Puram</Td>
                                        <Td>
                                             7:00 AM - 8:30 AM / 6:00 AM - 7:30
                                             AM
                                        </Td>
                                        <Td>2000</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>August </Td>
                                        <Td>21st - 25th</Td>
                                        <Td>Shravana-Manana</Td>
                                        <Td>Shreeram Kasturi</Td>
                                        <Td>KR Puram</Td>
                                        <Td>6:00 PM - 7:00 PM</Td>
                                        <Td>1000</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>September</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                   </Tr>

                                   <Tr>
                                        <Td>October </Td>
                                        <Td>15th - 24th </Td>
                                        <Td>Sharad Navaratri</Td>
                                        <Td>Sharath</Td>
                                        <Td>Online</Td>
                                        <Td>6:00 PM - 7:00 PM</Td>
                                        <Td>900</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>November </Td>
                                        <Td>15th - 1st January</Td>
                                        <Td>Sankalpa Sadhana - </Td>
                                        <Td>Sharath</Td>
                                        <Td>KR Puram</Td>
                                        <Td>6:00 PM - 7:00 PM (Sunday)</Td>
                                        <Td>1500</Td>
                                   </Tr>

                                   <Tr>
                                        <Td>November </Td>
                                        <Td>15th - 1st January</Td>
                                        <Td>Sankalpa Sadhana</Td>
                                        <Td>Sharath</Td>
                                        <Td>Indiranagar</Td>
                                        <Td>6:00 PM - 7:00 PM ( Saturday)</Td>
                                        <Td>1500</Td>
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

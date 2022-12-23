import {
     Box,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Flex,
     Heading,
     TableContainer
} from '@chakra-ui/react';
import React from 'react';

const WorkShopTable = () => {
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
          <TableContainer my={10} px={10}>
               <Heading>Schedule</Heading>
               <Table variant="striped" border="1px solid #ddd" mt={6}>
                    <Thead>
                         <Tr>
                              <Th>Dates</Th>
                              <Th>Course</Th>
                              <Th>Teacher</Th>
                              <Th>Location</Th>
                              <Th>Time</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         <Tr>
                              <Td>Sat, Dec 3, 2022</Td>
                              <Td>Sound meditation</Td>
                              <Td>Aarthi</Td>
                              <Td>Indiranagar</Td>
                              <Td>10:00 AM - 12:00 PM</Td>
                         </Tr>
                         <Tr>
                              <Td>1st, 2nd January</Td>
                              <Td>Yoga ReTreat</Td>
                              <Td>Sharath</Td>
                              <Td></Td>
                              <Td></Td>
                         </Tr>

                         <Tr>
                              <Td>Sat, Jan 7, 2023</Td>
                              <Td>Women's care - Mental Heatlh </Td>
                              <Td>Aarthi</Td>
                              <Td>Kr puram</Td>
                              <Td>10:00 AM - 12:30 PM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sun, Jan 22, 2023</Td>
                              <Td>Yoga nidra Level - 1</Td>
                              <Td>Srinath</Td>
                              <Td>Indiranagar</Td>
                              <Td>9:00 AM - 11:00 AM</Td>
                         </Tr>

                         <Tr>
                              <Td>Sat, Feb 4, 2023</Td>
                              <Td>Therapy for Diabetic</Td>
                              <Td>Aarthi / Anjali</Td>
                              <Td>Indiranagar</Td>
                              <Td>10:00 AM - 12:30 PM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sat, Feb 25, 2023</Td>
                              <Td>Sound meditation</Td>
                              <Td>Aarthi</Td>
                              <Td>KR puram</Td>
                              <Td>5:00 PM - 7:00 PM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sat, Feb 11, 2023</Td>
                              <Td>Yoga excursion</Td>
                              <Td>Sharath</Td>
                              <Td></Td>
                              <Td></Td>
                         </Tr>

                         <Tr>
                              <Td>Sat, Mar 4, 2023</Td>
                              <Td>Women's care - Womens day special </Td>
                              <Td>Aarthi</Td>
                              <Td>Indiranagar</Td>
                              <Td>10:00 AM - 12:00 PM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sun, Mar 19, 2023</Td>
                              <Td>Yoga nidra Level - 2</Td>
                              <Td>Srinath</Td>
                              <Td>Indrianagar</Td>
                              <Td>9:00 AM - 11:00 AM</Td>
                         </Tr>

                         <Tr>
                              <Td>April</Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                         </Tr>

                         <Tr>
                              <Td>20,21st May</Td>
                              <Td>Madhumeham</Td>
                              <Td>Anjali</Td>
                              <Td>KR Puram</Td>
                              <Td>10:00 AM - 11:30 AM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sat, May 13, 2023</Td>
                              <Td>Yoga excursion</Td>
                              <Td>Sharath</Td>
                              <Td></Td>
                              <Td></Td>
                         </Tr>

                         <Tr>
                              <Td>4th, 5th june</Td>
                              <Td>Nāda Yoga</Td>
                              <Td>Shreeram Kasturi</Td>
                              <Td>KR Puram</Td>
                              <Td>10:00 AM - 11:00 AM</Td>
                         </Tr>

                         <Tr>
                              <Td>1st &amp; 2nd July</Td>
                              <Td>Chakra dhāra</Td>
                              <Td>Shreeram Kasturi</Td>
                              <Td>KR Puram</Td>
                              <Td>10:00 AM - 11:00 AM</Td>
                         </Tr>
                         <Tr>
                              <Td>15th , 16th July</Td>
                              <Td>Yoga ReTreat</Td>
                              <Td>Sharath</Td>
                              <Td></Td>
                              <Td></Td>
                         </Tr>

                         <Tr>
                              <Td>Sat, Aug 5, 2023</Td>
                              <Td>Pranic energisation technique</Td>
                              <Td>Madhusudan </Td>
                              <Td>Indiranagar</Td>
                              <Td>10:00 AM - 11:00 AM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sat, Aug 19, 2023</Td>
                              <Td>Yoga excursion</Td>
                              <Td>Sharath</Td>
                              <Td></Td>
                              <Td></Td>
                         </Tr>

                         <Tr>
                              <Td>Sat, Sep 9, 2023</Td>
                              <Td>Cyclic meditation </Td>
                              <Td>Madhusudan</Td>
                              <Td>Indiranagar</Td>
                              <Td>10:00 AM - 11:00 AM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sat, Sep 16, 2023</Td>
                              <Td>Om meditation</Td>
                              <Td>Madhusudan </Td>
                              <Td>KR Puram</Td>
                              <Td>4:00 PM - 5:00 PM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sat, Sep 23, 2023</Td>
                              <Td>Power yoga</Td>
                              <Td>GayaTri</Td>
                              <Td>Indiranagar</Td>
                              <Td>10:00 Am - 11:00 AM</Td>
                         </Tr>

                         <Tr>
                              <Td>Sun, Oct 15, 2023</Td>
                              <Td>Back bending </Td>
                              <Td>Harsha</Td>
                              <Td>Indiranagar</Td>
                              <Td>10:00 AM - 11:00 AM</Td>
                         </Tr>
                         <Tr>
                              <Td>Sun, Oct 29, 2023</Td>
                              <Td>MSRT</Td>
                              <Td>Madhusudhan</Td>
                              <Td>KR puram</Td>
                              <Td>10:00 AM - 10:30 AM</Td>
                         </Tr>

                         <Tr>
                              <Td>Any Weekend</Td>
                              <Td>3- shat kriyas</Td>
                              <Td>Any senior Teacher </Td>
                              <Td>Both</Td>
                              <Td>7:00 AM - 9:00 AM</Td>
                         </Tr>

                         <Tr>
                              <Td>Sun, Nov 12, 2023</Td>
                              <Td>palm/arm balance </Td>
                              <Td>GayaTri </Td>
                              <Td>KR Puram</Td>
                              <Td>10:00 AM - 11:00 AM</Td>
                         </Tr>
                         <Tr>
                              <Td>4, 5 November 2023</Td>
                              <Td>Yoga Charitam</Td>
                              <Td>Shreeram Kasturi</Td>
                              <Td>Indiranagar</Td>
                              <Td>10:00 AM - 11:00 AM</Td>
                         </Tr>

                         <Tr>
                              <Td>Sun, Dec 10, 2023</Td>
                              <Td>Shīrshābhyasä</Td>
                              <Td>Shreeram Kasturi</Td>
                              <Td>KR Puram</Td>
                              <Td>9:00 AM - 10:00 AM</Td>
                         </Tr>
                    </Tbody>
               </Table>
          </TableContainer>
     );
};

export default WorkShopTable;

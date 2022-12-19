import {
     Box,
     Container,
     Heading,
     Stack,
     Table,
     TableContainer,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr
} from '@chakra-ui/react';

import React from 'react';

function Schedule() {
     return (
          <Container maxW="90vw" position="relative">
               <TableContainer
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                    bg="white"
               >
                    <Table
                         variant="striped"
                         colorScheme="gray"
                         width="max-content"
                    >
                         <Thead>
                              <Tr>
                                   <Th>Time</Th>
                                   <Th>Event</Th>
                              </Tr>
                         </Thead>
                         <Tbody>
                              <Tr>
                                   <Td>5:00 AM - 7:00 AM</Td>
                                   <Td>Marathon</Td>
                              </Tr>
                              <Tr>
                                   <Td>7:00 AM - 9:00 AM </Td>
                                   <Td>Yogathon</Td>
                              </Tr>
                              <Tr>
                                   <Td>9:00 AM - 10:00 AM</Td>
                                   <Td>
                                        Discourse of Swami vivekananda by
                                        Athayog Founder
                                   </Td>
                              </Tr>
                              <Tr>
                                   <Td>11:00 AM - 1:00 PM </Td>
                                   <Td>
                                        Talent showcasing or Competition of
                                        Residing Swami Vivekananda&apos;s Quote
                                        and Explaining in their own perspective.
                                   </Td>
                              </Tr>
                              <Tr>
                                   <Td>3:00: PM - 4:00 PM</Td>
                                   <Td>Yoga for Differently abled people</Td>
                              </Tr>
                              <Tr>
                                   <Td>4:00 PM - 5:00 PM</Td>
                                   <Td>
                                        Yoga classes for Youth empowerment
                                        employees
                                   </Td>
                              </Tr>
                              <Tr>
                                   <Td>5:00 PM - 6:00 PM</Td>
                                   <Td>
                                        Chanting and special pooja for Swami
                                        vivekananda
                                   </Td>
                              </Tr>
                              <Tr>
                                   <Td>6:00 PM - 8:00 PM </Td>
                                   <Td>Cultural activities.</Td>
                              </Tr>
                         </Tbody>
                    </Table>
               </TableContainer>
          </Container>
     );
}

export default Schedule;

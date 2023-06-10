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
          <Container py={10} maxW="90vw" id="shedule">
               <Stack spacing={6}>
                    <Heading as="h4" fontSize="2xl" textDecor="underline">
                         Programme Schedule
                    </Heading>
                    <Box fontSize="xl">
                         <Text>Date: 21 Jun 2023 | Wednesday</Text>
                         <Text>Time: 6.00am - 8.30am</Text>
                         <Text>Location: Ramakrishna Math, Halasur</Text>
                    </Box>
                    <Box>
                         <TableContainer
                              border="1px solid"
                              borderColor="gray.200"
                              boxShadow="sm"
                              bg="white"
                         >
                              <Table variant="striped" colorScheme="gray">
                                   <Thead>
                                        <Tr>
                                             <Th>Time</Th>
                                             <Th>Event</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td>5:45 AM</Td>
                                             <Td>Registrations Open </Td>
                                        </Tr>
                                        <Tr>
                                             <Td>6:00 AM - 6:30 AM </Td>
                                             <Td>Opening Ceremony</Td>
                                        </Tr>
                                        <Tr>
                                             <Td>6:30 AM - 7:45 AM</Td>
                                             <Td>Special Yoga Practice</Td>
                                        </Tr>
                                        <Tr>
                                             <Td>7:45 AM - 8:00 AM </Td>
                                             <Td>Closing Ceremony</Td>
                                        </Tr>
                                        <Tr>
                                             <Td>8:00 AM - 8:30 AM </Td>
                                             <Td>Breakfast</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </TableContainer>
                    </Box>
               </Stack>
               <Text fontSize="xl" mt={10}>
                    Register now and celebrate International Day of Yoga with
                    us!
               </Text>
          </Container>
     );
}

export default Schedule;

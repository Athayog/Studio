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
          <Container py={10} maxW="90vw">
               <Stack spacing={6}>
                    <Heading as="h4" fontSize="2xl" textDecor="underline">
                         Programme Schedule
                    </Heading>
                    <Box fontSize="xl">
                         <Text>Date: June 18th, 2023 | Sunday</Text>
                         <Text>Time: 5.30 AM - 9:00 AM</Text>
                         <Text>
                              Location: Defense Colony Ground, Indiranagar,
                              Bengaluru
                         </Text>
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
                                             <Td>5:30 AM</Td>
                                             <Td>Registrations Open </Td>
                                        </Tr>
                                        <Tr>
                                             <Td>5:30 AM - 6:30 AM </Td>
                                             <Td>Pooja & Rituals</Td>
                                        </Tr>
                                        <Tr>
                                             <Td>6:30 AM - 6:45 AM</Td>
                                             <Td>Opening Ceremony</Td>
                                        </Tr>
                                        <Tr>
                                             <Td>7:00 AM - 8:30 AM </Td>
                                             <Td>
                                                  Special Yoga Session by
                                                  Sharath Basavaraju & Team
                                             </Td>
                                        </Tr>
                                        <Tr>
                                             <Td>8:30 AM - 8:45 AM </Td>
                                             <Td>Closing Ceremony</Td>
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

import {
     Box,
     Divider,
     Flex,
     Heading,
     Table,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     HStack,
     Badge,
     TableContainer,
     Tr,
     ListIcon,
     ListItem,
     List
} from '@chakra-ui/react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import React from 'react';
function Schedule() {
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
          <div>
               <Flex
                    margin="auto"
                    padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    width="100vw"
                    bg="primaryWhite"
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width={{ base: '95%', md: '90%', lg: '90%' }}
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: '2xl', md: '3xl' }}
                         >
                              AthaYog Offline Class June 2023 (Indiranagar)
                         </Heading>
                         <Box
                              overflowX="auto"
                              width="100%"
                              boxShadow="base"
                              rounded="lg"
                              mt={10}
                         >
                              <Table
                                   variant="simple"
                                   size="sm"
                                   bg="white"
                                   colorScheme="aygreen"
                                   className="scheduleTable"
                              >
                                   <Thead>
                                        <Tr>
                                             <Th bg="aygreen.200">Time</Th>
                                             <Th bg="aygreen.200">Monday</Th>
                                             <Th bg="aygreen.200">Tuesday</Th>
                                             <Th bg="aygreen.200">Wednesday</Th>
                                             <Th bg="aygreen.200">Thursday</Th>
                                             <Th bg="aygreen.200">Friday</Th>
                                             <Th bg="aygreen.200">Saturday</Th>
                                             <Th bg="aygreen.200">Sunday</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Text width="150px">
                                                       6.00 AM - 7.00 AM
                                                  </Text>
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7.00 AM - 8.00 AM
                                             </Td>
                                             <Td>
                                                  Ashtanga / Transcending
                                                  Transitions
                                             </Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>
                                                  Ashtanga / Transcending
                                                  Transitions
                                             </Td>

                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being </Td>
                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>
                                                  Ashtanga / Transcending
                                                  Transitions
                                             </Td>

                                             <Td>Rhythm Of Being </Td>
                                             <Td>Transcending Transitions</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  9:00 AM - 10:00 AM
                                                  (Women&apos;s Batch)
                                             </Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>
                                                  Ashtanga / Transcending
                                                  Transitions
                                             </Td>
                                             <Td></Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  11:00 AM - 4:00 PM
                                             </Td>
                                             <Td>Shikshanapada</Td>
                                             <Td>Shikshanapada</Td>
                                             <Td>Shikshanapada</Td>
                                             <Td>Shikshanapada</Td>
                                             <Td>Shikshanapada</Td>
                                             <Td>Shikshanapada</Td>
                                             <Td>Shikshanapada</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  4:00 PM - 5:00 PM
                                             </Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td></Td>
                                             <Td></Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  5:00 PM - 6:00 PM
                                             </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>
                                                  Sivanandha / Universal Harmony
                                             </Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7:00 PM - 8:00 PM
                                             </Td>
                                             <Td>Inner World</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td></Td>
                                             <Td></Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  8:00 PM - 9:00 PM
                                             </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Inner World</Td>
                                             <Td></Td>
                                             <Td></Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>
                    </Flex>
               </Flex>
          </div>
     );
}

export default Schedule;

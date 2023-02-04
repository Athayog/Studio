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
                              AthaYog Offline Class February 2023 (Indiranagar)
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
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Universal Harmony </Td>
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
                                                  7.00 AM - 8.00 AM
                                             </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
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
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony </Td>
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
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being </Td>
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
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
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
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
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
                                                  7:00 PM - 8:00 PM
                                             </Td>
                                             <Td>Deep Space</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Inner World</Td>
                                             <Td>Transcending Transitions</Td>

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
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Inner World</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Deep Space</Td>
                                             <Td></Td>
                                             <Td></Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>
                    </Flex>
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width={{ base: '95%', md: '90%', lg: '90%' }}
                         mt={20}
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: '2xl', md: '3xl' }}
                         >
                              AthaYog Offline Class February 2023 (KR Puram)
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
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
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
                                                  7.00 AM - 8.00 AM
                                             </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>
                                                  Sivananda / Universal Harmony
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
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>
                                                  Sivananda / Universal Harmony
                                             </Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Universal Harmony</Td>
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
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Rhythm Of Being </Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being </Td>
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
                                                  11:00 AM - 4:00 AM
                                             </Td>
                                             <Td></Td>
                                             <Td> </Td>
                                             <Td></Td>
                                             <Td> </Td>
                                             <Td></Td>
                                             <Td>Shikshanapada </Td>
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
                                                  5:00 PM - 6:00 PM
                                             </Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td>Kids Yoga</Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
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
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
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
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Inner World</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
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
                                             <Td>Deep Space</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Inner World</Td>
                                             <Td>Transcending Transitions</Td>

                                             <Td> - </Td>
                                             <Td> - </Td>
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
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Inner World</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Deep Space</Td>

                                             <Td> - </Td>
                                             <Td> - </Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>

                         <Box
                              mt={10}
                              textAlign="left"
                              width="100%"
                              boxShadow="base"
                              bg="white"
                              rounded="md"
                              p={3}
                         >
                              <Box>
                                   <Text
                                        fontWeight="medium"
                                        textTransform="uppercase"
                                   >
                                        Timings Information
                                   </Text>

                                   <Flex gap={10} my={2} direction="row">
                                        <Flex direction="column" gap={1}>
                                             <Box>Monday - Friday</Box>
                                             <Box>Saturday - Sunday</Box>
                                        </Flex>
                                        <Flex direction="column" gap={1}>
                                             <Box>06:00 AM - 09:00 PM</Box>
                                             <Box>07:00 AM - 08:00 PM</Box>
                                        </Flex>
                                   </Flex>
                              </Box>
                              <List mt={3}>
                                   <ListItem>
                                        <ListIcon
                                             as={BsFillArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Note: 18th (Maha Shivaratari) classes
                                        will be happening from 6 AM - 10 AM (No
                                        evening classes)
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={BsFillArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Exclusive Women&apos;s Batch Time - 9:00
                                        AM to 10:00 AM
                                   </ListItem>

                                   <ListItem>
                                        <ListIcon
                                             as={BsFillArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Athayog living will be closed on 2nd
                                        Saturday of every Month.
                                   </ListItem>
                              </List>

                              <Badge
                                   whiteSpace="pre-wrap"
                                   fontWeight="medium"
                                   mt={3}
                              >
                                   Note: 108 Surya Namaskara will be practiced
                                   on 1st Saturday of every month, 7am - 9am
                                   batch.{' '}
                              </Badge>
                         </Box>
                    </Flex>
               </Flex>
          </div>
     );
}

export default Schedule;

import {
     Badge,
     Box,
     Button,
     Flex,
     Heading,
     List,
     ListIcon,
     ListItem,
     Table,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr
} from '@chakra-ui/react';
import { BiRightArrow } from 'react-icons/bi';

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
                              AthaYog Group Class April 2024 (Indiranagar)
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
                                        <Tr  >
                                             <Td
                                                  bg="#dee9a4"
                                                  colSpan='8'
                                                  className='seperation'
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  fontWeight='bold'

                                                  textAlign='center'
                                                  paddingLeft="10px"
                                             >

                                                  Morning Batches

                                             </Td>

                                        </Tr>
                                        <Tr>
                                             <Td

                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Box py={2}>
                                                       <Badge bg='green.200' pl={0} mb={1}>New Batch</Badge>
                                                       <Text>
                                                            5.00 AM - 6.00 AM

                                                       </Text>


                                                  </Box>

                                             </Td>
                                             <Td bg="yellow.100">Universal Harmony</Td>
                                             <Td bg="yellow.100">Advance Hatha Yoga</Td>
                                             <Td bg="yellow.100">Hatha Pradipika</Td>
                                             <Td bg="yellow.100">Transcending Transition</Td>
                                             <Td bg="yellow.100">Rhythm of Being</Td>
                                             <Td bg="yellow.100">Power Vinyasa</Td>
                                             <Td bg="yellow.100">Transcending Transition</Td>

                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  6.00 AM - 7.00 AM
                                             </Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Hatha Pradipika</Td>
                                        </Tr>


                                        <Tr>
                                             <Td
                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7:00 AM - 8:00 AM
                                             </Td>
                                             <Td>Deep Space </Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Rythm Of Being</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                                  bg="#eff3d8"
                                             >
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Rythm Of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Power Vinyasa</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                                  bg="#eff3d8"
                                             >
                                                  9:00 AM - 10:00 AM
                                             </Td>
                                             <Td bg="#a9d58b">
                                                  Special Yoga for Women
                                             </Td>
                                             <Td bg="#a9d58b">Hatha Pradipika    </Td>
                                             <Td bg="#a9d58b">
                                                  Universal Harmony
                                             </Td>
                                             <Td bg="#a9d58b" >
                                                  Advance Hatha Yoga
                                             </Td>
                                             <Td bg="#a9d58b">
                                                  Rhythm of Being
                                             </Td>
                                            



                                             <Td>Power Vinyasa</Td>
                                             <Td >Deep Space</Td>



                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Text width="150px">
                                                       10.00 PM - 11.00 PM
                                                  </Text>
                                             </Td>
                                             <Td >Rhythm Of Being</Td>
                                             <Td >
                                                  Power Vinyasa
                                             </Td>
                                             <Td >Deep Space</Td>
                                             <Td >Transcending Transcending</Td>
                                             <Td >Universal Harmony</Td>
                                             <Td >Hatha Pradipika</Td>
                                             <Td >Advance Hatha Yoga</Td>

                                        </Tr>
                                        <Tr  >
                                             <Td
                                                  bg="#dee9a4"
                                                  colSpan='8'
                                                  className='seperation'
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  fontWeight='bold'

                                                  textAlign='center'
                                                  paddingLeft="10px"
                                             >

                                                  Evening Batches

                                             </Td>

                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Text width="150px">
                                                       4.00 PM - 5.00 PM
                                                  </Text>
                                             </Td>
                                             <Td >Universal Harmony</Td>
                                             <Td >Deep Space</Td>
                                             <Td >
                                                  Advance Hatha Yoga
                                             </Td>
                                             <Td >Inner World</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td >Rhythm Of Being</Td>

                                             <Td >
                                                  Power Vinyasa
                                             </Td>

                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  5:00 PM - 6:00 PM
                                             </Td>
                                             <Td>Transcending Transition</Td>
                                             <Td >Rhythm Of Being</Td>
                                             <Td >Power Vinyasa</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Transcending Transition</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td >Rhythm Of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Universal Harmony</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7:00 PM - 8:00 PM
                                             </Td>
                                             <Td >Rhythm Of Being</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td >Inner World    </Td>

                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="#eff3d8"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  8:00 PM - 9:00 PM
                                             </Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Inner World</Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Hatha Pradipika</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                              <Box width="100%">
                                   <a
                                        href="https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/april_24.jpg?alt=media&token=4d3ce7b6-6e7b-4b1a-97c7-52d871db5517"
                                        downlaod="true"
                                        target="_blank"
                                   >

                                        <Button borderTopLeftRadius={0} borderTopRightRadius={0} width="100%" colorScheme='blue'>Download Schedule</Button>
                                   </a>
                              </Box>
                         </Box>

                    </Flex>

                    <Box
                         bg="white"
                         mt={5}
                         overflow="hidden"
                         boxShadow="base"
                         rounded="md"
                         width={{ base: '95%', md: '90%', lg: '90%' }}
                    >
                         <List>
                              <ListItem bg="#a9d58b" p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="gray.500"
                                   />
                                   Indicates only WOMENS BATCH ( Monday to
                                   Friday )
                              </ListItem>
                              <ListItem p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="gray.500"
                                   />
                                   Indicates Group Classes Open to all above age of 14
                              </ListItem>
                              <ListItem p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   Late comers will not be allowed beyond 5th
                                   minute after the class start time
                              </ListItem>
                              <ListItem bg="yellow.100" p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   5AM Group class will be effective from April 1st. Any of live subscription members can access this batch <Badge bg='green.200'>New Batch</Badge>
                              </ListItem>
                              <ListItem p={2} bg="blue.200">
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   Satsung & Lecture by Principal Teacher
                                   SHARATH.B on Yoga Sutras & Yoga Philosophy
                                   every Saturday 10.00am to 11.30am
                              </ListItem>
                              <ListItem p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   Special Yoga Session on 1st Saturday of the
                                   month - 108 Surya Namaskara ( 7AM to 9AM )*
                              </ListItem>
                         </List>
                    </Box>
               </Flex>
          </div>
     );
}

export default Schedule;

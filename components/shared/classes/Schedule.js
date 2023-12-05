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
     List,
     UnorderedList,
     Button
} from '@chakra-ui/react';
import { BsDownload, BsFillArrowRightCircleFill } from 'react-icons/bs';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import ScheduleImage from 'public/schedule.jpg'
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
                              AthaYog Group Class December 2023 (Indiranagar)
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
                                                       5.00 AM - 6.00 AM
                                                  </Text>
                                             </Td>
                                             <Td bg="yellow.100">
                                                  NEW BATCH COMING SOON
                                             </Td>
                                             <Td bg="yellow.100">-</Td>
                                             <Td bg="yellow.100">-</Td>
                                             <Td bg="yellow.100">-</Td>
                                             <Td bg="yellow.100">-</Td>
                                             <Td bg="yellow.100">-</Td>
                                             <Td bg="yellow.100">-</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  6.00 AM - 7.00 AM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7:00 AM - 8:00 AM
                                             </Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Deep Space </Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                                  bg="aygreen.100"
                                             >
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Ashtanga Yoga</Td>
                                             <Td>Deep Space</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                                  bg="aygreen.100"
                                             >
                                                  9:00 AM - 10:00 AM
                                             </Td>
                                             <Td bg="orange.100">
                                                  Special Yoga for Women
                                             </Td>
                                             <Td bg="orange.100">
                                                  Universal Harmony
                                             </Td>
                                             <Td bg="orange.100">Rhythm of Being </Td>
                                             <Td bg="orange.100">
                                                  Advance Hatha Yoga
                                             </Td>
                                             <Td bg="orange.100">
                                                  Transcending Transition
                                             </Td>
                                             <Td >
                                                  Deep Space
                                             </Td>



                                             <Td>Hatha Pradipika</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Text width="150px">
                                                       10.00 PM - 11.00 PM
                                                  </Text>
                                             </Td>
                                             <Td bg="yellow.100">
                                                  Universal Harmony
                                             </Td>
                                             <Td bg="yellow.100">Hatha Pradipika</Td>
                                             <Td bg="yellow.100">Transcending Transcending</Td>
                                             <Td bg="yellow.100">Rhythm Og Being</Td>
                                             <Td bg="yellow.100">Deep Space</Td>
                                             <Td bg="yellow.100">Inner World</Td>
                                             <Td bg="yellow.100">Ashtanga Yoga</Td>
                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Text width="150px">
                                                       4.00 PM - 5.00 PM
                                                  </Text>
                                             </Td>
                                             <Td bg="yellow.100">
                                                  Advance Hatha Yoga
                                             </Td>
                                             <Td bg="yellow.100">Deep Space</Td>
                                             <Td bg="yellow.100">Ashtanga Yoga</Td>
                                             <Td bg="yellow.100">Inner World</Td>
                                             <Td bg="yellow.100">Universal Harmony</Td>
                                             <Td bg="yellow.100">Power Vinyasa</Td>
                                             <Td bg="yellow.100">Hatha Pradipika</Td>
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
                                             <Td>Ashtanga Yoga</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Inner World</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Deep Space</Td>
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
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Ashtanga Yoga</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Inner World</Td>
                                             <Td>Power Vinyasa</Td>
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
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Inner World</Td>
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
                                             <Td>Rhythm of Being</Td>
                                             <Td>Advance Hatha Yoga</Td>
                                             <Td>Hatha Pradipika</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Inner World</Td>
                                             <Td>Power Of Vinyasa</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                              <Box width="100%">
                              <a
                         href="https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/december_schedule.jpg?alt=media&token=cc6e2064-b57c-4490-9495-50eb0f6001cf"
                         downlaod="true"
                         target="_blank"
                    >

                                   <Button borderTopLeftRadius={0} borderTopRightRadius={0} width="100%" colorScheme='blue'>Download Schedule</Button>
                            </a>
                              </Box>
                         </Box>

                    </Flex>
<<<<<<< HEAD
                    <Flex

                         mt={5}
                         overflow="hidden"


                         rounded="md"
                         width={{ base: '95%', md: '90%', lg: '90%' }}
                         justifyContent='flex-start'


                    >
                         <a
                              href="https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/schedule.jpg?alt=media&token=b7a78cfd-1bb8-4694-9d67-36c71ec2333c"
                              downlaod="true"
                              target="_blank"
                            
                              >
                              <Button colorScheme='blue' shadow='md' > Download Schedule</Button>
                         </a>

                    </Flex>
=======
>>>>>>> master

                    <Box
                         bg="white"
                         mt={5}
                         overflow="hidden"
                         boxShadow="base"
                         rounded="md"
                         width={{ base: '95%', md: '90%', lg: '90%' }}
                    >
                         <List>
                              <ListItem bg="orange.100" p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="gray.500"
                                   />
                                   Indicates only WOMENS BATCH ( Monday to
                                   Friday )
                              </ListItem>
                              <ListItem bg="yellow.100" p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="gray.500"
                                   />
                                   10 AM and 4 PM will be new batches effective from December 1st 2023
                              </ListItem>
                              <ListItem p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   Late comers will not be allowed beyond 5th
                                   minute after the class start time
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

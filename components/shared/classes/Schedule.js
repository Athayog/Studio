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
     UnorderedList
} from '@chakra-ui/react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
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
                              AthaYog Offline Class September 2023 (Indiranagar)
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
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Advance Hata Yoga</Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Transcending Transition </Td>
                                             <Td>Rhythm of Being</Td>
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
                                             <Td>Advance Hata Yoga</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>
                                                  Iyengar Yoga - Asana with
                                                  props
                                             </Td>
                                             <Td>Rhythm of Being</Td>
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
                                             <Td>Advance Hata Yoga</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Power Vinyasa</Td>
                                             <Td>Ashtanga Yoga</Td>
                                             <Td>Transcending Transition</Td>
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
                                             <Td bg="pink.100">
                                                  Special Yoga for Women{' '}
                                             </Td>
                                             <Td bg="pink.100">
                                                  Power Vinyasa
                                             </Td>
                                             <Td bg="pink.100">
                                                  Iyengar Yoga - Asana with
                                                  props
                                             </Td>
                                             <Td bg="pink.100">
                                                  Advance Hata Yoga
                                             </Td>
                                             <Td bg="pink.100">
                                                  Universal Harmony
                                             </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>
                                                  {' '}
                                                  Deep Space (Pranayama
                                                  intensive)
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
                                                  10:00 AM - 11:00 AM
                                             </Td>
                                             <Td bg="yellow.100">
                                                  PRENATAL YOGA - Week 4 - 15
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  PRENATAL YOGA - Week 4 - 15
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  PRENATAL YOGA - Week 4 - 15
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  PRENATAL YOGA - Week 4 - 15
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  PRENATAL YOGA - Week 4 - 15
                                             </Td>
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
                                                  11:00 AM - 12:00 PM
                                             </Td>
                                             <Td bg="yellow.100">
                                                  POSTNATAL YOGA - ONLINE
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  POSTNATAL YOGA - ONLINE
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  POSTNATAL YOGA - ONLINE
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  POSTNATAL YOGA - ONLINE
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  POSTNATAL YOGA - ONLINE
                                             </Td>
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
                                             <Td bg="yellow.100">
                                                  PRENATAL YOGA - Week 16 - 30
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  PRENATAL YOGA - Week 16 - 30
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  PRENATAL YOGA - Week 16 - 30
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  PRENATAL YOGA - Week 16 - 30
                                             </Td>
                                             <Td bg="yellow.100">
                                                  {' '}
                                                  PRENATAL YOGA - Week 16 - 30
                                             </Td>
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
                                             <Td>Power Vinyasa</Td>
                                             <Td>
                                                  Iyengar Yoga - Asana with
                                                  props
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Ashtanga Yoga</Td>
                                             <Td>Advance Hata Yoga</Td>
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
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Advance Hata Yoga</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>
                                                  Iyengar Yoga - Asana with
                                                  props
                                             </Td>
                                             <Td>Ashtanga Yoga</Td>
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
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>
                                                  Iyengar Yoga - Asana with
                                                  props
                                             </Td>
                                             <Td>Advance Hata Yoga</Td>
                                             <Td>Inner World</Td>
                                             <Td>Rhythm of Being</Td>
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
                                             <Td>
                                                  Iyengar Yoga - Asana with
                                                  props
                                             </Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Transcending Transitions</Td>
                                             <Td>Inner World</Td>
                                             <Td>Rhythm Of Being</Td>
                                             <Td>Cyclic Meditation</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
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
                              <ListItem bg="pink.100" p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   Indicates only WOMENS BATCH ( Monday to
                                   Friday )
                              </ListItem>
                              <ListItem bg="yellow.100" p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   Indicated Prenatal and Postnatal Batch (
                                   Monday to Friday )
                              </ListItem>
                              <ListItem p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   Indicates Group Classes Open to all above age
                                   of 14
                              </ListItem>
                              <ListItem p={2}>
                                   <ListIcon
                                        as={BiRightArrow}
                                        color="green.500"
                                   />
                                   Special Yoga Session on 1st Saturday of the
                                   month - 108 Surya Namaskara ( 7AM to 9AM )
                              </ListItem>
                         </List>
                    </Box>
               </Flex>
          </div>
     );
}

export default Schedule;

import {
     Box,
     Flex,
     Grid,
     Heading,
     List,
     ListIcon,
     ListItem,
     Text
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CreativeTwo from 'public/TTC.png';
import CreativeOne from 'public/navratri.png';
import CreativeThree from 'public/RPYT.png';
import CreativeFour from 'public/Anniversary.png';
import CreativeFive from 'public/Anniversary2.png';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { v4 as uuidv4 } from 'uuid';
SwiperCore.use([Navigation, Pagination]);

function UpcomingCourses() {
     const upcomingData = [
          {
               id: '4',
               url: 'https://www.instagram.com/p/Ci-L8bIJ_2C/',
               alt: 'Anniversary Celebration',
               title: 'Anniversary Celebration',
               img: CreativeFour,
               timings: '10am - 1pm',
               type: 'Offline (KR.Puram)',
               duration: [
                    '10:00 AM - 11:00 AM - Special Yoga Education Session',
                    '11:00 AM - 11:30 AM - Journey Of Athayog Living',
                    '11:30 AM - 12:00 PM - Talent Showcasing',
                    '12:00 PM - 12:30 PM - Celebration',
                    '12:30 PM Onwards - Refreshments'
               ]
          },
          {
               id: '1',
               url: 'https://forms.gle/6nEeibCFwVzi3H6H9',
               alt: 'Navaratri Sadhana',
               img: CreativeOne,
               title: 'Navaratri Sadhana',
               timings: ' 6 - 7pm',
               type: 'Online',
               duration: ['September 26th to October 4th']
          },
          {
               id: '2',
               url: 'https://athayogliving.com/courses/shikshana/ryt-200-course',
               alt: 'Teacher Training Program',
               title: 'Traditional Hatha Yoga',
               img: CreativeTwo,
               timings: '6am - 8am (Online) / 11am - 4pm (Offline)',
               type: 'Online / Offline',
               duration: [
                    'October 3rd for Weekday (Offline)',
                    'September 1st Weekday (Online)'
               ]
          },
          {
               id: '3',
               url: 'https://athayogliving.com/courses/shikshana/rpyt-course',
               alt: 'RPYT Course',
               title: 'RPYT Course',
               img: CreativeThree,
               timings: '11am - 4pm',
               type: 'Offline',
               duration: ['October 3rd to 28th']
          }
     ];

     return (
          <Box py={10} maxW="90vw" margin="0 auto">
               <Heading
                    fontWeight="medium"
                    display="flex"
                    gap={5}
                    fontSize={['2xl', '3xl']}
               >
                    Our Upcoming Events & Courses <BsArrowRightCircleFill />
               </Heading>
               <Grid
                    mt={6}
                    justifyContent="flex-start"
                    gap={10}
                    gridTemplateColumns=" repeat(auto-fit, minmax(250px, 1fr));"
               >
                    {upcomingData.map(
                         ({
                              id,
                              url,
                              alt,
                              img,
                              timings,
                              duration,
                              title,
                              type
                         }) => {
                              return (
                                   <Link
                                        href={url}
                                        key={id}
                                        passHref
                                        target="_blank"
                                   >
                                        <a
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             <Flex
                                                  border="1px solid"
                                                  cursor="pointer"
                                                  borderColor="gray.300"
                                                  flexDir="column"
                                                  boxShadow="sm"
                                             >
                                                  <Box
                                                       display="block"
                                                       height="100%"
                                                       width="100%"
                                                  >
                                                       <Image
                                                            src={img}
                                                            alt={alt}
                                                            height="100%"
                                                            width="100%"
                                                            layout="responsive"
                                                       />
                                                  </Box>
                                                  <Box
                                                       p={5}
                                                       borderTop="1px solid"
                                                       borderColor="gray.300"
                                                       bg="green.50"
                                                       minH="220px"
                                                  >
                                                       <Flex gap={2}>
                                                            <Text
                                                                 fontWeight="bold"
                                                                 fontSize="xl"
                                                                 textColor="aygreen.600"
                                                            >
                                                                 {title}
                                                            </Text>
                                                       </Flex>
                                                       <Flex gap={2}>
                                                            <Text
                                                                 fontWeight="medium"
                                                                 textDecor="underline"
                                                            >
                                                                 Timings:
                                                            </Text>
                                                            <Text
                                                                 fontWeight="normal"
                                                                 textDecor="none"
                                                            >
                                                                 {timings}
                                                            </Text>
                                                       </Flex>
                                                       <Flex gap={2}>
                                                            <Text
                                                                 fontWeight="medium"
                                                                 textDecor="underline"
                                                            >
                                                                 Type:
                                                            </Text>
                                                            <Text
                                                                 fontWeight="normal"
                                                                 textDecor="none"
                                                            >
                                                                 {type}
                                                            </Text>
                                                       </Flex>
                                                       <Flex
                                                            gap={1}
                                                            mt={5}
                                                            flexDirection="column"
                                                       >
                                                            <Text
                                                                 fontWeight="medium"
                                                                 textDecor="underline"
                                                            >
                                                                 Batch Details
                                                            </Text>
                                                            <List>
                                                                 {duration?.map(
                                                                      (
                                                                           items,
                                                                           idx
                                                                      ) => {
                                                                           return (
                                                                                <ListItem
                                                                                     key={
                                                                                          idx
                                                                                     }
                                                                                >
                                                                                     <ListIcon
                                                                                          as={
                                                                                               MdCheckCircle
                                                                                          }
                                                                                          color="green.500"
                                                                                     />
                                                                                     {
                                                                                          items
                                                                                     }
                                                                                </ListItem>
                                                                           );
                                                                      }
                                                                 )}
                                                            </List>
                                                       </Flex>
                                                  </Box>
                                             </Flex>
                                        </a>
                                   </Link>
                              );
                         }
                    )}
               </Grid>
          </Box>
     );
}

export default UpcomingCourses;

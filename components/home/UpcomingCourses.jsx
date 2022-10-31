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
import Image from 'next/image';
import Link from 'next/link';
import CreativeOne from 'public/creative_one.png';
import CreativeTwo from 'public/ttc_nov.png';
import CreativeThree from 'public/Course5.jpeg';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
SwiperCore.use([Navigation, Pagination]);

function UpcomingCourses() {
     const upcomingData = [
          {
               id: '1',
               url: 'https://forms.gle/HWSamMc1wxhXMzeeA',
               alt: 'Advance Yoga Sadhana',
               img: CreativeOne,
               title: 'Advance Yoga Sadhana',
               timings: '9am - 11am',
               type: 'Offline (Indiranagar)',
               duration: ['6th November 2022', '700 Rupees']
          },
          {
               id: '2',
               url: 'https://athayogliving.com/courses/shikshana/ryt-200-course',
               alt: 'Teacher Training Program',
               title: 'Traditional Hatha Yoga',
               img: CreativeTwo,
               timings: '6am - 8:30am (Online) / 11am - 4pm (Offline)',
               type: 'Online / Offline',
               duration: [
                    'Weekend Batch November 2nd 2022',
                    '2-3 Months | RYT 200 Hours'
               ]
          },
          {
               id: '3',
               url: 'https://forms.gle/PnTix51RyuVDZjGr9',
               alt: 'Aroma Therapy Workshop',
               title: 'Aroma Therapy Workshop',
               img: CreativeThree,
               timings: '10:00am - 12:20pm',
               type: 'Offline (Indiranagar & K.R Puram)',
               duration: [
                    '19th November 2022 Indiranagar',
                    '20th November 2022 K.R Puram'
               ]
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

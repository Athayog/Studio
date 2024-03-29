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
import CreativeOne from 'public/creative-1.png';
import CreativeTwo from 'public/creative-2.png';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
SwiperCore.use([Navigation, Pagination]);

function UpcomingCourses() {
     const upcomingData = [
          // {
          //      id: '1',
          //      url: '/enquire/workshops',
          //      alt: 'Prenatal Yoga Practice',
          //      title: 'Prenatal Yoga Practice',
          //      img: CreativeOne,
          //      timings: '4th - 15th Week Pregnancy 10am - 11am || 16th to 30th Week Pregnancy 4pm - 5pm',
          //      type: 'Offline (Indiranagar)',
          //      duration: ['17th July 2023']
          // }
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
                    gridTemplateColumns=" repeat(auto-fit, minmax(250px, 500px));"
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
                                        href={url + '?source=home'}
                                        key={id}
                                        passHref
                                        target="_blank"
                                   >
                                        <a
                                             rel="noopener noreferrer"
                                             target="_blank"
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

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
import CreativeOne from 'public/workshop_1.png';
import CreativeTwo from 'public/workshop_2.png';
import CreativeThree from 'public/workshop_3.png';
import CreativeFour from 'public/workshop_4.png';
import CreativeFive from 'public/workshop_5.png';
import CreativeSix from 'public/workshop_6.png';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
SwiperCore.use([Navigation, Pagination]);

function UpcomingCourses() {
     const upcomingData = [
          {
               id: '1',
               url: '/enquire/workshops',
               alt: 'Breath Easy',
               img: CreativeOne,
               title: 'Breath Easy',
               timings: '10:00 AM - 11:30 AM',
               type: 'Offline (Indiranagar)',
               duration: ['21st March - 31st March', 'Fee: ₹2000']
          },
          {
               id: '2',
               url: '/enquire/workshops',
               alt: 'Connecting with self',
               title: 'Connecting with self',
               img: CreativeTwo,
               timings: '10:00am - 12:00pm (KR Puram)',
               type: 'Offline',
               duration: [
                    '25th Feb (Saturday)',
                    'Eligibility 7+ Years',
                    'Fee: ₹700'
               ]
          },
          {
               id: '3',
               url: '/enquire/workshops',
               alt: "Women's Care",
               title: "Women's Care",
               img: CreativeThree,
               timings: '10:00am - 12:00pm (Indiranagar)',
               type: 'Offline',
               duration: ['4th March 2023', 'Fee: ₹800']
          },
          {
               id: '4',
               url: '/enquire/workshops',
               alt: 'Yoga Nidra - Level 2',
               title: 'Yoga Nidra - Level 2',
               img: CreativeFour,
               timings: '9:00AM - 11:00AM (Indiranagar)',
               type: 'Offline',
               duration: ['19th March 2023', 'Fee: ₹600']
          },
          {
               id: '5',
               url: '/enquire/workshops',
               alt: 'Traditional Hata Yoga',
               title: 'Traditional Hata Yoga',
               img: CreativeFive,
               timings: '2-3 Months',
               type: 'Offline/Online',
               duration: ['April 3rd for Weekday', 'March 18th for Weekend']
          },
          {
               id: '6',
               url: '/enquire/workshops',
               alt: 'Athayog Shikshanapada',
               title: 'Athayog Shikshanapada',
               img: CreativeSix,
               timings: '1 Month',
               type: 'Offline',
               duration: ['1st to 31st March 2023']
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
                                   >
                                        <a rel="noopener noreferrer">
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

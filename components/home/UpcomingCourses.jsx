import {
     Box,
     Flex,
     Heading,
     Text,
     chakra,
     ListItem,
     OrderedList,
     UnorderedList,
     List,
     ListIcon
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import CreativeTwo from 'public/TTC.png';
import CreativeOne from 'public/yoga_intensive.png';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';

function UpcomingCourses() {
     const upcomingData = [
          {
               id: '1',
               url: 'https://forms.gle/6dd6QbjPPfaAEmqt9',
               alt: 'Yoga Intensive Course',
               img: CreativeOne,
               title: 'Yoga Intensive Course',
               timings: ' 7am - 8am',
               type: 'Online',
               duration: ['1st Sepetember to 30th September']
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
          }
     ];

     return (
          <Box py={10} maxW="90vw" margin="0 auto">
               <Heading fontWeight="medium" display="flex" gap={5}>
                    Our Upcoming Courses <BsArrowRightCircleFill />
               </Heading>
               <Flex gap={10} flexWrap="wrap" mt={6}>
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
                                        passHref
                                        key={id}
                                        target="_blank"
                                   >
                                        <Flex
                                             border="1px solid"
                                             maxW="fit-content"
                                             cursor="pointer"
                                             // boxShadow="base"
                                             borderColor="gray.300"
                                        >
                                             <Image
                                                  src={img}
                                                  height="300"
                                                  width="300"
                                                  alt={alt}
                                             />
                                             <Box
                                                  p={5}
                                                  borderLeft="1px solid"
                                                  borderColor="gray.300"
                                                  bg="gray.50"
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
                                   </Link>
                              );
                         }
                    )}
               </Flex>
          </Box>
     );
}

export default UpcomingCourses;

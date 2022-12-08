import HomeLayout from '@/components/layout/HomeLayout';
import {
     AspectRatio,
     Box,
     Button,
     Flex,
     Grid,
     Heading,
     Icon,
     ListItem,
     OrderedList,
     Stack,
     chakra,
     Text,
     UnorderedList,
     Divider,
     ListIcon,
     List
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Stress from 'public/stress.png';
import { FaCalendarAlt, FaClock, FaRupeeSign } from 'react-icons/fa';
function StreeFreeShourtCourse() {
     const Highlights = [
          'Causes of these stressors',
          'Dealing with these causes ',
          'Techniques to succeed in exams',
          'How to design a planner',
          'Balance and Synergy',
          'Role of parents ',
          'Role of teachers '
     ];
     const outComes = [
          'Reducing anxiety',
          'Building self confidence',
          'Ways to stay motivated',
          'Staying focussed',
          'Positive mindset',
          'Enjoying the process ',
          'Work smart Vs Work hard'
     ];
     return (
          <Box margin="0 auto">
               {/* Hero */}
               <Box backgroundColor="#FAF6F4" className="stress-background">
                    <Grid
                         width="full"
                         alignItems="center"
                         justifyItems="center"
                         margin="0 auto"
                         maxW="80vw"
                         className="stress-grid"
                         gap={{ base: 2, md: 5, lg: 10 }}
                    >
                         <Box>
                              <Heading
                                   fontSize={{
                                        base: '3xl',
                                        md: '3xl',
                                        lg: '5xl'
                                   }}
                                   color="#23373f"
                                   fontWeight="700"
                                   fontFamily="IBM Plex Serif"
                              >
                                   {' '}
                                   Art of managing Exam stress{' '}
                              </Heading>
                              <Text
                                   mt={5}
                                   color="#23373f"
                                   fontSize={{
                                        base: 'lg',
                                        md: 'lg',
                                        lg: 'xl'
                                   }}
                              >
                                   We all fear examinations, When exams are
                                   overhead we panic and this panicking leads to
                                   examination stress. The fact that
                                   examinations are an assessment of your
                                   academic performance affects every child in
                                   building the pressure to score good marks.
                                   But these exams affect children in different
                                   ways physically, mentally and emotionally. In
                                   these sessions we will explore a structure
                                   and protocol that can help you beat the exam
                                   fever and also make you confident to bring
                                   out your best. Exams are not a competition
                                   between students but it&apos;s an enabler to
                                   use your potential and succeed for higher
                                   goals and dreams.{' '}
                              </Text>
                              <Link passHref href="https://rzp.io/l/HRgLdkEn">
                                   <Button
                                        mt={10}
                                        backgroundColor="#a13146"
                                        color="#fff"
                                        width={{
                                             base: 'full',
                                             md: 'max-content',
                                             lg: 'max-content'
                                        }}
                                        rounded="full"
                                        _hover={{
                                             backgroundColor: '#a15146'
                                        }}
                                   >
                                        Register Now
                                   </Button>
                              </Link>
                         </Box>
                         <AspectRatio
                              maxW="560px"
                              width="100%"
                              ratio={4 / 3}
                              position="relative"
                              order={{ base: -1, md: -1, lg: 2 }}
                         >
                              <Image
                                   src={Stress}
                                   layout="fill"
                                   objectFit="cover"
                              />
                         </AspectRatio>
                    </Grid>
               </Box>

               <Stack
                    width="100%"
                    spacing={10}
                    maxW="80vw"
                    margin="0 auto"
                    py={{ base: 5, md: 10, lg: 20 }}
               >
                    <Flex
                         gap={{ base: 10, md: 40, lg: 40 }}
                         justifyContent="flex-start"
                         width="100%"
                         alignItems="center"
                         justifyItems="center"
                         flexWrap="wrap"
                    >
                         <Box>
                              {' '}
                              <Heading
                                   as="h4"
                                   fontSize={{
                                        base: '2xl',
                                        md: '3xl',
                                        lg: '3xl'
                                   }}
                                   position="relative"
                                   _after={{
                                        content: '""',
                                        position: 'absolute',
                                        top: '100%',
                                        width: '100%',
                                        left: '0',
                                        height: '3px',
                                        borderRadius: '2px',
                                        background: '#a13146'
                                   }}
                                   mb={6}
                              >
                                   Highlights of this program are
                              </Heading>
                              <OrderedList spacing={2}>
                                   {Highlights.map((item, idx) => {
                                        return (
                                             <ListItem key={idx}>
                                                  {item}
                                             </ListItem>
                                        );
                                   })}
                              </OrderedList>
                         </Box>

                         <Box>
                              <Heading
                                   as="h4"
                                   fontSize={{
                                        base: '2xl',
                                        md: '3xl',
                                        lg: '3xl'
                                   }}
                                   position="relative"
                                   mb={6}
                                   _after={{
                                        content: '""',
                                        position: 'absolute',
                                        top: '100%',
                                        width: '100%',
                                        left: '0',
                                        height: '3px',
                                        borderRadius: '2px',
                                        background: '#a13146'
                                   }}
                              >
                                   Outcomes
                              </Heading>

                              <OrderedList spacing={2}>
                                   {outComes.map((item, idx) => {
                                        return (
                                             <ListItem key={idx}>
                                                  {item}
                                             </ListItem>
                                        );
                                   })}
                              </OrderedList>
                         </Box>
                    </Flex>

                    <Divider />
                    <Box>
                         <Heading
                              as="h4"
                              fontSize="xl"
                              position="relative"
                              width="-webkit-max-content"
                              textAlign="center"
                              mb={3}
                              _after={{
                                   content: '""',
                                   position: 'absolute',
                                   top: '100%',
                                   width: '100%',
                                   left: '0',
                                   height: '2px',
                                   borderRadius: '2px',
                                   background: '#a13146'
                              }}
                         >
                              Eligibility
                         </Heading>
                         <Text
                              fontSize={{
                                   base: 'lg',
                                   md: 'lg',
                                   lg: 'xl'
                              }}
                         >
                              Grade 8th to 10th
                         </Text>
                    </Box>

                    <Box mt={10}>
                         <List
                              mt={3}
                              fontWeight="medium"
                              fontSize={{
                                   base: 'lg',
                                   md: 'lg',
                                   lg: 'xl'
                              }}
                         >
                              <ListItem alignItems="center">
                                   <ListIcon as={FaRupeeSign} />
                                   <chakra.span fontWeight="normal" mr={2}>
                                        Fees:
                                   </chakra.span>{' '}
                                   Rs.3000{' '}
                              </ListItem>
                              <ListItem alignItems="center">
                                   <ListIcon as={FaClock} />
                                   <chakra.span fontWeight="normal" mr={2}>
                                        Timings:
                                   </chakra.span>
                                   4:00pm to 5:30pm{' '}
                              </ListItem>
                              <ListItem alignItems="center">
                                   <ListIcon as={FaCalendarAlt} />
                                   <chakra.span fontWeight="normal" mr={2}>
                                        Dates:
                                   </chakra.span>
                                   Sat and Sun ( 7th Jan to 29th Jan)
                              </ListItem>
                         </List>
                    </Box>

                    <Divider />
                    <Box>
                         <Text
                              fontSize={{
                                   base: 'lg',
                                   md: 'lg',
                                   lg: 'xl'
                              }}
                              fontWeight="normal"
                         >
                              Embarking into this journey of enjoying the
                              assessments ( not exams) with the right framework
                              and mindset. Let's come together and nurture these
                              young minds to be free from within and enjoy every
                              moment of their life! Best wishes.
                         </Text>
                    </Box>
                    <Link passHref href="https://rzp.io/l/HRgLdkEn">
                         <Button
                              _hover={{
                                   backgroundColor: '#a15146'
                              }}
                              mt={10}
                              width={{
                                   base: 'full',
                                   md: 'max-content',
                                   lg: 'max-content'
                              }}
                              backgroundColor="#a13146"
                              color="#fff"
                              rounded="full"
                         >
                              Register Now
                         </Button>
                    </Link>
               </Stack>
          </Box>
     );
}

export default StreeFreeShourtCourse;
StreeFreeShourtCourse.Layout = HomeLayout;

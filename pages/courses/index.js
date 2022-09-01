import HomeLayout from '@/components/layout/HomeLayout';
import HeroSub from '@/components/shared/HeroSub';
const { Box, Heading, Text, Flex, Button } = require('@chakra-ui/react');
import s3 from 'public/shi_3-min.jpg';
import Link from 'next/link';
import Head from 'next/head';

function Courses() {
     const data = [
          {
               name: 'Athayog Sadhana',
               desc: `Elevate your Yogic practice at the AthaYog Sadhana - a peaceful and hygienic environment to practice.`,
               url: 'courses/athayog-sadhana'
          },
          {
               name: 'Athayog Short Course',
               desc: `Short Courses From Athayog Living.`,
               url: 'courses/short-course'
          },
          {
               name: 'Athayog Shikshanapada',
               desc: `Climb up the career ladder with the certificate programs and teacher's training under AthaYog Shikshana Pada.`,
               url: 'courses/shikshana'
          },
          {
               name: 'Athayog Chikitsa',
               desc: `If you’re seeking wellness and better health, AthaYog Chikitsa is designed to help you adapt into Yogic living as a medium of alternative healing and wellness.`,
               url: 'courses/chikitsa'
          },
          {
               name: 'Special Events',
               desc: `Details of special events organized by Athayog Living throught the year`,
               url: 'courses/special-events'
          }
     ];
     const pageData = {
          name: 'Courses',
          heroImage: s3,
          whatis: ``
     };
     return (
          <Box bg="primaryWhite">
               <Head>
                    <title>Courses - AthayogLiving</title>
               </Head>
               <HeroSub pageData={pageData} />
               <Box maxW="container.xl" margin="auto" py={10} px={5}>
                    <Flex
                         justifyContent="center"
                         flexDirection="row"
                         width="100%"
                         gridGap={5}
                         flexWrap="wrap"
                    >
                         {data.map((current, idx) => {
                              return (
                                   <Flex
                                        key={idx}
                                        bg="white"
                                        boxShadow="base"
                                        padding={6}
                                        rounded="base"
                                        width="20rem"
                                        minWidth="10rem"
                                        height="xsm"
                                        direction="column"
                                        justifyContent="space-between"
                                   >
                                        <Box>
                                             <Heading
                                                  textAlign="center"
                                                  as="h4"
                                                  size="md"
                                                  fontWeight="normal"
                                             >
                                                  {current.name}
                                             </Heading>
                                             <Text
                                                  textColor="aygray.700"
                                                  mt={6}
                                             >
                                                  {current.desc}
                                             </Text>
                                        </Box>
                                        <Link
                                             passHref={true}
                                             href={current.url}
                                        >
                                             <Button
                                                  mt={6}
                                                  colorScheme="aygreen"
                                                  size="sm"
                                                  width="100%"
                                             >
                                                  Check Now
                                             </Button>
                                        </Link>
                                   </Flex>
                              );
                         })}
                    </Flex>
               </Box>
          </Box>
     );
}

export default Courses;
Courses.Layout = HomeLayout;

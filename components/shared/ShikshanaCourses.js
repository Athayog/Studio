import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading } from '@chakra-ui/layout';
import Head from 'next/head';
import Link from 'next/link';
import s2 from 'public/shi_2-min.jpg';
import s3 from 'public/shi_3-min.jpg';
import s6 from 'public/shi_6-min.jpg';

const ShikshanaCourses = () => {
     let easing = [0.175, 0.85, 0.42, 0.96];

     const textVariants = {
          exit: {
               y: -100,
               opacity: 0,
               transition: { duration: 0.5, ease: easing }
          },
          enter: {
               y: 0,
               opacity: 1,
               transition: { duration: 0.5, ease: easing }
          }
     };

     const courses = [
          {
               id: '1ATH',
               name: 'YIC - Yoga Instructor course',
               slug: 'yic-yoga-instructor-course',
               image: s6
          },
          {
               id: '2ATH',
               name: 'RYT - 200 courses',
               slug: 'ryt-200-course',
               image: s2
          },
          {
               id: '3ATH',
               name: 'RPYT courses',
               slug: 'rpyt-course',
               image: s3
          }
     ];
     console.log(courses);
     return (
          <Box>
               <Head>
                    <title>Shikshana Pada | Athayog Living</title>
                    <meta
                         name="viewport"
                         content="initial-scale=1.0, width=device-width"
                    />
                    <meta
                         name="keywords"
                         content="ashtanga yoga,yoga teacher training,yoga course,yoga teacher training bangalore,yoga courses,yoga course certificate,ashtanga yoga vinyasa,yoga teacher training course,yoga courses online,yoga teacher training india,yoga course online,course for yoga instructor,yoga therapy course,yoga teacher training online,yoga course diploma,yoga course for teachers ,yoga teacher training course online,yoga teacher training course near me,yoga teacher training course fees,yoga teacher training online course,yoga course in bangalore,yoga course in india,yoga course bangalore,ashtanga yoga primary series,yoga courses bangalore,yoga teacher training 200 hour,yoga course after 12th,yoga science course,yoga course online free,yoga trainer course,yoga courses after 12th,yoga teacher training course bangalore,yoga teacher training and certification,yoga course online india,yoga teacher training near me,
yoga teacher training course fees in bangalore,yoga teacher training online india,yoga teacher training 200 hrs
"
                    ></meta>
               </Head>
               <Flex
                    margin="auto"
                    padding={{
                         base: '2rem 0',
                         md: '3rem 0',
                         lg: '3rem '
                    }}
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                    bg="primaryWhite"
               >
                    <Box
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width={['100%', '80vw']}
                    >
                         <Heading
                              fontWeight="normal"
                              textAlign="center"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              Shikshana Pada
                         </Heading>
                         <Grid
                              gridTemplateColumns="repeat(auto-fit, minmax(230px, 300px))"
                              gridGap="10"
                              width="100%"
                              mt={10}
                              alignItems="center"
                              justifyContent="center"
                              padding="0 2rem"
                         >
                              {courses.map(
                                   ({ id, name, slug, desc, image }) => {
                                        return (
                                             <Box
                                                  borderWidth="1px"
                                                  borderRadius="lg"
                                                  overflow="hidden"
                                                  bg="white"
                                                  boxShadow="sm"
                                                  key={id}
                                             >
                                                  <Image
                                                       layout="instrinsic"
                                                       priority={true}
                                                       height="100%"
                                                       width="100%"
                                                       style={{
                                                            overflow: 'hidden'
                                                       }}
                                                       key="1"
                                                       src={image.src}
                                                       alt="space"
                                                  />

                                                  <Box position="relative">
                                                       <Heading
                                                            textAlign="center"
                                                            as="h5"
                                                            size="sm"
                                                            width="100%"
                                                            borderBottom="1px"
                                                            borderColor="gray.200"
                                                            fontWeight="medium"
                                                            bg="gray.50"
                                                            padding="3"
                                                       >
                                                            {name}
                                                       </Heading>
                                                       <Box padding="5">
                                                            <Link
                                                                 href={
                                                                      'shikshana/' +
                                                                      slug
                                                                 }
                                                                 scroll={true}
                                                                 passHref
                                                                 style={{
                                                                      cursor: 'pointer'
                                                                 }}
                                                            >
                                                                 <a>
                                                                      <Button
                                                                           width="full"
                                                                           size="sm"
                                                                           variant="solid"
                                                                           colorScheme="aygreen"
                                                                      >
                                                                           Checkout
                                                                      </Button>
                                                                 </a>
                                                            </Link>
                                                       </Box>
                                                  </Box>
                                             </Box>
                                        );
                                   }
                              )}
                         </Grid>
                    </Box>
               </Flex>
          </Box>
     );
};

export default ShikshanaCourses;

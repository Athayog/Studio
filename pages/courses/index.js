import HomeLayout from '@/components/layout/HomeLayout';
import HeroSub from '@/components/shared/HeroSub';
const { Box, Heading, Text, Flex, Button } = require('@chakra-ui/react');

import Head from 'next/head';

function Courses() {

     return (
          <Box bg="primaryWhite">
               <Head>
                    <title>Courses - AthayogLiving</title>
               </Head>
              
               <Box maxW="container.xl" margin="auto" py={10} px={5}>
                    <Flex
                         justifyContent="center"
                         flexDirection="row"
                         width="100%"
                         gridGap={5}
                         flexWrap="wrap"
                         minH="50vh"
                    >
                        <Heading mt={50}>404 New Landing Page Soon!</Heading>
                    </Flex>
               </Box>
          </Box>
     );
}

export default Courses;
Courses.Layout = HomeLayout;

import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import YouTube from 'react-youtube';

function VideoSection() {
     return (
          <Flex
               bg="white"
               justifyContent="center"
               alignItems="center"
               height="100%"
          >
               <Grid
                    width="full"
                    justifyContent="space-evenly"
                    padding={{ base: '5', md: '10', lg: '16' }}
                    gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
                    gap={10}
               >
                    <Box>
                         <Heading
                              mb={5}
                              borderBottom="3px solid"
                              borderColor="aygreen.500"
                              width="max-content"
                              fontWeight="medium"
                              display="flex"
                              fontSize={['2xl', '2xl']}
                         >
                              Our 2 Years Journey
                         </Heading>
                         <YouTube
                              className="video-container"
                              videoId={'mNgBdsGr_DQ'}
                         />
                    </Box>
                    <Box>
                         <Heading
                              fontWeight="medium"
                              fontSize={['2xl', '2xl']}
                              mb={5}
                              borderBottom="3px solid"
                              borderColor="aygreen.500"
                              width="max-content"
                         >
                              About Our Founder
                         </Heading>
                         <YouTube
                              className="video-container"
                              videoId={'w8e0BF0Nw44'}
                         />
                    </Box>
               </Grid>
          </Flex>
     );
}

export default VideoSection;

import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Gallery = () => {
     return (
          <Box height="100vh" bg="aygreen.50">
               <Flex
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    height="100%"
                    width="100%"
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         color="primaryDarkGray"
                    >
                         Gallery
                    </Heading>
               </Flex>
          </Box>
     );
};

export default Gallery;
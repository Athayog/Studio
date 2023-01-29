import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React from 'react';
import { BsDownload } from 'react-icons/bs';

function GuideBook() {
     return (
          <Box height="100%" bg="#f9f9f9">
               <Flex
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    width="100%"
                    padding={{ base: '1rem', md: '2rem', lg: '5rem' }}
                    direction="column"
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         fontSize={{ base: '2xl', md: '3xl' }}
                         color="primaryDarkGray"
                    >
                         Download our{' '}
                         <chakra.span color="aygreen.600" fontWeight="bold">
                              {' '}
                              Guide Book
                         </chakra.span>{' '}
                         on Postures
                    </Heading>
                    <a
                         href="https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/GuideBookPostures.pdf?alt=media&token=df0bb820-79bd-474d-8674-d2f55226f0fd"
                         downlaod="true"
                         target="_blank"
                    >
                         <Button
                              size="md"
                              fontSize={{ sm: 'sm', lg: 'md' }}
                              rightIcon={<BsDownload />}
                              mt={10}
                              colorScheme="aygreen"
                              fontWeight="medium"
                         >
                              Download
                         </Button>
                    </a>
               </Flex>
          </Box>
     );
}

export default GuideBook;

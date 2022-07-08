import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import NavbarHelper from '../shared/NavbarHelper';
import CareerImage from 'public/athayogChikitsa.jpg';
function Hero() {
     return (
          <>
               <NavbarHelper />
               <Flex
                    height={{ base: '60vh', md: '60vh' }}
                    justifyContent="space-between"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    textColor="white"
                    flexWrap="wrap"
                    width="full"
                    position="relative"
               >
                    <Box zIndex={-1}>
                         <Image
                              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              alt="hero"
                              // placeholder="blur"
                         />
                    </Box>
               </Flex>
          </>
     );
}

export default Hero;

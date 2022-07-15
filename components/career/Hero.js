import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import NavbarHelper from '../shared/NavbarHelper';
import CareerImage from 'public/career3.jpg';
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
                              src={CareerImage}
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                              placeholder="blur"
                         />
                    </Box>
               </Flex>
          </>
     );
}

export default Hero;

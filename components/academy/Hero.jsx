import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import HeroArtwork from 'public/HeroArtwork.svg';
import HeroBg from 'public/HeroBG.png';
import HeroGirl from 'public/HeroGirl.png';

import EnquiryModal from '../home/Enquiry/EnquiryModal';
import Link from 'next/link';

function Hero() {
    return (

        <Box 
        bg={`linear-gradient(to bottom, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1)), url(${HeroBg.src})`}
        backgroundSize='cover'
        position='relative'
        backdropFilter='blur(100px)' // Adjust the blur amount as needed
    
       >
            <Flex py={10} maxW='container.xl' px={10} margin='0 auto' direction={{ base: 'column', md: 'row' }}>
                <Flex direction='column' gap={5} flex={6} zIndex={1}>
                    {/* Line Heading */}
                    <Text color='#478605' fontWeight='bold'>INTERNATIONALLY ACCREDITED</Text>
                    <Heading color="#202020">Unlock Your Yoga Journey <br /> with <chakra.span color='#478605'>AthaYog Living</chakra.span></Heading>
                    <Text >
                        <chakra.span  bg='white' rounded='full' width='max-content' p={3} fontWeight='bold'>
                        RYT 200 Certification Course
                        </chakra.span>
                        
                    </Text>
                    <Text>
                        Transform into a skilled Yoga practitioner and teacher with our International Certificate
                        Program accredited by <chakra.span color='aygreen.400'>Yoga Alliance USA</chakra.span>. Elevate your career and establish your personal
                        brand as a Yoga Coach.
                    </Text>
               
                    
                    <Link href="/yoga-academy/register" passHref>
                    <Button rounded='full' padding="10px 80px" width="40px" color="#fff"  background="#F54900" size='md'>Join Now</Button>
                </Link>
                </Flex>

                <Box flex={4} bg={`url(${HeroArtwork.src})`} backgroundSize='contain' position='relative'>
                    <Image alt="Home" src={HeroGirl} height="400" width="400" />
                  
                  
                  
                </Box>

            </Flex>
          
            </Box>

    )
}

export default Hero
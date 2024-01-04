import { Box, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import HeroArtwork from 'public/HeroArtwork.svg';
import HeroBg from 'public/HeroBG.png';
import HeroGirl from 'public/HeroGirl.png';
import CallSvg from 'public/call.svg';
import EnquiryModal from '../home/Enquiry/EnquiryModal';

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
               
                    <EnquiryModal buttonText="Join Now" backColor="#F54900" size='lg'/>

                </Flex>

                <Box flex={4} bg={`url(${HeroArtwork.src})`} backgroundSize='contain' position='relative'>
                    <Image alt="Home" src={HeroGirl} height="400" width="400" />
                    <a href="tel:+919611771434" style={{position:'relative'}}>
                        <Box position='absolute' background="#F54900" height={55} width={55} border="4px solid #FFF" padding={3} borderRadius='50%' right="10" bottom="0">
                       
                            <Image  src={CallSvg} objectFit='contain' height={25} width={25} />
                          
                        </Box>
                        </a>
                  
                </Box>

            </Flex></Box>

    )
}

export default Hero
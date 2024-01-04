import React from 'react'
import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import HeroBg from 'public/HeroBG.svg'
import HeroGirl from 'public/HeroGirl.png'
import HeroArtwork from 'public/HeroArtwork.svg'
import Link from 'next/link';
import CallSvg from 'public/call.svg'

function Hero() {
    console.log(HeroBg)
    return (

        <Box bg={`url(${HeroBg.src})`} backgroundSize='contain'>
            <Flex py={10} maxW='container.xl' px={10} margin='0 auto' direction={{ base: 'column', md: 'row' }}>
                <Flex direction='column' gap={5} flex={6}>
                    {/* Line Heading */}
                    <Text color='#478605' fontWeight='bold'>INTERNATIONALLY ACCREDITED</Text>
                    <Heading color="#202020">Unlock Your Yoga Journey <br /> with <chakra.span color='#478605'>AthaYog Living</chakra.span></Heading>
                    <Text bg='white' rounded='full' width='max-content' p={3}>
                        RYT 200 Certification Course
                    </Text>
                    <Text>
                        Transform into a skilled Yoga practitioner and teacher with our International Certificate
                        Program accredited by <chakra.span color='aygreen.400'>Yoga Alliance USA</chakra.span>. Elevate your career and establish your personal
                        brand as a Yoga Coach.
                    </Text>
                    <a target="_blank" rel="noreferrer" href='https://rzp.io/l/AefUZIuY2W'>
                        <Button color='white' backgroundColor="#F54900" _hover={{ backgroundColor: "#e76099" }} width='max-content' rounded='full' size='lg' >Join now</Button>
                    </a>
                </Flex>

                <Box flex={4} bg={`url(${HeroArtwork.src})`} backgroundSize='contain' position='relative'>
                    <Image alt="Home" src={HeroGirl} height="400" width="400" />
                    <a href="tel:+919611771434" style={{position:'relative'}}>
                        <Box position='absolute' background="#F54900" height={55} width={55} border="4px solid #FFF" padding={3} borderRadius='50%' right="10" bottom="0">
                       
                            <Image placeholder='blur' src={CallSvg} objectFit='contain' height={25} width={25} />
                          
                        </Box>
                        </a>
                  
                </Box>

            </Flex></Box>

    )
}

export default Hero
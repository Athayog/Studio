import React from 'react'
import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import HeroBg from 'public/HeroBG.svg'
import HeroGirl from 'public/HeroGirl.png'
import HeroArtwork from 'public/HeroArtwork.svg'
import Link from 'next/link';

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
                    <Link target="_blank" href={'https://store.athayogliving.com/cart/42707418448056:1'} passHref>
                    <Button color='white' backgroundColor="#F54900" _hover={{ backgroundColor: "#e76099" }} width='max-content' rounded='full' size='lg' >Join now</Button>
                    </Link>
                </Flex>
               
                    <Box flex={4} bg={`url(${HeroArtwork.src})`} backgroundSize='contain'>
                        <Image alt="Home" src={HeroGirl} height="400" width="400" />
                    </Box>
               
            </Flex></Box>

    )
}

export default Hero
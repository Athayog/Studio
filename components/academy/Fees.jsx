import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import FeesBg from 'public/FeedBG.jpg'
import Link from 'next/link'

function Fees() {
    return (
        <Box position='relative' mt={20} >
            <Box height="xs" zIndex={-1} position='relative' bg={`url(${FeesBg.src})`} backgroundSize='cover' filter='blur(100px)'> </Box>
            <Box p={10} position='absolute' top='0' width='100%' height='100%'>
                <Flex width='100%' height='100%' justifyContent='center' zIndex={2} alignItems="center" direction='column' gap={6} py={10} maxW='container.xl' margin='0 auto'>
                    <Heading fontWeight='normal'>Fees: <chakra.span color="#6A9340"> ₹45,999</chakra.span></Heading>
                    <Text>Empower Your Career in 2024: Transform your professional journey
                        with yoga, unlocking opportunities for a healthier, happier and more
                        fulfilling career in the upcoming year!</Text>
                    <a target="_blank" rel="noreferrer" href='https://rzp.io/l/AefUZIuY2W'>
                        <Button rounded='full' padding="20px 80px" color="#fff" background=" linear-gradient(101deg, #F54900 48.85%, #FDC685 90.46%)">Buy Now</Button>
                    </a>
                </Flex>
            </Box>
        </Box>

    )
}

export default Fees
import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react'

import Link from 'next/link'
import EnrollmentBG from 'public/EnrollmentBG.jpg'
function Enrollment() {
    return (
        <Box bg={`url(${EnrollmentBG.src})`} my={10} backgroundSize='cover' p={10} >
            <Flex alignItems="center" direction='column' gap={6} py={10} maxW='container.xl' margin='0 auto'>
                <Heading textAlign='center'>Awaken in 2024: <chakra.span color="#5B7F38">Yoga Enrollment Open</chakra.span></Heading>
                <Text textAlign='center'>Reconnect with yourself in 2024 through the practice of Yoga. Enroll today and be part of a communty dedicated to growth, well-being, and the pursuit of inner harmony.</Text>
                <Link href="/yoga-academy/register" passHref>
                    <Button rounded='full' padding="20px 80px" color="#fff" background=" linear-gradient(101deg, #F54900 48.85%, #FDC685 90.46%)">Enroll Now</Button>
                </Link>
                
                  </Flex>
        </Box>
    )
}

export default Enrollment
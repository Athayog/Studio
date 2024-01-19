import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react'

import Link from 'next/link'
import EnrollmentBG from 'public/EnrollmentBG.jpg'
function Enrollment() {
    return (
        <Box bg={`url(${EnrollmentBG.src})`} my={{base:5,md:10}} backgroundSize='cover' p={10} >
            <Flex alignItems="center" direction='column' gap={6} py={10} maxW='container.xl' margin='0 auto'>
                <Heading textAlign='center'>Awaken in 2024: <chakra.span color="#5B7F38">Yoga Enrollment Open</chakra.span></Heading>
                <Text textAlign='center'>Transform in 2024 through our Yoga course. Enroll now and become part of a
 community dedicated to your growth, wellbeing and the pursuit of inner harmony.</Text>
                <Link href="/yoga-academy/register" passHref>
                    <Button rounded='full'padding={{base:"25px 80px",md:"20px 80px"}} color="#fff" background=" linear-gradient(101deg, #F54900 48.85%, #FDC685 90.46%)">Enroll Now</Button>
                </Link>
                
                  </Flex>
        </Box>
    )
}

export default Enrollment
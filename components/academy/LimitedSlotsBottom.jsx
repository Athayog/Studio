import React from 'react'
import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import LimitedBG from 'public/limitedBg.jpg'
import Link from 'next/link'
function LimitedSlotsBottom() {
  return (
    <Box bg={`url(${LimitedBG.src})`} p={6} backgroundSize='cover'>
      <Flex alignItems="center" direction='column' gap={5} py={10} maxW='container.xl' margin='0 auto'>
        <Heading maxW='2xl' textAlign='center' fontSize='3xl' color="#B43636">Limited Slots! </Heading>
        <Text fontSize='2xl' fontWeight='bold' textAlign='center'>Start Your Career Transformation Today!</Text>
        <Link href={'/yoga-academy/product/yoga-academy-course  '} passHref>
          <Button rounded='full' padding="24px 72px" color="#fff" background='linear-gradient(101deg, #F54900 48.85%, #FDC685 90.46%) ' transition='all 0.2s ease' _hover={{
            "background": "linear-gradient(160deg, #F54900 48.85%, #FDC685 90.46%)"
          }} >Enroll Now</Button>
        </Link>
        <Text>Contact Us for Further Details</Text>
      </Flex>
    </Box>
  )
}

export default LimitedSlotsBottom
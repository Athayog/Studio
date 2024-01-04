import React from 'react'
import { Box, Button, Flex, Heading,Text,chakra } from '@chakra-ui/react'
import LimitedBG from 'public/limitedBg.jpg'
import Link from 'next/link'
import EnquiryModal from '../home/Enquiry/EnquiryModal'
function LimitedSlots() {
  return (
    <Box  bg={`url(${LimitedBG.src})`} p={6} backgroundSize='cover'>
            <Flex  alignItems="center" direction='column'  gap={6} py={10} maxW='container.xl' margin='0 auto'>
                <Heading maxW='2xl' textAlign='center' fontSize='3xl'>Limited Slots: Act now for a transformative
career journey with <chakra.span color='#5B7F38'>AthaYog Living.</chakra.span></Heading>
                <Text fontSize='2xl'>Yoga is a Spiritual Science - Genuine Enlightenment Matters</Text>
                <EnquiryModal buttonText="Start Your Journey" backColor="linear-gradient(101deg, #F54900 48.85%, #FDC685 90.46%)"/>
 
            </Flex>
        </Box>
  )
}

export default LimitedSlots
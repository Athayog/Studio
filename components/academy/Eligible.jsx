import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import PlaceHolder from 'public/career2.jpg'
import Image from 'next/image'
function Eligible() {
    return (
        <Box p={10}>
            <Flex alignItems="center" direction='row' gap={10} py={10} maxW='container.xl' margin='0 auto'>
                <Box flex={1}>

                    <Heading>Am I Eligible?</Heading>
                    <Box>  <Text>Age: 16 and above</Text></Box>
                    <Box>  <Text>Education: 10th Pass</Text></Box>
                    <Box>  <Text>1 Month of Recent Yoga Practice</Text></Box>
                    <Box>  <Text> No Serious Injuries/Health Conditions/Surgeries (Last 6 Months)</Text></Box>
                    <Box>  <Text>Open Mind &amp; Willingness to Learn</Text></Box>
                    <Box>  <Text>Wholehearted Commitment to the Entire Program</Text></Box>
                </Box>
                <Box flex={1} >
                    <Box overflow='hidden' >
                        <Image src={PlaceHolder} objectFit='cover' style={{
                            "border-top-left-radius": 50,
                            "border-top-right-radius": 50}} height={380} width={300} />
                    </Box>

                </Box>
            </Flex>
        </Box>
    )
}

export default Eligible
import { Box, Button, Flex, Heading,Text,chakra } from '@chakra-ui/react'
import React from 'react'

function Fees() {
    return (
        <Box p={10}>
            <Flex  alignItems="center" direction='column'  gap={6} py={10} maxW='container.xl' margin='0 auto'>
                <Heading>Fees: <chakra.span> ₹59,599 + 18% GST</chakra.span></Heading>
                <Text>Elevate Life in 2024: Transform your well-being with yoga, your key to a healthier, happier, and more fulfilling life in the upcoming years.</Text>
                <Button>Buy Now</Button>
            </Flex>
        </Box>
    )
}

export default Fees
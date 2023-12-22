import React from 'react'
import { Box, Button, Flex, Heading,Text,chakra } from '@chakra-ui/react'
function LimitedSlots() {
  return (
    <Box p={10}>
            <Flex  alignItems="center" direction='column'  gap={6} py={10} maxW='container.xl' margin='0 auto'>
                <Heading>Limited Slots: Act now for transformative journey with <chakra.span>AthaYog Living.</chakra.span></Heading>
                <Text>Yoga is a Spiritual Science - Genuine Enlightenment Matters</Text>
                <Button>Start Your Journey</Button>
            </Flex>
        </Box>
  )
}

export default LimitedSlots
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import PlaceHolder from 'public/career2.jpg'
import AllianceImage from 'public/alliance.jpg'
import React from 'react'
import OG from 'public/og.png'

function WhyYouShould() {
    return (
        <Box p={10}>
            <Flex alignItems="center" direction='column' gap={10} py={10} maxW='container.xl' margin='0 auto'>
                <Box textAlign='center'>

                    <Image src={OG} height="100%" width="100%" />

                    <Heading>Why you should choose</Heading>
                    <Text color="#617E43" fontSize='4xl' fontWeight='bold'>AthaYog Living?</Text>

                </Box>
                <Flex justifyContent='space-between' gap={10} alignItems='center'>
                    <Box>
                        <Heading color='aygreen.600' fontSize='xl' mb={6}>Global Accredition</Heading>
                        <Text maxW='md'>Yoga Alliance USA &amp; Vivekananda Yoga Anusandhana Samsthana
                            validation.</Text>
                    </Box>
                    <Box>
                        <Image src={AllianceImage} height={200} width={400} />
                    </Box>
                    <Box>

                    </Box>
                </Flex>

                <Flex justifyContent='space-between' gap={10} alignItems='center'>
                    <Box>
                        <Heading color='aygreen.600' fontSize='xl' mb={6}>Global Accredition</Heading>
                        <Text maxW='md'>Yoga Alliance USA &amp; Vivekananda Yoga Anusandhana Samsthana
                            validation.</Text>
                    </Box>
                    <Box>
                        <Image src={AllianceImage} height={200} width={400} />
                    </Box>
                    <Box>

                    </Box>
                </Flex>

                <Flex justifyContent='space-between' gap={10} alignItems='center'>
                    <Box>
                        <Heading color='aygreen.600' fontSize='xl' mb={6}>Global Accredition</Heading>
                        <Text maxW='md'>Yoga Alliance USA &amp; Vivekananda Yoga Anusandhana Samsthana
                            validation.</Text>
                    </Box>
                    <Box>
                        <Image src={PlaceHolder} height={200} width={400} />
                    </Box>
                    <Box>

                    </Box>
                </Flex>

                <Flex justifyContent='space-between' gap={10} alignItems='center'>
                    <Box>
                        <Heading color='aygreen.600' fontSize='xl' mb={6}>Global Accredition</Heading>
                        <Text maxW='md'>Yoga Alliance USA &amp; Vivekananda Yoga Anusandhana Samsthana
                            validation.</Text>
                    </Box>
                    <Box>
                        <Image src={PlaceHolder} height={200} width={400} />
                    </Box>
                    <Box>

                    </Box>
                </Flex>

                <Flex justifyContent='space-between' gap={10} alignItems='center'>
                    <Box>
                        <Heading color='aygreen.600' fontSize='xl' mb={6}>Global Accredition</Heading>
                        <Text maxW='md'>Yoga Alliance USA &amp; Vivekananda Yoga Anusandhana Samsthana
                            validation.</Text>
                    </Box>
                    <Box>
                        <Image src={PlaceHolder} height={200} width={400} />
                    </Box>
                    <Box>

                    </Box>
                </Flex>

                <Flex justifyContent='space-between' gap={10} alignItems='center'>
                    <Box>
                        <Heading color='aygreen.600' fontSize='xl' mb={6}>Global Accredition</Heading>
                        <Text maxW='md'>Yoga Alliance USA &amp; Vivekananda Yoga Anusandhana Samsthana
                            validation.</Text>
                    </Box>
                    <Box>
                        <Image src={PlaceHolder} height={200} width={400} />
                    </Box>
                    <Box>

                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default WhyYouShould
import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import { EmployeeData, profileData } from '../home/ContentData';
import Image from 'next/image';

function Gurus() {
    const { profiles } = profileData;
    const { employees } = EmployeeData;
    return (
        <Box p={10}>
            <Flex alignItems="center" direction='column' gap={6} py={10} maxW='container.xl' margin='0 auto'>
                <Heading>Gurus</Heading>
                <Flex gap={10} flexWrap='wrap' textAlign='center'>

                
                {profiles.map(({ name, info, image, designation }, index) => {
                    return (
                        <Box key={index}>
                            <Box mb={6}>
                                <Box
                                    rounded="full"
                                    height={{ base: '250px', md: '300px', lg: '300px' }}
                                    width={{ base: '250px', md: '300px', lg: '300px' }}
                                    overflow="hidden"
                                    mr={{ base: '0', md: '10', lg: '10' }}
                                >
                                    <Image
                                        src={image}
                                        alt={name}
                                        height="300px"
                                        width="300px"
                                        objectFit="cover"
                                        layout="responsive"
                                    />
                                </Box>
                            </Box>
                            <Text>{name}</Text>

                            <Text>{designation}</Text>

                        </Box>
                    )
                })}
                {employees.map(({ name, info, image, designation }, index) => {
                    return (
                        <Box key={index}>
                            <Box mb={6}>
                                <Box
                                    rounded="full"
                                    height={{ base: '250px', md: '300px', lg: '300px' }}
                                    width={{ base: '250px', md: '300px', lg: '300px' }}
                                    overflow="hidden"
                                    mr={{ base: '0', md: '10', lg: '10' }}
                                >
                                    <Image
                                        src={image}
                                        alt={name}
                                        height="300px"
                                        width="300px"
                                        objectFit="cover"
                                        layout="responsive"
                                    />
                                </Box>
                            </Box>
                            <Text>{name}</Text>

                            <Text>{designation}</Text>

                        </Box>
                    )
                })}
                </Flex>
            </Flex>
        </Box>
    )
}

export default Gurus
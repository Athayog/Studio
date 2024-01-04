import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import { EmployeeData, profileData } from '../home/ContentData';
import Image from 'next/image';

function Gurus() {
    const { profiles } = profileData;
    const { employees } = EmployeeData;
    return (
        <Box p={10}>
            <Flex alignItems="center" direction='column' gap={6} py={10} maxW='container.md' margin='0 auto'>
                <Heading>The Gurus</Heading>
                <Flex gap={10} mt={10} flexWrap='wrap' textAlign='center' justifyContent='center'>

                
                {profiles.map(({ name, info, image, designation }, index) => {
                    return (
                        <Box key={index}>
                            <Box mb={6}>
                                <Box
                                    rounded="full"
                                    height={{ base: '250px', md: '250px', lg: '250px' }}
                                    width={{ base: '250px', md: '250px', lg: '250px' }}
                                    overflow="hidden"
                                    mr={{ base: '0', md: '10', lg: '10' }}
                                >
                                    <Image
                                        src={image}
                                        alt={name}
                                        placeholder='blur'
                                        height="250px"
                                        width="250px"
                                        objectFit="cover"
                                        layout="responsive"
                                    />
                                </Box>
                            </Box>
                            <Text fontWeight='bold'>{name}</Text>

                            <Text>{designation}</Text>

                        </Box>
                    )
                })}
                {employees.filter((teacher) => teacher.name != "Arathi").map(({ name, info, image, designation }, index) => {
                    return (
                        <Box key={index}>
                            <Box mb={6}>
                                <Box
                                    rounded="full"
                                    height={{ base: '250px', md: '250px', lg: '250px' }}
                                    width={{ base: '250px', md: '250px', lg: '250px' }}
                                    overflow="hidden"
                                    mr={{ base: '0', md: '10', lg: '10' }}
                                >
                                    <Image
                                        src={image}
                                        alt={name}
                                        placeholder='blur'
                                        height="250px"
                                        width="250px"
                                        objectFit="cover"
                                        layout="responsive"
                                    />
                                </Box>
                            </Box>
                            <Text fontWeight='bold'>{name}</Text>

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
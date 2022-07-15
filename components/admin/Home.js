import React from 'react';
import {
     Stack,
     Stat,
     StatLabel,
     StatNumber,
     StatHelpText,
     StatArrow,
     StatGroup,
     useColorModeValue,
     Grid,
     Text,
     Spinner,
     Box,
     Link as ChakraLink,
     Flex,
     Button,
     IconButton
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Link from 'next/link';
import { IoMdArrowRoundForward } from 'react-icons/io';

const Home = () => {
     return (
          <Box>
               <Stack
                    d="flex"
                    direction={['column', 'row']}
                    spacing={5}
                    width="100%"
               >
                    <Link href="/admin/forms" passHref>
                         <Box
                              boxShadow="base"
                              bg="white"
                              rounded="md"
                              p={5}
                              _hover={{ bg: 'gray.50' }}
                              cursor="pointer"
                         >
                              <Text fontSize="xl">Forms</Text>
                              <Text textColor="gray.600">
                                   List all the forms submitted
                              </Text>
                              <Flex justifyContent="end">
                                   <IconButton
                                        mt={8}
                                        icon={<IoMdArrowRoundForward />}
                                   />
                              </Flex>
                         </Box>
                    </Link>

                    <Link href="/admin/customers" passHref>
                         <Box
                              boxShadow="base"
                              bg="white"
                              rounded="md"
                              p={5}
                              _hover={{ bg: 'gray.50' }}
                              cursor="pointer"
                         >
                              <Text fontSize="xl">Customers</Text>
                              <Text textColor="gray.600">
                                   List all signed up customers
                              </Text>
                              <Flex justifyContent="end">
                                   <IconButton
                                        mt={8}
                                        icon={<IoMdArrowRoundForward />}
                                   />
                              </Flex>
                         </Box>
                    </Link>
                    <Link href="/admin/users" passHref>
                         <Box
                              boxShadow="base"
                              bg="white"
                              rounded="md"
                              p={5}
                              _hover={{ bg: 'gray.50' }}
                              cursor="pointer"
                         >
                              <Text fontSize="xl">Admin</Text>
                              <Text textColor="gray.600">
                                   Admin related actions
                              </Text>
                              <Flex justifyContent="end">
                                   <IconButton
                                        mt={8}
                                        icon={<IoMdArrowRoundForward />}
                                   />
                              </Flex>
                         </Box>
                    </Link>
                    <Link href="/admin/career" passHref>
                         <Box
                              boxShadow="base"
                              bg="white"
                              rounded="md"
                              p={5}
                              _hover={{ bg: 'gray.50' }}
                              cursor="pointer"
                         >
                              <Text fontSize="xl">Job Applications</Text>
                              <Text textColor="gray.600">
                                   List all submitted job applications
                              </Text>
                              <Flex justifyContent="end">
                                   <IconButton
                                        mt={8}
                                        icon={<IoMdArrowRoundForward />}
                                   />
                              </Flex>
                         </Box>
                    </Link>
               </Stack>
          </Box>
     );
};

export default Home;

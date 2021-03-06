import {
     deleteTestimonialsStatus,
     updateTestimonialsStatus
} from '@/lib/db/testimonials';
import fetcher from '@/utils/fetcher';
import {
     Box,
     Grid,
     Heading,
     Skeleton,
     Spinner,
     useColorModeValue,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     FormControl,
     Switch,
     FormLabel,
     Text,
     toast,
     useToast,
     Flex,
     Button
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import useSWR, { mutate } from 'swr';
import { useAuth } from '@/lib/auth';

const ShowTestimonials = () => {
     const [status, setStatus] = useState(false);
     const [delActive, setDelActive] = useState(false);
     const { user } = useAuth();
     const toast = useToast();
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
     const { data, error } = useSWR(`/api/testimonials`, fetcher, {
          refreshInterval: 1
     });
     if (error)
          return (
               <Grid placeItems="center" mt={10}>
                    <Text>
                         Something happend while retreiving data. Try Again
                    </Text>
               </Grid>
          );

     if (!data) {
          return (
               <Grid placeItems="center" mt={10}>
                    <Spinner
                         thickness="4px"
                         speed="0.65s"
                         emptyColor="gray.200"
                         color="blue.500"
                         size="xl"
                    />
               </Grid>
          );
     }

     const onPublicChange = async (id, isAvailaible) => {
          setStatus(true);
          await updateTestimonialsStatus(id, !isAvailaible)
               .then((response) => {
                    setStatus(false);
                    mutate([`/api/testimonials`, user.token]);
                    return toast({
                         title: 'Status Updated.',
                         description: "We've updated the live status.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
               })
               .catch((error) => {
                    setStatus(false);
                    return toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
               });
     };

     const deleteTestimonial = async (id) => {
          setDelActive(true);
          await deleteTestimonialsStatus(id)
               .then((response) => {
                    setDelActive(false);
                    mutate([`/api/testimonials`, user.token]);
                    return toast({
                         title: 'Deleted.',
                         description: "We'v deleted the testimonial.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
               })
               .catch((error) => {
                    setDelActive(false);
                    return toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
               });
     };

     return (
          <>
               {isTabletOrMobile ? (
                    <>
                         {data.testimonials.map((data) => {
                              return (
                                   <Box
                                        padding={3}
                                        mb={5}
                                        key={data.id}
                                        borderBottom="1px solid #ddd"
                                   >
                                        <Flex
                                             alignItems="center"
                                             justifyContent="space-between"
                                             mb={2}
                                        >
                                             <Text>Name:</Text>
                                             <Text>{data.name}</Text>
                                        </Flex>
                                        <Flex
                                             alignItems="center"
                                             justifyContent="space-between"
                                             flexWrap="wrap"
                                             mb={2}
                                        >
                                             <Text>Review:</Text>
                                             <Text>{data.review}</Text>
                                        </Flex>
                                        <Flex
                                             alignItems="center"
                                             justifyContent="space-between"
                                             mb={2}
                                        >
                                             <Text>Rating:</Text>
                                             <Text>{data.stars}/5</Text>
                                        </Flex>
                                        <Flex
                                             alignItems="center"
                                             justifyContent="space-between"
                                             w="100%"
                                             mb={2}
                                        >
                                             <Text>Is Active:</Text>

                                             <Switch
                                                  id="email-alerts"
                                                  isDisabled={status}
                                                  onChange={(e) =>
                                                       onPublicChange(
                                                            data.id,
                                                            data.isActive
                                                       )
                                                  }
                                                  defaultChecked={data.isActive}
                                             />
                                        </Flex>
                                        <Flex
                                             alignItems="center"
                                             justifyContent="space-between"
                                             w="100%"
                                             mb={2}
                                        >
                                             <Button
                                                  size="sm"
                                                  colorScheme="red"
                                                  isLoading={delActive}
                                                  onClick={() =>
                                                       deleteTestimonial(
                                                            data.id
                                                       )
                                                  }
                                             >
                                                  Delete
                                             </Button>
                                        </Flex>
                                   </Box>
                              );
                         })}
                    </>
               ) : (
                    <Table variant="simple" colorScheme="teal">
                         <TableCaption>Testimonials</TableCaption>
                         <Thead>
                              <Tr>
                                   <Th>Name</Th>
                                   <Th>Review</Th>
                                   <Th>Rating</Th>
                                   <Th>Public</Th>
                                   <Th>Delete</Th>
                              </Tr>
                         </Thead>
                         <Tbody>
                              {data.testimonials.map((data) => {
                                   return (
                                        <Tr key={data.id}>
                                             <Td>{data.name}</Td>
                                             <Td>{data.review}</Td>
                                             <Td isNumeric>{data.stars}/5</Td>
                                             <Td>
                                                  <FormControl
                                                       display="flex"
                                                       alignItems="center"
                                                  >
                                                       <Switch
                                                            id="email-alerts"
                                                            isDisabled={status}
                                                            onChange={(e) =>
                                                                 onPublicChange(
                                                                      data.id,
                                                                      data.isActive
                                                                 )
                                                            }
                                                            defaultChecked={
                                                                 data.isActive
                                                            }
                                                       />
                                                  </FormControl>
                                             </Td>
                                             <Td>
                                                  {' '}
                                                  <Flex
                                                       alignItems="center"
                                                       justifyContent="space-between"
                                                       w="100%"
                                                       mb={2}
                                                  >
                                                       <Button
                                                            size="sm"
                                                            colorScheme="red"
                                                            isLoading={
                                                                 delActive
                                                            }
                                                            onClick={() =>
                                                                 deleteTestimonial(
                                                                      data.id
                                                                 )
                                                            }
                                                       >
                                                            Delete
                                                       </Button>
                                                  </Flex>
                                             </Td>
                                        </Tr>
                                   );
                              })}
                         </Tbody>
                    </Table>
               )}
          </>
     );
};

export default ShowTestimonials;

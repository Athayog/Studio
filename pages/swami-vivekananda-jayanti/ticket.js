import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import {
     Box,
     Button,
     Container,
     Flex,
     FormControl,
     FormLabel,
     Heading,
     Input,
     Stack,
     Table,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr,
     chakra
} from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import React, { useRef, useState } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import { getJayantiTicket } from '@/lib/db/forms';
import { useReactToPrint } from 'react-to-print';

function Ticket() {
     const [loading, setLoading] = useState(false);
     const [ticket, setTicket] = useState(null);
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm();

     const componentRef = useRef();
     const handlePrint = useReactToPrint({
          content: () => componentRef.current
     });

     const onSubmit = async ({ email }) => {
          setLoading(true);
          await getJayantiTicket(email)
               .then((res) => {
                    console.log(res);
                    if (res.code == 200) {
                         setLoading(false);
                         toast.success('Email Found!');
                         setTicket(res);
                    } else {
                         setLoading(false);
                         setTicket(null);
                         toast.error('Email is not registered');
                    }
               })
               .catch((error) => {
                    setLoading(false);
                    setTicket(null);
                    toast.error('Something went wrong');
               });
     };
     if (ticket) {
          return (
               <div>
                    <NavbarHelper />
                    <Toaster position="bottom-center" />
                    <Box
                         bg="#fdf6ee"
                         // bgGradient="linear(to-r, #fdf6ee, #c38484)"
                         minHeight="100vh"
                    >
                         <Container maxW="container.xl" py={10}>
                              {' '}
                              <Link passHref href="/swami-vivekananda-jayanti">
                                   <Button
                                        leftIcon={<IoArrowBackCircle />}
                                        width="max-content"
                                        variant="solid"
                                        colorScheme="ayorange"
                                        mb={6}
                                        mt={5}
                                   >
                                        Back
                                   </Button>
                              </Link>
                              <Box bg="#fdf6ee" minHeight="100vh" width="100%">
                                   {' '}
                                   <Flex w="100%" py={16}>
                                        <Box
                                             bg="white"
                                             boxShadow="base"
                                             rounded="sm"
                                             p={5}
                                             width="100%"
                                        >
                                             <Stack
                                                  textAlign="left"
                                                  spacing={6}
                                                  ref={componentRef}
                                                  width="100%"
                                                  py={2}
                                                  px={2}
                                             >
                                                  {' '}
                                                  <Heading
                                                       fontSize="xl"
                                                       fontWeight="bold"
                                                  >
                                                       Your Ticket Details
                                                  </Heading>
                                                  <Text>
                                                       {' '}
                                                       Namaste {ticket.name}
                                                  </Text>
                                                  <Text>
                                                       Congratulations, Your
                                                       Swami Vivekananda Jayanti
                                                       Event Registration is
                                                       confirmed.
                                                  </Text>
                                                  <Text>
                                                       We are extremely excited
                                                       to have you as a part of
                                                       this event
                                                  </Text>
                                                  <Table
                                                       variant="simple"
                                                       size="sm"
                                                  >
                                                       <Thead>
                                                            <Tr>
                                                                 <Th>
                                                                      TicketID
                                                                 </Th>
                                                                 <Th>Name</Th>
                                                                 <Th>
                                                                      Location
                                                                 </Th>
                                                                 <Th>Date</Th>
                                                                 <Th>Events</Th>
                                                            </Tr>
                                                       </Thead>
                                                       <Tbody>
                                                            <Tr>
                                                                 <Td>
                                                                      {
                                                                           ticket.ticketID
                                                                      }
                                                                 </Td>
                                                                 <Td>
                                                                      {
                                                                           ticket.name
                                                                      }
                                                                 </Td>
                                                                 <Td>
                                                                      Athayog
                                                                      Living
                                                                      Indiranagar
                                                                 </Td>
                                                                 <Td>
                                                                      5:00 am
                                                                      onwards,
                                                                      12th
                                                                      January
                                                                      2023
                                                                 </Td>
                                                                 <Td>
                                                                      {ticket?.events?.map(
                                                                           (
                                                                                event
                                                                           ) => {
                                                                                return (
                                                                                     <chakra.span
                                                                                          mr={
                                                                                               2
                                                                                          }
                                                                                     >
                                                                                          {
                                                                                               event
                                                                                          }
                                                                                     </chakra.span>
                                                                                );
                                                                           }
                                                                      )}
                                                                 </Td>
                                                            </Tr>
                                                       </Tbody>
                                                  </Table>
                                                  <Text>
                                                       {' '}
                                                       Please show this ticket
                                                       at the venue -
                                                       registration desk to
                                                       avail your pass.
                                                  </Text>
                                                  <Text>
                                                       From Athayog Living.
                                                  </Text>
                                             </Stack>
                                             <Flex
                                                  justifyContent="flex-end"
                                                  width="full"
                                                  alignItems="center"
                                                  gap={5}
                                             >
                                                  <Button
                                                       colorScheme="green"
                                                       size="sm"
                                                       onClick={handlePrint}
                                                       rounded="base"
                                                       mt={5}
                                                  >
                                                       PRINT TICKET
                                                  </Button>
                                             </Flex>
                                        </Box>
                                   </Flex>
                              </Box>
                         </Container>
                    </Box>
               </div>
          );
     }
     return (
          <div>
               <NavbarHelper />
               <Toaster position="bottom-center" />
               <Box
                    bg="#fdf6ee"
                    // bgGradient="linear(to-r, #fdf6ee, #c38484)"
                    minHeight="100vh"
               >
                    <Container maxW="container.xl" py={10}>
                         {' '}
                         <Link passHref href="/swami-vivekananda-jayanti">
                              <Button
                                   leftIcon={<IoArrowBackCircle />}
                                   width="max-content"
                                   variant="solid"
                                   colorScheme="ayorange"
                                   mb={6}
                                   mt={5}
                              >
                                   Back
                              </Button>
                         </Link>
                         <Stack
                              spacing={6}
                              bg="white"
                              boxShadow="base"
                              rounded="sm"
                              p={5}
                              width="100%"
                              as="form"
                              onSubmit={handleSubmit(onSubmit)}
                         >
                              <FormControl>
                                   <FormLabel htmlFor="email">
                                        Enter Your Registered Email
                                   </FormLabel>
                                   <Input
                                        type="email"
                                        name="email"
                                        bg="white"
                                        required
                                        id="email"
                                        variant="outline"
                                        disabled={loading}
                                        placeholder="Your Email"
                                        ref={register({
                                             required: true
                                        })}
                                   />
                              </FormControl>
                              <FormControl>
                                   <Button
                                        rounded="md"
                                        colorScheme="ayorange"
                                        type="submit"
                                        id="submitButton"
                                        isLoading={loading}
                                        loadingText="submitting.."
                                        width="xs"
                                        alignSelf="flex-end"
                                   >
                                        Get Ticket
                                   </Button>
                              </FormControl>
                         </Stack>
                    </Container>
               </Box>
          </div>
     );
}

export default Ticket;
Ticket.Layout = HomeLayout;

import { checkForArambha, registerForArambha } from '@/lib/db/forms';
import {
     Badge,
     Box,
     Button,
     chakra,
     Container,
     Flex,
     FormControl,
     FormLabel,
     Heading,
     Input,
     Select,
     Stack,
     Table,
     TableContainer,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr,
     useToast
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Logo from 'public/Logo_Filled.png';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useReactToPrint } from 'react-to-print';
import { v4 as uuidv4 } from 'uuid';
import NavbarHelper from '../shared/NavbarHelper';

function EventRegister() {
     const toast = useToast();
     const [loading, setLoading] = useState(false);
     const [event, setEvent] = useState(false);
     const form = useRef();

     const [user, setUser] = useState({
          name: '',
          email: '',
          phone: '',
          age: '',

          tshirt: '',
          gender: '',
          ticketID: ''
     });

     const componentRef = useRef();
     const handlePrint = useReactToPrint({
          content: () => componentRef.current
     });

     const {
          register,
          handleSubmit,

          formState: { errors }
     } = useForm();

     const onSubmit = async ({
          name,
          email,
          phone,
          age,

          tshirt,
          gender,
          location,
          member
     }) => {
          setLoading(true);
          setUser((prevState) => {
               return {
                    name,
                    email,
                    phone,
                    age,

                    tshirt,
                    gender,
                    ticketID,
                    location,
                    member
               };
          });

          const ticketID =
               'ATHAYOG-' +
               (
                    name.substring(0, 1) + uuidv4().toString().substring(0, 6)
               ).toUpperCase();

          await checkForArambha(email)
               .then((res) => {
                    if (res.code == 200) {
                         generateTicket(
                              name,
                              email,
                              phone,
                              age,
                              tshirt,
                              gender,
                              ticketID,
                              location,
                              member
                         );
                    } else {
                         setLoading(false);
                         toast({
                              title: 'Email already exist',
                              description: 'The email is already registred',
                              status: 'warning',
                              duration: 9000,
                              isClosable: true
                         });
                    }
               })
               .catch((error) => {
                    console.log(error);
                    setLoading(false);
                    toast({
                         title: 'Error',
                         description: 'Something Happend Try Again',
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
                    sendErrorToMe(error);
               });
     };

     const generateTicket = async (
          name,
          email,
          phone,
          age,
          tshirt,
          gender,
          ticketID,
          location,
          member
     ) => {
          setLoading(true);
          await registerForArambha(
               name,
               email,
               phone,
               age,
               tshirt,
               gender,
               ticketID,
               location,
               member
          )
               .then((response) => {
                    setUser((prevState) => {
                         return {
                              name,
                              email,
                              phone,
                              age,
                              tshirt,
                              gender,
                              ticketID,
                              location,
                              member
                         };
                    });

                    sendToAthayog(
                         name,
                         email,
                         phone,
                         age,
                         tshirt,
                         gender,
                         ticketID,
                         location,
                         member
                    );
               })
               .catch((error) => {
                    setLoading(false);
                    console.log(error);
                    toast({
                         title: 'Error',
                         description: 'Something Happend Try Again',
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
                    sendErrorToMe(error);
               });
     };

     const sendEmail = async (
          name,
          email,
          phone,
          age,
          tshirt,
          gender,
          ticketID,
          location,
          member
     ) => {
          setEvent(true);

          await emailjs
               .send(
                    'service_5d1bzlp',
                    'template_yk6wzra',
                    { name: name, email: email, ticketID: ticketID },
                    'user_Zp6dTdYGxn4E5rxeiLLCh'
               )
               .then(
                    (result) => {
                         setEvent(true);
                         setLoading(false);
                         toast({
                              title: 'Success',
                              description:
                                   'A ticket has been sent to your email',
                              status: 'success',
                              duration: 9000,
                              isClosable: true
                         });
                         if (!event) {
                              sendToAthayog(
                                   name,
                                   email,
                                   phone,
                                   age,
                                   tshirt,
                                   gender,
                                   ticketID,
                                   location,
                                   member
                              );
                         }
                    },
                    (error) => {
                         console.log(error.text);
                    }
               );
     };

     const sendToAthayog = async (
          name,
          email,
          phone,
          age,
          tshirt,
          gender,
          ticketID,
          location,
          member
     ) => {
          // Send Email
          console.log('Send To Athayog');
          setEvent(true);
          setLoading(false);
          await fetch('https://formsubmit.co/ajax/info@athayogliving.com', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
               },
               body: JSON.stringify({
                    FormType: 'Registration For Arambha 2023',
                    name,
                    email,
                    phone,
                    age,
                    tshirt,
                    gender,
                    ticketID,
                    location,
                    member
               })
          });
     };

     const sendErrorToMe = async (error) => {
          // Send Email
          // setEvent(true);
          // setLoading(false);
          await fetch(
               'https://formsubmit.co/ajax/harsimransinghbarki@gmail.com',
               {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                         Accept: 'application/json'
                    },
                    body: JSON.stringify({
                         FormType: 'Registration For Arambha 2023',
                         error: JSON.stringify(error)
                    })
               }
          );
     };

     const Ticket = () => {
          return (
               <Flex
                    rounded="md"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    bg="white"
                    boxShadow="base"
                    py={6}
                    px={6}
               >
                    <Box width="full">
                         <Stack
                              textAlign="left"
                              spacing={6}
                              ref={componentRef}
                              py={2}
                              px={2}
                              width="full"
                         >
                              <Text>Namaste {user.name}</Text>
                              <Text>
                                   Congratulations, Your Yoga Arambha Event
                                   Registration is confirmed.
                              </Text>
                              <Text>
                                   We are extremely excited to have you as a
                                   part of this event on International Day of
                                   Yoga
                              </Text>

                              <TableContainer
                                   border="1px solid"
                                   borderColor="gray.100"
                              >
                                   <Table variant="simple" size="sm">
                                        <Thead>
                                             <Tr>
                                                  <Th>TicketID</Th>
                                                  <Th>Name</Th>
                                                  <Th>Location</Th>
                                                  <Th>Date</Th>
                                             </Tr>
                                        </Thead>
                                        <Tbody>
                                             <Tr>
                                                  <Td>{user.ticketID}</Td>
                                                  <Td>{user.name}</Td>
                                                  <Td>
                                                       Defense Colony Ground,
                                                       Indiranagar, Bengaluru
                                                  </Td>
                                                  <Td>
                                                       June 18th, 2023 | Sunday
                                                       5.30 AM - 9:00 AM
                                                  </Td>
                                             </Tr>
                                        </Tbody>
                                   </Table>
                              </TableContainer>
                              <Text>
                                   {' '}
                                   Please show this ticket at the venue -
                                   registration desk to avail your pass.
                              </Text>
                              <Text>From Athayog Living.</Text>
                         </Stack>
                    </Box>
                    <Flex
                         justifyContent="center"
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
                    {/* <Badge mt={5} width="max-content" whiteSpace="pre-wrap">
                         A copy of ticket has been sent to your email
                    </Badge> */}
                    {/* <Text mt={5}>
                         Didn&apos;t receive your mail?{' '}
                         <chakra.span
                              textDecor="underline"
                              cursor="pointer"
                              onClick={() =>
                                   sendEmail(
                                        user.name,
                                        user.email,
                                        user.phone,
                                        user.age,
                                        user.tshirt,
                                        user.gender,
                                        user.ticketID
                                   )
                              }
                         >
                              Click Here
                         </chakra.span>{' '}
                    </Text> */}
               </Flex>
          );
     };

     const Form = () => {
          return (
               <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                    <Heading fontSize="3xl">Register Now</Heading>
                    <Flex
                         gap={10}
                         flexWrap="wrap"
                         rounded="md"
                         py={8}
                         width="full"
                         justifyContent="center"
                         textColor="black"
                         direction="column"
                         bg="white"
                         boxShadow="base"
                         px={5}
                         mt={6}
                    >
                         <FormControl>
                              <FormLabel>
                                   Name{' '}
                                   <chakra.span textColor="red.500">
                                        *
                                   </chakra.span>
                              </FormLabel>
                              <Input
                                   type="text"
                                   bg="white"
                                   name="name"
                                   id="name"
                                   required
                                   variant="outline"
                                   disabled={loading}
                                   placeholder="Your Name"
                                   ref={register({
                                        required: 'Please enter your name.'
                                   })}
                              />
                         </FormControl>
                         <Flex gap={5} direction={['column', 'row']}>
                              {' '}
                              <FormControl>
                                   <FormLabel>
                                        Email
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
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
                                   <FormLabel>
                                        Phone (Whatsapp)
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
                                   <Input
                                        type="tel"
                                        placeholder="Phone Number"
                                        id="phone"
                                        required
                                        variant="outline"
                                        disabled={loading}
                                        bg="white"
                                        name="phone"
                                        ref={register({
                                             required: true
                                        })}
                                   />
                              </FormControl>
                         </Flex>
                         <FormControl>
                              <FormLabel>
                                   Where are you from?{' '}
                                   <chakra.span textColor="red.500">
                                        *
                                   </chakra.span>
                              </FormLabel>
                              <Input
                                   type="text"
                                   placeholder="Area/City"
                                   id="location"
                                   variant="outline"
                                   required
                                   disabled={loading}
                                   bg="white"
                                   name="location"
                                   ref={register({
                                        required: true
                                   })}
                              />
                         </FormControl>
                         <Flex gap={5} direction={['column', 'row']}>
                              <FormControl>
                                   <FormLabel>
                                        Age{' '}
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
                                   <Input
                                        type="number"
                                        placeholder="Your Age"
                                        id="age"
                                        required
                                        variant="outline"
                                        disabled={loading}
                                        bg="white"
                                        name="age"
                                        ref={register({
                                             required: true
                                        })}
                                   />
                              </FormControl>
                              <FormControl>
                                   <FormLabel>
                                        Gender{' '}
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
                                   <Select
                                        placeholder="Select option"
                                        name="gender"
                                        required
                                        disabled={loading}
                                        ref={register({
                                             required: true
                                        })}
                                   >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                   </Select>
                              </FormControl>
                         </Flex>

                         <Flex gap={5} direction={['column', 'row']}>
                              {' '}
                              <FormControl>
                                   <FormLabel>
                                        T Shirt Size{' '}
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
                                   <Select
                                        placeholder="Select option"
                                        disabled={loading}
                                        required
                                        name="tshirt"
                                        ref={register({
                                             required: true
                                        })}
                                   >
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="XXXL">XXXL</option>
                                   </Select>
                              </FormControl>
                              <FormControl>
                                   <FormLabel>
                                        Member Of Athayog?
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
                                   <Select
                                        placeholder="Select option"
                                        disabled={loading}
                                        required
                                        name="member"
                                        ref={register({
                                             required: true
                                        })}
                                   >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                   </Select>
                              </FormControl>
                         </Flex>

                         <Button
                              rounded="md"
                              colorScheme="green"
                              type="submit"
                              id="submitButton"
                              isLoading={loading}
                              loadingText="submitting.."
                              width="xs"
                              alignSelf="flex-end"
                         >
                              Submit
                         </Button>
                    </Flex>
               </Box>
          );
     };
     return (
          <Box bg="gray.50">
               <NavbarHelper />
               <Container
                    maxW="container.lg"
                    justifySelf="right"
                    textColor="black"
                    rounded="none"
                    overflow="hidden"
                    minH="100vw"
                    py={20}
               >
                    {event ? <Ticket /> : <Form />}
               </Container>
          </Box>
     );
}

export default EventRegister;

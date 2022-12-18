import { registerForJayanti } from '@/lib/db/forms';
import {
     Box,
     Button,
     chakra,
     Checkbox,
     CheckboxGroup,
     Container,
     Flex,
     FormControl,
     FormLabel,
     Heading,
     Input,
     Select,
     Stack,
     Table,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { IoArrowBackCircle } from 'react-icons/io5';
import { useReactToPrint } from 'react-to-print';
function EventRegister() {
     const [loading, setLoading] = useState(false);
     const [fields, setFields] = useState();

     // {
     //      ticketID: 'ATHAY-01',
     //      name: 'Harsimran Singh Barki',
     //      email: 'harsimran.barki@gmail.com',
     //      phone: '(555) 555-5555',
     //      age: 30,
     //      tshirt: '2xl',
     //      gender: 'Male',
     //      location: 'Bangalore',
     //      member: 'Yes',
     //      events: ['Yogathon', 'Marathon']
     // }

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
          member,
          events
     }) => {
          setLoading(true);
          const ticketID =
               'ATHAYOG-' +
               (
                    name.substring(0, 1) + uuidv4().toString().substring(0, 6)
               ).toUpperCase();
          console.log(
               name,
               email,
               phone,
               age,
               tshirt,
               gender,
               ticketID,
               location,
               member,
               events
          );

          await registerForJayanti(
               name,
               email,
               phone,
               age,
               tshirt,
               gender,
               ticketID,
               location,
               member,
               events
          )
               .then((response) => {
                    setLoading(false);
                    toast.success('Submission Successfull');
                    setFields({
                         name,
                         email,
                         phone,
                         age,
                         tshirt,
                         gender,
                         ticketID,
                         location,
                         member,
                         events
                    });
               })
               .catch((error) => {
                    setLoading(false);
                    toast.error('Something Happended Try Again');
               });
     };

     return (
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
                         >
                              Back
                         </Button>
                    </Link>
                    {Object.keys(fields).length != 0 ? (
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
                                             <Text> Namaste {fields.name}</Text>
                                             <Text>
                                                  Congratulations, Your Swami
                                                  Vivekananda Jayanti Event
                                                  Registration is confirmed.
                                             </Text>
                                             <Text>
                                                  We are extremely excited to
                                                  have you as a part of this
                                                  event
                                             </Text>
                                             <Table variant="simple" size="sm">
                                                  <Thead>
                                                       <Tr>
                                                            <Th>TicketID</Th>
                                                            <Th>Name</Th>
                                                            <Th>Location</Th>
                                                            <Th>Date</Th>
                                                            <Th>Events</Th>
                                                       </Tr>
                                                  </Thead>
                                                  <Tbody>
                                                       <Tr>
                                                            <Td>
                                                                 {
                                                                      fields.ticketID
                                                                 }
                                                            </Td>
                                                            <Td>
                                                                 {fields.name}
                                                            </Td>
                                                            <Td>
                                                                 Athayog Living
                                                                 Indiranagar
                                                            </Td>
                                                            <Td>
                                                                 5:00 am
                                                                 onwards, 12th
                                                                 January 2023
                                                            </Td>
                                                            <Td>
                                                                 {fields.events.map(
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
                                                  Please show this ticket at the
                                                  venue - registration desk to
                                                  avail your pass.
                                             </Text>
                                             <Text>From Athayog Living.</Text>
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
                    ) : (
                         <Flex
                              width="100%"
                              justifyContent="center"
                              alignItems="center"
                              direction="column"
                         >
                              <Toaster position="bottom-center" />
                              <Box
                                   as="form"
                                   onSubmit={handleSubmit(onSubmit)}
                                   width="100%"
                              >
                                   <Heading fontSize="3xl">
                                        Register Now
                                   </Heading>
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
                                                       required:
                                                            'Please enter your name.'
                                                  })}
                                             />
                                        </FormControl>
                                        <Flex
                                             gap={5}
                                             direction={['column', 'row']}
                                        >
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
                                        <Flex
                                             gap={5}
                                             direction={['column', 'row']}
                                        >
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
                                                       <option value="male">
                                                            Male
                                                       </option>
                                                       <option value="female">
                                                            Female
                                                       </option>
                                                       <option value="other">
                                                            Other
                                                       </option>
                                                  </Select>
                                             </FormControl>
                                        </Flex>
                                        {/* <ReactSelect options={options} /> */}
                                        <Flex
                                             gap={5}
                                             direction={['column', 'row']}
                                        >
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
                                                       <option value="XS">
                                                            XS
                                                       </option>
                                                       <option value="S">
                                                            S
                                                       </option>
                                                       <option value="M">
                                                            M
                                                       </option>
                                                       <option value="L">
                                                            L
                                                       </option>
                                                       <option value="XL">
                                                            XL
                                                       </option>
                                                       <option value="XXL">
                                                            XXL
                                                       </option>
                                                       <option value="XXXL">
                                                            XXXL
                                                       </option>
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
                                                       <option value="Yes">
                                                            Yes
                                                       </option>
                                                       <option value="No">
                                                            No
                                                       </option>
                                                  </Select>
                                             </FormControl>
                                        </Flex>

                                        <FormControl>
                                             <FormLabel>
                                                  Events You Are Interested In
                                             </FormLabel>
                                             <CheckboxGroup
                                                  direction="column"
                                                  ref={register({
                                                       required: true
                                                  })}
                                                  name="events"
                                             >
                                                  <Stack direction="column">
                                                       <Checkbox
                                                            ref={register}
                                                            value="Marathon"
                                                            name="events"
                                                       >
                                                            Marathon
                                                       </Checkbox>
                                                       <Checkbox
                                                            ref={register}
                                                            value="Yogathon"
                                                            name="events"
                                                       >
                                                            Yogathon
                                                       </Checkbox>
                                                       <Checkbox
                                                            ref={register}
                                                            value="Discourse of Swami vivekananda by
                                             Athayog Founder"
                                                            name="events"
                                                       >
                                                            {' '}
                                                            Discourse of Swami
                                                            vivekananda by
                                                            Athayog Founder
                                                       </Checkbox>
                                                       <Checkbox
                                                            ref={register}
                                                            value="Talent showcasing or Competition of
                                             Residing Swami Vivekananda's
                                             Quote and Explaining in their own
                                             perspective."
                                                            name="events"
                                                       >
                                                            Talent showcasing or
                                                            Competition of
                                                            Residing Swami
                                                            Vivekananda&apos;s
                                                            Quote and Explaining
                                                            in their own
                                                            perspective.
                                                       </Checkbox>
                                                       <Checkbox
                                                            ref={register}
                                                            value="Yoga for Differently abled people"
                                                            name="events"
                                                       >
                                                            {' '}
                                                            Yoga for Differently
                                                            abled people
                                                       </Checkbox>
                                                       <Checkbox
                                                            ref={register}
                                                            value="Yoga classes for Youth empowerment
                                             employees"
                                                            name="events"
                                                       >
                                                            {' '}
                                                            Yoga classes for
                                                            Youth empowerment
                                                            employees
                                                       </Checkbox>
                                                       <Checkbox
                                                            ref={register}
                                                            value="Chanting and special pooja for
                                             Swami vivekananda"
                                                            name="events"
                                                       >
                                                            {' '}
                                                            Chanting and special
                                                            pooja for Swami
                                                            vivekananda
                                                       </Checkbox>
                                                       <Checkbox
                                                            ref={register}
                                                            value="Cultural activities"
                                                            name="events"
                                                       >
                                                            {' '}
                                                            Cultural activities
                                                       </Checkbox>
                                                  </Stack>
                                             </CheckboxGroup>
                                        </FormControl>

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
                                             Register
                                        </Button>
                                   </Flex>
                              </Box>
                         </Flex>
                    )}
               </Container>
          </Box>
     );
}

export default EventRegister;

import React, { useState } from 'react';
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
import { useToaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function Register() {
     const toast = useToaster();
     const [loading, setLoading] = useState(false);
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
     };
     return (
          <Flex maxW="100%" justifyContent="center" py={20}>
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
          </Flex>
     );
}

export default Register;

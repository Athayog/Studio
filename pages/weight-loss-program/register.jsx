import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { registerForWeightLoss, sendToAthayog } from '@/lib/db/forms';

// pages/index.js
import { ChakraProvider, Box, FormControl, FormLabel, Input, Select, Button, FormErrorMessage, Flex, Textarea, Text, Spinner, Alert, AlertIcon, Badge } from '@chakra-ui/react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function RegisterYoga() {
     const { handleSubmit, register, errors, reset } = useForm();
     const [loading, setLoading] = useState(false);

     const onSubmit = async (data) => {
          setLoading(true)
          registerAndSend(data)
               .then((finalResult) => {
                    toast.success('Registration successful. Redirecting to Razorpay Please wait...');
                    setLoading(false);
                    reset();
                    setTimeout(() => {
                         window.location.href = 'https://rzp.io/l/3Udj4d9b';
                    }, 1000);
               })
               .catch((error) => {
                    // Handle any errors that occurred during the process
                    setLoading(false);

                    toast.error('Something happend try again');
               });
     };

     async function registerAndSend(data) {
          try {
               // Call the first function
               const result1 = await registerForWeightLoss(data);

               // Assuming registerForAcademy resolves with some result needed for sendToAthayog
               const result2 = await sendToAthayog(data);

               // You can return the final result if needed
               return result2;
          } catch (error) {
               // Handle any errors that occurred during the process

               throw error; // Re-throw the error if necessary
          }
     }

     return (
          <div>
               <Box py={10} bg="gray.50">
                    <Toaster position="bottom-center" />
                    <NavbarHelper />

                    <ChakraProvider>
                         <Box bg="white" p={10} maxW="50vw" margin="0 auto" boxShadow="base" rounded="sm">
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <FormControl mb={4} isInvalid={errors.name}>
                                        <FormLabel>Name:</FormLabel>
                                        <Input type="text" name="name" ref={register({ required: 'Name is required' })} />
                                        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                                   </FormControl>
                                   <FormControl mb={4} isInvalid={errors.phoneNumber}>
                                        <FormLabel>Phone number:</FormLabel>
                                        <Input
                                             type="number"
                                             name="phoneNumber"
                                             ref={register({
                                                  required: 'Phone number is required',
                                                  pattern: {
                                                       value: /^[0-9]{10}$/,
                                                       message: 'Please enter a valid 10-digit phone number'
                                                  }
                                             })}
                                        />
                                        <FormErrorMessage>{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
                                   </FormControl>
                                   <FormControl mb={4} isInvalid={errors.email}>
                                        <FormLabel>Email ID:</FormLabel>
                                        <Input type="email" name="email" ref={register({ required: 'Email ID is required' })} />
                                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                                   </FormControl>

                                   <Flex gap={{ base: '2', md: '10' }} direction={{ base: 'column', md: 'row' }}>
                                        <FormControl mb={4} isInvalid={errors.qualification}>
                                             <FormLabel>Weight:</FormLabel>
                                             <Input type="text" name="weight" ref={register({ required: 'Weight is required' })} />
                                             <FormErrorMessage>{errors.weight && errors.weight.message}</FormErrorMessage>
                                        </FormControl>
                                        <FormControl mb={4} isInvalid={errors.gender}>
                                             <FormLabel>Gender:</FormLabel>
                                             <Select name="gender" ref={register({ required: 'Gender is required' })}>
                                                  <option value="male">Male</option>
                                                  <option value="female">Female</option>
                                                  <option value="other">Other</option>
                                             </Select>
                                             <FormErrorMessage>{errors.gender && errors.gender.message}</FormErrorMessage>
                                        </FormControl>
                                   </Flex>
                                   <Flex gap={{ base: '2', md: '10' }} direction={{ base: 'column', md: 'row' }}>
                                        <FormControl mb={4} isInvalid={errors.location}>
                                             <FormLabel>Location:</FormLabel>
                                             <Input type="text" name="height" ref={register({ required: 'Height is required' })} />
                                             <FormErrorMessage>{errors.height && errors.height.message}</FormErrorMessage>
                                        </FormControl>
                                   </Flex>
                                   <FormControl mb={4} isInvalid={errors.previousYogaExperience}>
                                        <FormLabel>Healt Conditions:</FormLabel>
                                        <Textarea name="healthConditions" ref={register()} />
                                        <FormErrorMessage>{errors.healthConditions && errors.healthConditions.message}</FormErrorMessage>
                                   </FormControl>

                                   <Button width="full" loadingText="Submitting..." isLoading={loading} type="submit" colorScheme="teal" rounded="lg">
                                        Register
                                   </Button>
                              </form>
                         </Box>
                    </ChakraProvider>
               </Box>
          </div>
     );
}

export default RegisterYoga;

RegisterYoga.Layout = HomeLayout;

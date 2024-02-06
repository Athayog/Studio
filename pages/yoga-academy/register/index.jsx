import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { registerForAcademy, sendToAthayog } from '@/lib/db/forms';

// pages/index.js
import { ChakraProvider, Box, FormControl, FormLabel, Input, Select, Button, FormErrorMessage, Flex, Textarea, Text, Spinner, Alert, AlertIcon, Badge } from "@chakra-ui/react";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function RegisterYoga() {
    const { handleSubmit, register, errors,reset } = useForm();
    const [loading, setLoading] = useState(false)


    const onSubmit = async (data) => {
        setLoading(true)
        registerAndSend(data)
            .then(finalResult => {
                toast.success('Registration successful. Redirecting to Razorpay Please wait...'); 
                setLoading(false)
                reset()
                setTimeout(() => {
                    window.location.href = 'https://rzp.io/l/AefUZIuY2W'
                }, 1000);
                
            })
            .catch(error => {
                // Handle any errors that occurred during the process
                setLoading(false)
               
                toast.error('Something happend try again');

            });
    };



    async function registerAndSend(data) {
        try {
            // Call the first function
            const result1 = await registerForAcademy(data);

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
            <Box>
                <Toaster position="bottom-center" />
                <NavbarHelper />
               
                <ChakraProvider>
                    <Box p={10}>
                        <Box mb={6}>
                            <Text p={2} fontSize='12px' bg='green.100' color="green.800" textTransform='uppercase' fontWeight='bold'>   WEEKEND :- Batch 01 = Feb 17th TO May 19th 2024</Text>
                            <Text p={2} fontSize='12px' bg='green.100' color="green.800" textTransform='uppercase' fontWeight='bold'>   
                            WEEKDAY : - March 11th to May 10th               
    </Text>                    
                        </Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex gap={{ base: '2', md: "10" }} direction={{ base: 'column', md: 'row' }}>
                                <FormControl mb={4} isInvalid={errors.name}>
                                    <FormLabel>Name:</FormLabel>
                                    <Input
                                        type="text"
                                        name="name"
                                        ref={register({ required: 'Name is required' })}
                                    />
                                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                                </FormControl>

                                <FormControl mb={4} isInvalid={errors.phoneNumber}>
                                    <FormLabel>Phone number:</FormLabel>
                                    <Input
                                        type="number"
                                        name="phoneNumber"
                                        ref={register({ required: 'Phone number is required' })}
                                    />
                                    <FormErrorMessage>{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Flex gap={{ base: '2', md: "10" }} direction={{ base: 'column', md: 'row' }}>
                                <FormControl mb={4} isInvalid={errors.email}>
                                    <FormLabel>Email ID:</FormLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        ref={register({ required: 'Email ID is required' })}
                                    />
                                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                                </FormControl>

                                <FormControl mb={4} isInvalid={errors.gender}>
                                    <FormLabel>Gender:</FormLabel>
                                    <Select
                                        name="gender"
                                        ref={register({ required: 'Gender is required' })}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Select>
                                    <FormErrorMessage>{errors.gender && errors.gender.message}</FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Flex gap={{ base: '2', md: "10" }} direction={{ base: 'column', md: 'row' }}>
                                <FormControl mb={4} isInvalid={errors.qualification}>
                                    <FormLabel>Qualification:</FormLabel>
                                    <Input
                                        type="text"
                                        name="qualification"
                                        ref={register({ required: 'Qualification is required' })}
                                    />
                                    <FormErrorMessage>{errors.qualification && errors.qualification.message}</FormErrorMessage>
                                </FormControl>

                                <FormControl mb={4} isInvalid={errors.location}>
                                    <FormLabel>Location:</FormLabel>
                                    <Input
                                        type="text"
                                        name="location"
                                        ref={register({ required: 'Location is required' })}
                                    />
                                    <FormErrorMessage>{errors.location && errors.location.message}</FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <FormControl mb={4} isInvalid={errors.previousYogaExperience}>
                                <FormLabel>Previous yoga experience:</FormLabel>
                                <Textarea
                                    name="previousYogaExperience"
                                    ref={register({ required: 'Previous yoga experience is required' })}
                                />
                                <FormErrorMessage>{errors.previousYogaExperience && errors.previousYogaExperience.message}</FormErrorMessage>
                            </FormControl>

                            <Button  loadingText='Submitting...' isLoading={loading} type="submit" colorScheme="teal" rounded='lg'>
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
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
     Box,
     Button,
     FormControl,
     FormLabel,
     FormErrorMessage,
     Input,
     Select,
     VStack,
     Heading,
     Flex
} from '@chakra-ui/react';
import { EmailTemplate } from '@/components/EmailTemplate';
import { registerForIDY2024 } from '@/lib/db/forms';

const Register = () => {
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
          setValue,
          clearErrors
     } = useForm();
     const [showMembershipNumber, setShowMembershipNumber] = useState(false);

     const allFields = watch();

     useEffect(() => {
          if (allFields.category === 'indiranagar_club_member') {
               setShowMembershipNumber(true);
          } else {
               setShowMembershipNumber(false);
               setValue('membershipNumber', '');
               clearErrors('membershipNumber');
          }
     }, [allFields.category, setValue, clearErrors]);

     const onSubmit = async (data) => {
          try {
               const ticketID = `ATHAYOG2024-${Date.now()}`; // Generate a ticket ID
               data.ticketID = ticketID
               await registerForIDY2024(
                    ticketID,
                    data.name,
                    data.phone,
                    data.email,
                    data.gender,
                    data.age,
                    data.tshirt,
                    data.category,
                    data.membershipNumber ? data.membershipNumber : null
               );

               const response = await fetch('/api/email/send', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
               });

               if (response.ok) {
                    console.log('Email sent successfully');
               } else {
                    console.error('Failed to send email');
               }
          } catch (error) {
               console.error('Error:', error);
          }
     };

     return (
          <>
               <Flex
                    justify="center"
                    align="center"
                    minHeight="100vh"
                    bg="gray.50"
               >
                    <Box
                         width="full"
                         maxW="lg"
                         mx="auto"
                         p={8}
                         borderWidth={1}
                         borderRadius="lg"
                         bg="white"
                         boxShadow="lg"
                    >
                         <Heading as="h1" mb={6} textAlign="center">
                              Registration Form
                         </Heading>
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <VStack spacing={4} align="stretch">
                                   <FormControl isInvalid={errors.name}>
                                        <FormLabel htmlFor="name">
                                             Name
                                        </FormLabel>
                                        <Input
                                             id="name"
                                             name="name"
                                             ref={register({ required: true })}
                                        />
                                        <FormErrorMessage>
                                             {errors.name && 'Name is required'}
                                        </FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.phone}>
                                        <FormLabel htmlFor="phone">
                                             Phone number
                                        </FormLabel>
                                        <Input
                                             id="phone"
                                             name="phone"
                                             ref={register({
                                                  required: true,
                                                  pattern: /^[0-9]{10}$/
                                             })}
                                        />
                                        <FormErrorMessage>
                                             {errors.phone &&
                                                  'Phone number is required and should be 10 digits'}
                                        </FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.email}>
                                        <FormLabel htmlFor="email">
                                             Email ID
                                        </FormLabel>
                                        <Input
                                             id="email"
                                             name="email"
                                             ref={register({
                                                  required: true,
                                                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                             })}
                                        />
                                        <FormErrorMessage>
                                             {errors.email &&
                                                  'Email ID is required and should be valid'}
                                        </FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.gender}>
                                        <FormLabel htmlFor="gender">
                                             Gender
                                        </FormLabel>
                                        <Select
                                             id="gender"
                                             name="gender"
                                             ref={register({ required: true })}
                                        >
                                             <option value="">
                                                  Select Gender
                                             </option>
                                             <option value="male">Male</option>
                                             <option value="female">
                                                  Female
                                             </option>
                                             <option value="other">
                                                  Other
                                             </option>
                                        </Select>
                                        <FormErrorMessage>
                                             {errors.gender &&
                                                  'Gender is required'}
                                        </FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.age}>
                                        <FormLabel htmlFor="age">Age</FormLabel>
                                        <Input
                                             id="age"
                                             name="age"
                                             type="number"
                                             ref={register({
                                                  required: true,
                                                  min: 18,
                                                  max: 99
                                             })}
                                        />
                                        <FormErrorMessage>
                                             {errors.age &&
                                                  'Age is required and must be between 18 and 99'}
                                        </FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.tshirt}>
                                        <FormLabel htmlFor="tshirt">
                                             T shirt size
                                        </FormLabel>
                                        <Select
                                             id="tshirt"
                                             name="tshirt"
                                             ref={register({ required: true })}
                                        >
                                             <option value="">
                                                  Select Size
                                             </option>
                                             <option value="xs">XS</option>
                                             <option value="s">S</option>
                                             <option value="m">M</option>
                                             <option value="l">L</option>
                                             <option value="xl">XL</option>
                                             <option value="xxl">XXL</option>
                                             <option value="xxxl">XXXL</option>
                                        </Select>
                                        <FormErrorMessage>
                                             {errors.tshirt &&
                                                  'T-Shirt size is required'}
                                        </FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.category}>
                                        <FormLabel htmlFor="category">
                                             Choose below Category
                                        </FormLabel>
                                        <Select
                                             id="category"
                                             name="category"
                                             ref={register({ required: true })}
                                        >
                                             <option value="">
                                                  Select Category
                                             </option>
                                             <option value="indiranagar_club_member">
                                                  Indiranagar Club member
                                             </option>
                                             <option value="athayog_member">
                                                  Athayog Member
                                             </option>
                                             <option value="general_public">
                                                  General Public
                                             </option>
                                        </Select>
                                        <FormErrorMessage>
                                             {errors.category &&
                                                  'Category is required'}
                                        </FormErrorMessage>
                                   </FormControl>

                                   {showMembershipNumber && (
                                        <FormControl
                                             isInvalid={errors.membershipNumber}
                                        >
                                             <FormLabel htmlFor="membershipNumber">
                                                  Membership Number
                                             </FormLabel>
                                             <Input
                                                  id="membershipNumber"
                                                  name="membershipNumber"
                                                  ref={register({
                                                       required:
                                                            showMembershipNumber
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.membershipNumber &&
                                                       'Membership Number is required'}
                                             </FormErrorMessage>
                                        </FormControl>
                                   )}

                                   <Button
                                        type="submit"
                                        colorScheme="teal"
                                        size="lg"
                                        width="full"
                                   >
                                        Register
                                   </Button>
                              </VStack>
                         </form>
                    </Box>
               </Flex>
          </>
     );
};

export default Register;

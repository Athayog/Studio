import { useForm } from 'react-hook-form';
import {
     FormErrorMessage,
     FormLabel,
     FormControl,
     Input,
     Button,
     Box,
     Textarea,
     Select,
     Stack,
     Text,
     Divider,
     Flex
} from '@chakra-ui/react';

export default function HookForm() {
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors }
     } = useForm();
     const onSubmit = (data) => console.log(data);

     console.log(errors);
     console.log(watch('name'));

     return (
          <Box
               bg="white"
               boxShadow="base"
               py={6}
               px={6}
               rounded="base"
               maxW={{ base: '95vw', md: '80vw', lg: '60vw' }}
               margin="0 auto"
               id="apply"
          >
               <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={5}>
                         <Text fontSize="lg" textColor="black">
                              Personal Information
                         </Text>
                         <FormControl isInvalid={errors.name}>
                              <FormLabel textColor="gray.600" htmlFor="name">
                                   Full Name
                              </FormLabel>
                              <Input
                                   boxShadow="sm"
                                   type="text"
                                   name="name"
                                   ref={register({
                                        required: 'This is required',
                                        minLength: {
                                             value: 5,
                                             message: 'Minimum length should be 5'
                                        }
                                   })}
                              />
                              <FormErrorMessage>
                                   {errors.name && errors.name.message}
                              </FormErrorMessage>
                         </FormControl>
                         <Stack
                              direction={{ base: 'column', md: 'row' }}
                              spacing={5}
                         >
                              <FormControl isInvalid={errors.email}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="email"
                                   >
                                        Email Address
                                   </FormLabel>
                                   <Input
                                        name="email"
                                        boxShadow="sm"
                                        type="email"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                   </FormErrorMessage>
                              </FormControl>
                              <FormControl isInvalid={errors.phone}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="phone"
                                   >
                                        Phone Number
                                   </FormLabel>
                                   <Input
                                        boxShadow="sm"
                                        name="number"
                                        type="number"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.phone && errors.phone.message}
                                   </FormErrorMessage>
                              </FormControl>
                         </Stack>
                         <FormControl isInvalid={errors.location}>
                              <FormLabel
                                   textColor="gray.600"
                                   htmlFor="location"
                              >
                                   Current Location
                              </FormLabel>
                              <Input
                                   boxShadow="sm"
                                   name="location"
                                   type="text"
                                   ref={register({
                                        required: 'This is required'
                                   })}
                              />
                              <FormErrorMessage>
                                   {errors.location && errors.location.message}
                              </FormErrorMessage>
                         </FormControl>
                         <Box>
                              <Divider my={3} />
                         </Box>
                         <Text fontSize="lg" textColor="black">
                              Work Information
                         </Text>
                         <FormControl isInvalid={errors.designation}>
                              <FormLabel
                                   textColor="gray.600"
                                   htmlFor="designation"
                              >
                                   Designation Applying For
                              </FormLabel>
                              <Select
                                   name="desigation"
                                   ref={register({
                                        required: 'This is required'
                                   })}
                              >
                                   <option
                                        value="Yoga Teacher
"
                                   >
                                        Yoga Teacher
                                   </option>
                                   <option value="Center Manager">
                                        Center Manager
                                   </option>
                              </Select>
                              <FormErrorMessage>
                                   {errors.designation &&
                                        errors.designation.message}
                              </FormErrorMessage>
                         </FormControl>
                         <Stack
                              direction={{ base: 'column', md: 'row' }}
                              spacing={5}
                         >
                              {' '}
                              <FormControl isInvalid={errors.current_company}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="current_company"
                                   >
                                        Current Company
                                   </FormLabel>
                                   <Input
                                        name="current_company"
                                        boxShadow="sm"
                                        type="text"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.current_company &&
                                             errors.current_company.message}
                                   </FormErrorMessage>
                              </FormControl>
                              <FormControl isInvalid={errors.experience}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="experience"
                                   >
                                        Experience In Years
                                   </FormLabel>
                                   <Input
                                        boxShadow="sm"
                                        name="experience"
                                        type="number"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.experience &&
                                             errors.experience.message}
                                   </FormErrorMessage>
                              </FormControl>
                         </Stack>
                         <Stack
                              direction={{ base: 'column', md: 'row' }}
                              spacing={5}
                         >
                              {' '}
                              <FormControl isInvalid={errors.current_ctc}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="current_ctc"
                                   >
                                        Current CTC
                                   </FormLabel>
                                   <Input
                                        boxShadow="sm"
                                        name="current_ctc"
                                        type="number"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.current_ctc &&
                                             errors.current_ctc.message}
                                   </FormErrorMessage>
                              </FormControl>
                              <FormControl isInvalid={errors.expected_ctc}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="expected_ctc"
                                   >
                                        Expected CTC
                                   </FormLabel>
                                   <Input
                                        boxShadow="sm"
                                        type="number"
                                        name="expected_ctc"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.expected_ctc &&
                                             errors.expected_ctc.message}
                                   </FormErrorMessage>
                              </FormControl>
                         </Stack>
                         <Stack
                              direction={{ base: 'column', md: 'row' }}
                              spacing={5}
                         >
                              {' '}
                              <FormControl isInvalid={errors.notice_period}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="notice_period"
                                   >
                                        Notice Period
                                   </FormLabel>
                                   <Input
                                        boxShadow="sm"
                                        type="text"
                                        name="notice_period"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.notice_period &&
                                             errors.notice_period.message}
                                   </FormErrorMessage>
                              </FormControl>
                              <FormControl isInvalid={errors.relocate}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="relocate"
                                   >
                                        Willing To Relocate
                                   </FormLabel>
                                   <Select
                                        name="relocate"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   >
                                        <option
                                             value="Yes
"
                                        >
                                             Yes
                                        </option>
                                        <option value="No">No</option>
                                   </Select>
                                   <FormErrorMessage>
                                        {errors.relocate &&
                                             errors.relocate.message}
                                   </FormErrorMessage>
                              </FormControl>
                         </Stack>
                         <Stack
                              direction={{ base: 'column', md: 'row' }}
                              spacing={5}
                         >
                              {' '}
                              <FormControl isInvalid={errors.offer}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="offer"
                                   >
                                        Any Offer In Hand?
                                   </FormLabel>
                                   <Input
                                        boxShadow="sm"
                                        type="text"
                                        name="offer"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.offer && errors.offer.message}
                                   </FormErrorMessage>
                              </FormControl>
                              <FormControl isInvalid={errors.flexible}>
                                   <FormLabel
                                        textColor="gray.600"
                                        htmlFor="flexible"
                                   >
                                        Are you flexible with split shift?
                                   </FormLabel>
                                   <Input
                                        boxShadow="sm"
                                        name="flexible"
                                        type="text"
                                        ref={register({
                                             required: 'This is required'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.flexible &&
                                             errors.flexible.message}
                                   </FormErrorMessage>
                              </FormControl>
                         </Stack>
                         <FormControl isInvalid={errors.questions}>
                              <FormLabel
                                   textColor="gray.600"
                                   htmlFor="questions"
                              >
                                   If Any questions Comment here:
                              </FormLabel>
                              <Textarea
                                   type="text"
                                   name="questions"
                                   ref={register({
                                        required: 'This is required'
                                   })}
                              />
                              <FormErrorMessage>
                                   {errors.questions &&
                                        errors.questions.message}
                              </FormErrorMessage>
                         </FormControl>{' '}
                         <FormControl isInvalid={errors.resume}>
                              <FormLabel textColor="gray.600" htmlFor="resume">
                                   Upload Resume
                              </FormLabel>

                              <input
                                   boxShadow="sm"
                                   name="resume"
                                   type="file"
                                   ref={register({
                                        required: 'This is required'
                                   })}
                              />
                              <FormErrorMessage>
                                   {errors.resume && errors.resume.message}
                              </FormErrorMessage>
                         </FormControl>
                         <Flex justifyContent="flex-end">
                              <Button
                                   mt={4}
                                   size="md"
                                   rounded="sm"
                                   maxW="fit-content"
                                   colorScheme="facebook"
                                   type="submit"
                              >
                                   Submit
                              </Button>
                         </Flex>
                    </Stack>
               </Box>
          </Box>
     );
}

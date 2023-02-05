import { ChevronDownIcon, LinkIcon } from '@chakra-ui/icons';
import {
     Box,
     Button,
     chakra,
     Checkbox,
     CheckboxGroup,
     Divider,
     Flex,
     FormControl,
     FormErrorMessage,
     FormLabel,
     Heading,
     Input,
     Link,
     Radio,
     RadioGroup,
     Select,
     SimpleGrid,
     Stack,
     Text,
     Textarea
} from '@chakra-ui/react';
import Image from 'next/image';
import RetreatHero from 'public/retreat-hero.jpg';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import NavbarHelper from '../shared/NavbarHelper';
function Register({ heroImage }) {
     const [loading, setLoading] = useState(false);
     const { handleSubmit, register, errors, reset } = useForm();
     return (
          <>
               <Flex
                    justifyContent="center"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    direction="column"
                    textColor="white"
                    position="relative"
                    py={10}
                    bg="
               black"
                    background="linear-gradient(to bottom,rgba(0,0,0,0.9) 10%,rgba(0,0,0,0.9))"
               >
                    <Box zIndex={-1}>
                         <Image
                              src={heroImage}
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                         />
                    </Box>

                    <Box
                         width={{ base: '100%', lg: 'container.lg' }}
                         position={{ base: 'relative' }}
                         textAlign="center"
                         p={{ base: '5', md: '10' }}
                    >
                         <Stack spacing={5}>
                              <Heading
                                   fontSize={{
                                        base: '2xl',
                                        md: '2xl',
                                        lg: '3xl'
                                   }}
                                   fontWeight="bold"
                                   textColor="white"
                              >
                                   Register Now
                              </Heading>
                         </Stack>

                         <Flex
                              gap={5}
                              justifyContent="center"
                              border="1px solid"
                              mt={2}
                              rounded="sm"
                              p={2}
                              borderColor="white"
                         >
                              Get 2 FREE trial classes and sign up for our
                              monthly packages! Grab the Exclusive Launch Offer
                              NOW!
                         </Flex>
                         <Box
                              bg="gray.500"
                              rounded="lg"
                              textAlign="center"
                              mt={{ base: 2, md: 5, lg: 10 }}
                              padding={8}
                              width="100%"
                              boxshadow="base"
                         >
                              <Stack spacing={5}>
                                   <SimpleGrid
                                        minChildWidth={{
                                             base: '200px',
                                             md: '300px',
                                             lg: '400px'
                                        }}
                                        spacing="20px"
                                        width="100%"
                                   >
                                        <FormControl id="name">
                                             <FormLabel>Full Name</FormLabel>
                                             <Input
                                                  type="name"
                                                  name="name"
                                                  ref={register({
                                                       required:
                                                            'Please enter your name.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.name &&
                                                       errors.name.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="phone">
                                             <FormLabel>Phone Number</FormLabel>
                                             <Input
                                                  type="number"
                                                  name="phone"
                                                  ref={register({
                                                       required:
                                                            'Please enter your number.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.phone &&
                                                       errors.phone.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="email">
                                             <FormLabel>Email</FormLabel>
                                             <Input
                                                  type="email"
                                                  name="email"
                                                  ref={register({
                                                       required:
                                                            'Please enter your email.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.email &&
                                                       errors.email.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="gender">
                                             <FormLabel>Gender</FormLabel>
                                             <Select
                                                  placeholder="Select option"
                                                  name="gender"
                                                  ref={register({
                                                       required:
                                                            'Please select your gender.'
                                                  })}
                                             >
                                                  <option value="Male">
                                                       Male
                                                  </option>
                                                  <option value="Female">
                                                       Female
                                                  </option>
                                                  <option value="Other">
                                                       Other
                                                  </option>
                                             </Select>
                                             <FormErrorMessage>
                                                  {errors.gender &&
                                                       errors.gender.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                   </SimpleGrid>
                                   <FormControl id="experience">
                                        <FormLabel>
                                             Previous yoga experience
                                        </FormLabel>
                                        <Textarea
                                             name="experience"
                                             ref={register({
                                                  required:
                                                       'Please fill your yoga experience.'
                                             })}
                                        />
                                        <FormErrorMessage>
                                             {errors.experience &&
                                                  errors.experience.message}
                                        </FormErrorMessage>
                                   </FormControl>
                                   <FormControl id="style">
                                        <FormLabel>Style of yoga</FormLabel>
                                        <Textarea
                                             name="style"
                                             ref={register({
                                                  required:
                                                       'Please fill your style of yoga.'
                                             })}
                                        />
                                        <FormErrorMessage>
                                             {errors.style &&
                                                  errors.style.message}
                                        </FormErrorMessage>
                                   </FormControl>
                                   <Divider
                                        variant="dashed"
                                        colorScheme="blue"
                                        width="100%"
                                   />

                                   <FormControl id="course">
                                        <FormLabel>Course Interested</FormLabel>
                                        <Select
                                             placeholder="Select a option"
                                             ref={register({
                                                  required:
                                                       'Please select your course.'
                                             })}
                                             name="course"
                                             isReadOnly
                                             value={'Trial'}
                                             disabled
                                        >
                                             <option value="Space">
                                                  AthaYog Space
                                             </option>
                                             <option value="Shikshana Pada">
                                                  AthaYog Shikshana Pada
                                             </option>
                                             <option value="Chikitsa">
                                                  AthaYog Chikitsa
                                             </option>
                                             <option value="Online">
                                                  AthaYog Online
                                             </option>
                                             <option value="Personal">
                                                  AthaYog Personal
                                             </option>
                                             <option value="Workshops">
                                                  AthaYog Workshops
                                             </option>
                                             <option value="Onsite">
                                                  AthaYog Onsite
                                             </option>
                                             <option value="Trial">
                                                  Free Trial
                                             </option>
                                        </Select>
                                        <FormErrorMessage>
                                             {errors.course &&
                                                  errors.course.message}
                                        </FormErrorMessage>
                                   </FormControl>
                                   <FormControl id="conditions">
                                        <FormLabel>
                                             Health and medical conditions
                                        </FormLabel>
                                        <CheckboxGroup
                                             colorScheme="green"
                                             defaultValue={[
                                                  'Spine/Joint',
                                                  'Heart',
                                                  'Neurological/Psychological',
                                                  'Others'
                                             ]}
                                             name="conditions"
                                        >
                                             <Stack
                                                  direction={{
                                                       base: 'column',
                                                       md: 'column',
                                                       lg: 'row'
                                                  }}
                                             >
                                                  <Checkbox
                                                       value="Spine/Joint"
                                                       name="conditions"
                                                       ref={register}
                                                  >
                                                       Spine/Joint Related
                                                  </Checkbox>
                                                  <Checkbox
                                                       value="Heart"
                                                       name="conditions"
                                                       ref={register}
                                                  >
                                                       Heart Related
                                                  </Checkbox>
                                                  <Checkbox
                                                       value="Neurological/Psychological"
                                                       name="conditions"
                                                       ref={register}
                                                  >
                                                       Neurological/Psychological
                                                  </Checkbox>
                                                  <Checkbox
                                                       value="Others"
                                                       name="conditions"
                                                       ref={register}
                                                  >
                                                       Others
                                                  </Checkbox>
                                             </Stack>
                                        </CheckboxGroup>
                                        <FormErrorMessage>
                                             {errors.conditions &&
                                                  errors.conditions.message}
                                        </FormErrorMessage>
                                   </FormControl>

                                   <SimpleGrid
                                        minChildWidth="400px"
                                        spacing="20px"
                                        width="100%"
                                   >
                                        <FormControl id="referral">
                                             <FormLabel>
                                                  How did you hear about us?
                                             </FormLabel>
                                             <RadioGroup defaultValue="Word of Mouth">
                                                  <Stack
                                                       direction={{
                                                            base: 'column',
                                                            md: 'column',
                                                            lg: 'row'
                                                       }}
                                                  >
                                                       <Radio
                                                            value="Google"
                                                            name="referral"
                                                            ref={register}
                                                       >
                                                            Google
                                                       </Radio>
                                                       <Radio
                                                            value="Facebook"
                                                            name="referral"
                                                            ref={register}
                                                       >
                                                            Facebook
                                                       </Radio>
                                                       <Radio
                                                            value="Instagram"
                                                            name="referral"
                                                            ref={register}
                                                       >
                                                            Instagram
                                                       </Radio>
                                                       <Radio
                                                            value="Word of Mouth"
                                                            name="referral"
                                                            ref={register}
                                                       >
                                                            Word of Mouth
                                                       </Radio>
                                                       <Radio
                                                            value="Alumni "
                                                            name="referral"
                                                            ref={register}
                                                       >
                                                            Alumni
                                                       </Radio>
                                                  </Stack>
                                             </RadioGroup>
                                             <FormErrorMessage>
                                                  {errors.referral &&
                                                       errors.referral.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                   </SimpleGrid>
                              </Stack>
                              <Button
                                   colorScheme="aygreen"
                                   mt={10}
                                   ml="auto"
                                   type="submit"
                                   isLoading={loading}
                                   loadingText="Submitting"
                              >
                                   Register
                              </Button>
                         </Box>
                    </Box>
               </Flex>
          </>
     );
}

export default Register;

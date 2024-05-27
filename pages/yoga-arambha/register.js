import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, FormErrorMessage, Input, Select, VStack, Heading, Flex } from '@chakra-ui/react';
import { registerForIDY2024, checkForArambha2024 } from '@/lib/db/forms';
import HeroFlower2 from 'public/A24-Flower-2.svg';
import HeroFlower1 from 'public/A24-Flower.svg';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RecaptchaComponent, RecaptchaProvider } from '@/components/RecaptchaComponent';

const Register = () => {
     const router = useRouter()
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
          setValue,
          clearErrors,
          reset
     } = useForm();
     const [showMembershipNumber, setShowMembershipNumber] = useState(false);

     const [isLoading, setIsLoading] = useState(false);

      const [recaptchaToken, setRecaptchaToken] = useState(null);

     const allFields = watch();

     const handleMemeberShip = (e) => {
          if (e.target.value === 'indiranagar_club_member') {
               setShowMembershipNumber(true);
          } else {
               setShowMembershipNumber(false);
               setValue('membershipNumber', '');
               // clearErrors('membershipNumber');
          }
     };

     const generateUniqueTicketID = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    const generateID = () => {
        let id = '';
        for (let i = 0; i < 6; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 2);
        return `ATHAYOG24-${id.toUpperCase()}${timestamp}`;
    };

    return generateID();
};




     const onSubmit = async (data) => {
          setIsLoading(true);
          if (recaptchaToken === null) {
               return  toast.error('reCAPTCHA verification failed. Please refresh page and try again!');
          }
          try {
               const emailCheckResponse = await checkForArambha2024(data.email);

               if (emailCheckResponse.code === 400) {
                    toast.error('Email is already registered.');
                    setIsLoading(false);
                    return;
               }

          
               const ticketID = generateUniqueTicketID();
               console.log(ticketID);
               data.ticketID = ticketID;
              
               const response = await fetch('/api/email/send', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
               });

               if (response.ok) {
                     toast.success('Registration successful and email sent!');
                     await registerForIDY2024(ticketID, data.name, data.phone, data.email, data.gender, data.age, data.tshirt, data.category, data.membershipNumber ? data.membershipNumber : null);
                     sendOneToAthayog(ticketID, data.name, data.phone, data.email, data.gender, data.age, data.tshirt, data.category, data.membershipNumber ? data.membershipNumber : null);
               } else {
                    //await registerForIDY2024(ticketID, data.name, data.phone, data.email, data.gender, data.age, data.tshirt, data.category, data.membershipNumber ? data.membershipNumber : null);
                    toast.error('Something happened. Please try again');
               }
          } catch (error) {
               console.error('Error:', error);
               toast.error('An error occurred during registration.');
          } finally {
               setIsLoading(false);
               reset()
               setTimeout(() => {
                    router.push('/')
               },2000)
          }
     };

     
     

     const sendOneToAthayog = async ( ticketID, name, phone, email, gender, age, tshirt, category, membershipNumber) => {
           await fetch('https://formsubmit.co/ajax/info@athayogliving.com', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
               },
               body: JSON.stringify({
                    FormType: 'Registration For Arambha 2023',
                    ticketID, name, phone, email, gender, age, tshirt, category, membershipNumber
               })
          });
             
     }

     return (
          <RecaptchaProvider>
               <Box
                    width={{
                         base: '200px',
                         md: '300px',
                         xl: 'auto'
                    }}
                    pos
                    position="absolute"
                    top={{ base: '50', lg: '100' }}
                    left="0"
               >
                    <Image src={HeroFlower1} />
               </Box>
               <Box
                    name="flowerRight"
                    width={{
                         base: '200px',
                         md: '300px',
                         xl: 'auto'
                    }}
                    zIndex="0"
                    position="absolute"
                    top={{ base: '50', lg: '100' }}
                    right="0"
               >
                    <Image src={HeroFlower2} />
               </Box>
               <Toaster />
               <Flex p={2} justify={{ base: 'flex-start', lg: 'center' }} flexDirection="column" align="center" minHeight="100vh" bg="white">
                    {/* <Heading
                         textAlign="center"
                         color="#71312A"
                         fontSize={{
                              base: '25px',
                              sm: '25px',
                              md: '36px',
                              lg: '50px',
                              xl: '54px'
                         }}
                    >
                         Yoga Arambha 2024 <br /> Empower Your Inner Goddess
                    </Heading> */}

                   
                    <Box zIndex={10} mt={{ base: 5, md: 5 }} width="full" maxW="5xl" mx="auto" p={8} borderWidth={{ base: 0, lg: 1 }} borderRadius="lg" bg="white" boxShadow={{ base: 'none', lg: 'base' }}>
                         <Heading as="h1" mb={6} textAlign="center">
                              Registration Form
                         </Heading>
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <RecaptchaComponent onVerify={setRecaptchaToken} />
                              <VStack spacing={4} align="stretch">
                                   <FormControl isInvalid={errors.name}>
                                        <FormLabel htmlFor="name">Name</FormLabel>
                                        <Input id="name" name="name" ref={register({ required: true })} />
                                        <FormErrorMessage>{errors.name && 'Name is required'}</FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.phone}>
                                        <FormLabel htmlFor="phone">Phone number</FormLabel>
                                        <Input id="phone" name="phone" ref={register({ required: true, pattern: /^[0-9]{10}$/ })} />
                                        <FormErrorMessage>{errors.phone && 'Phone number is required and should be 10 digits'}</FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.email}>
                                        <FormLabel htmlFor="email">Email ID</FormLabel>
                                        <Input id="email" name="email" ref={register({ required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} />
                                        <FormErrorMessage>{errors.email && 'Email ID is required and should be valid'}</FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.gender}>
                                        <FormLabel htmlFor="gender">Gender</FormLabel>
                                        <Select id="gender" name="gender" ref={register({ required: true })}>
                                             <option value="">Select Gender</option>
                                             <option value="male">Male</option>
                                             <option value="female">Female</option>
                                             <option value="other">Other</option>
                                        </Select>
                                        <FormErrorMessage>{errors.gender && 'Gender is required'}</FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.age}>
                                        <FormLabel htmlFor="age">Age</FormLabel>
                                        <Input id="age" name="age" type="number" ref={register({ required: true, min: 6, max: 99 })} />
                                        <FormErrorMessage>{errors.age && 'Age is required and must be between 6 and 99'}</FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.tshirt}>
                                        <FormLabel htmlFor="tshirt">T shirt size</FormLabel>
                                        <Select id="tshirt" name="tshirt" ref={register({ required: true })}>
                                             <option value="">Select Size</option>
                                             <option value="xs">XS</option>
                                             <option value="s">S</option>
                                             <option value="m">M</option>
                                             <option value="l">L</option>
                                             <option value="xl">XL</option>
                                             <option value="xxl">XXL</option>
                                             <option value="xxxl">XXXL</option>
                                        </Select>
                                        <FormErrorMessage>{errors.tshirt && 'T-Shirt size is required'}</FormErrorMessage>
                                   </FormControl>

                                   <FormControl isInvalid={errors.category}>
                                        <FormLabel htmlFor="category">Choose below Category</FormLabel>
                                        <Select id="category" name="category" ref={register({ required: true })} onChange={(e) => handleMemeberShip(e)}>
                                             <option value="">Select Category</option>
                                             <option value="indiranagar_club_member">Indiranagar Club member</option>
                                             <option value="athayog_member">Athayog Member</option>
                                             <option value="general_public">General Public</option>
                                        </Select>
                                        <FormErrorMessage>{errors.category && 'Category is required'}</FormErrorMessage>
                                   </FormControl>

                                   {showMembershipNumber && (
                                        <FormControl isInvalid={errors.membershipNumber}>
                                             <FormLabel htmlFor="membershipNumber">Membership Number</FormLabel>
                                             <Input id="membershipNumber" name="membershipNumber" ref={register({ required: showMembershipNumber })} />
                                             <FormErrorMessage>{errors.membershipNumber && 'Membership Number is required'}</FormErrorMessage>
                                        </FormControl>
                                   )}

                                   <Button marginTop={10} type="submit" colorScheme="blue" size="lg" width="full" isLoading={isLoading}>
                                        Register
                                   </Button>
                              </VStack>
                         </form>
                    </Box>
               </Flex>
          </RecaptchaProvider>
     );
};

export default Register;

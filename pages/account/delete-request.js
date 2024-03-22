// pages/delete-account.js

import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { deleteMobileAppAccount } from '@/lib/db/forms';
import { Box, Button, FormControl, FormLabel, Heading, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

function DeleteRequest() {
  const [captcha, setCaptcha] = useState(null)
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    if (!captcha) {
      toast.error('Please Verify Captcha')
      return
    }
    try {
      setLoading(true);
      // Send data to backend (Firebase Firestore)
      await deleteMobileAppAccount(data)
        .then((response) => {

          toast.success('Account Deletion Request Submitted');
          sendEmailAlert(data)
        })
        .catch((error) => {

          toast.error('Something Happend Try Again');
          setLoading(false);
        });

    } catch (error) {
      console.error('Error submitting delete request:', error);
      console.log(error)
      toast.error('Failed to submit delete request. Please try again later.');

    } finally {
      setLoading(false);
      reset();
    }
  };

  const sendEmailAlert = async (data) => {
    const emailToSend = 'info@athayogliving.com';
    await fetch(`https://formsubmit.co/ajax/${emailToSend}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        FormType: 'Account Delete Request',
        name: data.name,
        email: data.email,
        phone: data.phone,
        reason: data.reason
      })
    });
  };

  return (
    <Box minH='60vh' px={5} maxW="container.xl" margin='0 auto' my={10}>

      <NavbarHelper />
      <Heading fontSize='3xl'>Account Deletion Request</Heading>
      <Box maxW="container.xl" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
        <Toaster />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="name" isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" ref={register({
              required: 'This is required',

            })} />
          </FormControl>
          {errors.name && <span>{errors.name.message}</span>}

          <FormControl id="email" isInvalid={errors.email} mt={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" ref={register({
              required: 'This is required',

            })} />
          </FormControl>
          {errors.email && <span>{errors.email.message}</span>}

          <FormControl id="phone" isInvalid={errors.phone} mt={4}>
            <FormLabel>Phone</FormLabel>
            <Input name="phone" type="tel" ref={register({
              required: 'This is required',

            })} />
          </FormControl>
          {errors.phone && <span>{errors.phone.message}</span>}

          <FormControl id="reason" isInvalid={errors.reason} mt={4}>
            <FormLabel>Reason</FormLabel>
            <Textarea name="reason" ref={register({
              required: 'This is required',

            })} />
          </FormControl>
          {errors.reason && <span>{errors.reason.message}</span>}
          <Box mt={5}>

            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={setCaptcha} />
          </Box>
          <Button type="submit" size='lg' width={{base:'full',md:'auto'}} colorScheme="red" mt={4} loadingText='submitting...' isLoading={loading}>Submit Request</Button>



          <Text mt={4} fontSize="normal" color="gray.700" bg='red.50' p={5}>
            By submitting this form, you acknowledge that your account will be permanently deleted. All associated data, including your personal information and any content, will be irreversibly removed from our system. This action cannot be undone, so please proceed with caution.
          </Text>

        </form>

      </Box>
    </Box>

  );
};

export default DeleteRequest;
DeleteRequest.Layout = HomeLayout

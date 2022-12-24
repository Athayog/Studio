import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import {
     Box,
     Button,
     Flex,
     Grid,
     Heading,
     SimpleGrid,
     Text,
     useToast
} from '@chakra-ui/react';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import ContactMore from './ContactMore';
import CTA from './CTA';
import PriceBox from './PriceBox';

const Pricing = ({ pricing, registerTo, toRegister }) => {
     const { user, signout, loading } = useAuth();
     const [buttonId, setButtonId] = useState('');
     const [loadingPayment, setLoading] = useState(['', false]);
     const router = useRouter();
     const toast = useToast();

     const { data, error } = useSWR(
          user ? [`/api/user/purchases/${user.uid}`, user.token] : null,
          fetcher
     );

     if (pricing.length === 0) {
          return <ContactMore />;
     }

     let coursePurchased = [];
     if (data) {
          data?.purchases?.map((each) => {
               coursePurchased.push(each.id);
          });
     }

     const handleUserPayment = async (
          price,
          duration,
          description,
          name,
          courseId,
          isTrial
     ) => {
          setButtonId(courseId);
          if (!user) {
               toast({
                    title: 'Login First',
                    description:
                         'Create or Login to your account to continue payment',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true
               });
               setButtonId('');

               cookie.set('routeTo', `/offerings/${registerTo}`, {
                    expires: 1
               });

               router.push('/account/login');

               return;
          }

          if (/@athayogliving.com\s*$/.test(user.email)) {
               setButtonId('');
               toast({
                    title: 'Admin Account',
                    description: `Can't make purchases from admin account`,
                    status: 'warning',
                    duration: 5000,
                    isClosable: true
               });
               return;
          }

          router.push({
               pathname: `/register/${registerTo}`,
               query: {
                    price: price,
                    duration: duration,
                    description: description,
                    courseName: name,
                    courseId: courseId,
                    isTrial: isTrial
               }
          });
     };

     if (pricing === 'Contact For More') {
          return <ContactMore />;
     }

     const limitCourses = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.description.includes('Limited'))
          .sort((a, b) => a.durationNum - b.durationNum);
     const unlimitCourses = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.description.includes('Unlimited'))
          .sort((a, b) => a.durationNum - b.durationNum);

     const trialCourses = pricing
          .filter((data) => data.isTrial == true)
          .sort((a, b) => a.durationNum - b.durationNum);
     const generalCourses = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == undefined)
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);
     const personal_training = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'personal_training')
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);
     const kids = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'kids')
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);
     const couple_package = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'couple_package')
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);
     const group_studio_class = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'group_studio_class')
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);

     const specialCourses = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == false)
          .filter(
               (data) =>
                    data.description.toLowerCase() != 'limited' &&
                    data.description.toLowerCase() != 'unlimited'
          )
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);

     if (router.pathname == '/classes/personal') {
          let space = [];
          let onsite = [];
          let online = [];

          for (let i = 0; i < generalCourses.length; i++) {
               if (generalCourses[i].courseName.includes('Space')) {
                    space.push(generalCourses[i]);
               }
               if (generalCourses[i].courseName.includes('Onsite')) {
                    onsite.push(generalCourses[i]);
               }
               if (generalCourses[i].courseName.includes('Online')) {
                    online.push(generalCourses[i]);
               }
          }
          space = space.sort((a, b) => a.durationNum - b.durationNum);
          onsite = onsite.sort((a, b) => a.durationNum - b.durationNum);
          online = online.sort((a, b) => a.durationNum - b.durationNum);
          generalCourses = [...space, ...onsite, ...online];
     }
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem 0',
                    md: '3rem 0',
                    lg: '5rem 0'
               }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="gray.50"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width={{ base: '90%', md: '85%', lg: '80%' }}
               >
                    <Heading fontWeight="normal">Pricing</Heading>{' '}
                    <PriceBox
                         courses={limitCourses}
                         limited={limitCourses}
                         unlimited={unlimitCourses}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <PriceBox
                         courses={generalCourses}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <PriceBox
                         courses={kids}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <PriceBox
                         courses={personal_training}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <PriceBox
                         courses={couple_package}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <PriceBox
                         courses={specialCourses}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <PriceBox
                         courses={trialCourses}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <Text textAlign="left" mt={8} width="100%">
                         *Terms and conditions apply
                    </Text>
                    <Text width="100%" textAlign="left">
                         *All price inclusive of 18% GST
                    </Text>
                    {!toRegister && (
                         <>
                              <Text mb={3} fontSize="xl" fontWeight="semibold">
                                   Contact us for more information
                              </Text>
                              <CTA registerTo={registerTo} />
                         </>
                    )}
               </Flex>
          </Flex>
     );
};

export default Pricing;

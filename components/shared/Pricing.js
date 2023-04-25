import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { Flex, Heading, Text, useToast } from '@chakra-ui/react';
import cookie from 'js-cookie';
import _ from 'lodash';
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

     function compare(a, b) {
          if (a.courseName < b.courseName) {
               return -1;
          }
          if (a.courseName > b.courseName) {
               return 1;
          }
          return 0;
     }

     var order = [
          'Group Studio Class + 5 Benefits',
          'Group Studio Class + 10 Benefits',
          'Group Studio Class + 15 Benefits'
     ];
     function sortingGroup(arr) {
          return _.sortBy(arr, function (obj) {
               return _.indexOf(order, obj.courseName);
          });
     }

     const limitCourses = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.description.includes('Limited'))
          .filter((data) => data.sub_category == 'general')
          .sort((a, b) => a.durationNum - b.durationNum);
     const unlimitCourses = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.description.includes('Unlimited'))
          .filter((data) => data.sub_category == 'general')
          .sort((a, b) => a.durationNum - b.durationNum);

     const trialCourses = pricing
          .filter((data) => data.isTrial == true)
          .sort((a, b) => a.durationNum - b.durationNum);
     let generalCourses = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == undefined)
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);
     let generalCoursesIndiranagr = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'indiranagar')
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);
     let generalCoursesKRPuram = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'kr_puram')
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);

     let group_class_walking_in = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'group_class_indiranagar')
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);

     let group_class_walking_kr = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'group_class_kr_puram')
          .filter((data) => !data.description.toLowerCase().includes('limited'))
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);
     const personal_training = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'personal_training')
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);

     const kids = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'kids')
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum);

     const couple_package = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'couple_package')
          .sort(compare);

     const couple_package_limited = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.description.includes('Limited'))
          .filter((data) => data.sub_category == 'couple_package')
          .sort((a, b) => a.description.length - b.description.length)
          .sort(compare);
     const couple_package_unlimited = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.description.includes('Unlimited'))
          .filter((data) => data.sub_category == 'couple_package')
          .sort((a, b) => a.description.length - b.description.length)
          .sort(compare);

     const group_studio_class = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'group_studio_class')
          .sort(compare);

     const group_studio_class_limited = sortingGroup(
          pricing
               .filter((data) => data.isTrial == false)
               .filter((data) => data.isGeneral == true)
               .filter((data) => data.description.includes('Limited'))
               .filter((data) => data.sub_category == 'group_studio_class')
               .sort((a, b) => a.courseName.length - b.courseName.length)
               .sort(compare)
     );

     const group_studio_class_unlimited = sortingGroup(
          pricing
               .filter((data) => data.isTrial == false)
               .filter((data) => data.isGeneral == true)
               .filter((data) => data.description.includes('Unlimited'))
               .filter((data) => data.sub_category == 'group_studio_class')
               .sort((a, b) => a.courseName.length - b.courseName.length)
               .sort(compare)
     );

     const onsite_course = sortingGroup(
          pricing
               .filter((data) => data.isTrial == false)
               .filter((data) => data.isGeneral == true)
               .filter((data) => data.sub_category == 'onsite')
               .sort((a, b) => a.courseName.length - b.courseName.length)
               .sort(compare)
     );

     const senior = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'senior')
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum)
          .sort(compare);
     const workshop = pricing
          .filter((data) => data.isTrial == false)
          .filter((data) => data.isGeneral == true)
          .filter((data) => data.sub_category == 'workshop')
          .sort((a, b) => a.description.length - b.description.length)
          .sort((a, b) => a.durationNum - b.durationNum)
          .sort(compare);
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

     console.log(limitCourses);
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
                         courses={senior}
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
                         courses={generalCoursesIndiranagr}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                         subCategory="indiranagar"
                    />
                    <PriceBox
                         courses={generalCoursesKRPuram}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                         subCategory="kr_puram"
                    />
                    <PriceBox
                         courses={group_class_walking_in}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <PriceBox
                         courses={group_class_walking_kr}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    <PriceBox
                         courses={onsite_course}
                         data={data}
                         user={user}
                         toRegister={toRegister}
                         coursePurchased={coursePurchased}
                         buttonId={buttonId}
                         handleUserPayment={handleUserPayment}
                    />
                    {(couple_package.length !== 0 ||
                         group_studio_class.length !== 0 ||
                         workshop.length !== 0) && (
                         <>
                              <Heading mt={20} fontSize="2xl">
                                   Premium Packages
                              </Heading>
                         </>
                    )}
                    {workshop && (
                         <PriceBox
                              courses={workshop}
                              data={data}
                              user={user}
                              toRegister={toRegister}
                              coursePurchased={coursePurchased}
                              buttonId={buttonId}
                              handleUserPayment={handleUserPayment}
                         />
                    )}
                    {couple_package && (
                         <PriceBox
                              courses={couple_package_limited}
                              limited={couple_package_limited}
                              unlimited={couple_package_unlimited}
                              data={data}
                              user={user}
                              toRegister={toRegister}
                              coursePurchased={coursePurchased}
                              buttonId={buttonId}
                              handleUserPayment={handleUserPayment}
                         />
                    )}
                    {group_studio_class && (
                         <PriceBox
                              courses={group_studio_class_limited}
                              limited={group_studio_class_limited}
                              unlimited={group_studio_class_unlimited}
                              data={data}
                              user={user}
                              toRegister={toRegister}
                              coursePurchased={coursePurchased}
                              buttonId={buttonId}
                              handleUserPayment={handleUserPayment}
                         />
                    )}
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

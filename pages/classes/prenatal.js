import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogOnsite from 'public/athayogPrenatal.jpg';
import Information from '@/components/shared/Information';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import HomeLayout from '@/components/layout/HomeLayout';
import { getOffer } from '@/lib/db/offerings';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';
import ClassesLayout from '@/components/shared/ClassesLayout';
import Head from 'next/head';
import {
     Box,
     Flex,
     Heading,
     List,
     ListIcon,
     ListItem,
     Text,
     UnorderedList
} from '@chakra-ui/react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export async function getStaticProps(context) {
     const { offers } = await getOffer('prenatal');

     if (!offers) {
          return {
               notFound: true
          };
     }
     return {
          props: {
               offers: JSON.parse(JSON.stringify(offers)),
               notFound: false
          }
     };
}

const Prenatal = ({ offers, notFound }) => {
     const pageData = {
          name: 'Prenatal',
          heroImage: athayogOnsite,
          whatis: `Groom yourself and your child as you grow together with the right Yogic practices for a prenatal journey. 
For the first time in Bangalore Athayog brings to you Group Prenatal Yoga classes in a safe and comfortable environment with experts guiding you towards child birth. `
     };

     const apiPricing = [];
     offers.map((data) => {
          if (data.isActive) {
               apiPricing.push({
                    id: data.id,
                    courseName: data.name,
                    description: data.description,
                    duration: data.isTrial
                         ? data.days + ' Days Trial'
                         : data.days + ' Days',
                    isTrial: data.isTrial,
                    old_price: data.old_price,
                    durationNum: data.days,
                    isGeneral: data.isGeneral,
                    price: data.price,
                    sub_category: data.sub_category
               });
          }
     });
     const d = new Date();

     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Head>
                    <title>Onsite - AthayogLiving</title>

                    <meta
                         name="keywords"
                         content="yoga online course, online yoga class, online yoga classes, yoga online classes, online yoga classes near me, online yoga class near me, near yoga classes, near yoga centre, yoga class online india, near yoga center, yoga online courses, online yoga certification course by government of india, online yoga class india, online yoga classes india, who online courses, online yoga classes bangalore, yoga online teacher training, online yoga classes best, online yoga classes weight loss, online yoga classes for weight loss, online yoga classes for kids, online yoga class live, online yoga class beginners, yoga online course certification, online yoga classes for beginners, online yoga class for beginners, yoga online classes for beginners, yoga online classes near me, yoga online courses india, yoga online classes india, online yoga courses india,
"
                    ></meta>
               </Head>
               <Hero pageData={pageData} />
               <ClassesLayout>
                    <BreadCrumb subLinks="classes" currentPage="Onsite" />
                    {/* <Information pageData={pageData} /> */}
                    <Box maxW="90vw" margin="50px auto">
                         <Heading
                              color="aygreen.700"
                              fontSize="3xl"
                              textTransform="uppercase"
                         >
                              The Yogic Way to Motherhood
                         </Heading>
                         <Text fontWeight="normal" mt={2} fontSize="lg">
                              Groom yourself and your child as you grow together
                              with the right Yogic practices for a prenatal
                              journey. For the first time in Bangalore Athayog
                              brings to you Group Prenatal Yoga classes in a
                              safe and comfortable environment with experts
                              guiding you towards child birth.
                         </Text>
                         <Box mt={14}>
                              <Heading
                                   color="aygreen.700"
                                   as="h3"
                                   fontSize="xl"
                              >
                                   Pick your batch based on the week of your
                                   pregnancy
                              </Heading>
                              <UnorderedList mt={2} fontSize="lg">
                                   <ListItem>
                                        4th - 15th week: 9am - 10am
                                   </ListItem>
                                   <ListItem>
                                        16th - 26th week: 4pm - 5pm
                                   </ListItem>
                              </UnorderedList>
                         </Box>
                         <Box mt={14}>
                              <Heading
                                   color="aygreen.700"
                                   as="h3"
                                   fontSize="xl"
                              >
                                   Monthly Package
                              </Heading>
                              <Text fontWeight="normal" mt={2} fontSize="lg">
                                   Enjoy our expert-guided prenatal yoga
                                   sessions with a monthly package starting at
                                   just ₹4999/-.
                              </Text>
                         </Box>
                         <Box mt={14}>
                              <Heading
                                   color="aygreen.700"
                                   as="h3"
                                   fontSize="xl"
                              >
                                   Weekly Schedule
                              </Heading>
                              <Text fontWeight="normal" mt={2} fontSize="lg">
                                   Our classes run Weekly 5 days - Monday to
                                   Friday
                              </Text>
                         </Box>
                         <Box mt={14}>
                              <Heading
                                   color="aygreen.700"
                                   as="h3"
                                   fontSize="xl"
                              >
                                   Get in Touch
                              </Heading>
                              <Text fontWeight="normal" mt={2} fontSize="lg">
                                   Visit our center or give us a call to learn
                                   more about our prenatal yoga offerings and
                                   how they can benefit you during this special
                                   journey of motherhood.
                              </Text>
                         </Box>
                    </Box>
                    <Pricing
                         pricing={apiPricing}
                         toRegister={true}
                         registerTo="prenatal"
                    />

                    <Register registerTo={pageData.name.toLocaleLowerCase()} />
               </ClassesLayout>
          </motion.div>
     );
};

export default Prenatal;
Prenatal.Layout = HomeLayout;

import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogSpace from 'public/Athayog_space_home.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import IntensityTable from '@/components/shared/IntensityTable';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';
import ProsAndCons from '@/components/shared/ProsAndCons';
import Schedule from '@/components/shared/classes/Schedule';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';
import ClassesLayout from '@/components/shared/ClassesLayout';
import Head from 'next/head';
import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import CTAImage from 'public/athayogWorkshop.jpg';
import Link from 'next/link';

const Space = ({ notFound }) => {
     const pageData = {
          name: 'Space',
          heroImage: athayogSpace,
          whatis: `Elevate your Yogic practice at the AthaYog Space - a peaceful and hygienic environment to practice. Here you can begin or advance in your yoga journey by instilling transformation with a strong hold on your lifestyle.`,
          classes: [
               {
                    className: 'Universal Harmony',
                    classInfo: `Find the harmony between your BODY, BREATH & MIND. Restore the balance and explore your inner universe in this hour-long journey!`,
                    structure: [
                         'Grounding',
                         '35 minutes of Asana Practice',
                         'Relaxation',
                         'Breathing (Pranayama) & Meditation'
                    ]
               },
               {
                    className: 'Transcending Transitions ',
                    classInfo: `Find your flow in a class combining Hatha Yoga with Vinyasa flow that lasts 60 minutes. Transcend the body and mind as you transition from one pose to another with ease.`,
                    structure: [
                         'Grounding',
                         '45 minutes of Hatha Vinyasa Flow',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Rhythm of Being',
                    classInfo: `Move to the rhythm of your breath for 60 minutes. Reconnect with your body with a dynamic Hatha yoga practice.`,
                    structure: [
                         'Grounding',
                         '45 minutes of Asana Practice',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Inner World',
                    classInfo: `Slow down the inner chaos of your restless mind in the span of 60 minutes. Unwind and effortlessly rest your body and mind with the relaxation technique of Yoga Nidra or “Yogic Sleep”.`,
                    structure: [
                         'Grounding',
                         'Yoga Nidra - 45 minutes of Guided Relaxation'
                    ]
               },
               {
                    className: 'Deep Space',
                    classInfo: `Delve deeper into the space beyond your body and mind with this hour-long guided meditation class. Reconnect with your true self in the deep state of conscious relaxation.`,
                    structure: [
                         'Grounding',
                         '15 minutes of Warm-Up & Surya Namaskar',
                         'Guided Relaxation',
                         'Breathing (Pranayama) & Meditation'
                    ]
               },
               {
                    className: 'Kids Yoga',
                    classInfo: `Let the little ones start their Yoga practice when the mind is still fresh and young with this fun-filled and interactive 60 minutes class.`,
                    structure: [
                         'Grounding',
                         'Warm Up - Engaging & Interactive Activities',
                         'Asana Practice',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Ashtanga',
                    classInfo: `This rigorous hour-long practice synchronizes breath with movement. Immerse and feel the body heat up with dynamic movement.`,
                    structure: [
                         'Grounding',
                         'Ashtanga Surya Namaskar',
                         'Ashtanga Primary Series Asanas',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Sivananda',
                    classInfo: `In the span of 60 minutes, find a relaxed and meditative state of mind as you practise Hatha yoga in Sivananda style. Founded by Vishnudevananda, this deep Yogic breathing and relaxation-focused practice is fit for all levels.`,
                    structure: [
                         'Grounding',
                         '15 minutes of Warm-Up',
                         'Breathing (Pranayama)',
                         'Surya Namaskar',
                         'Asana Practice',
                         'Guided Relaxation'
                    ]
               }
          ],
          prosAndCons: [
               [
                    'Clarity of teacher’s demonstration and voice.',
                    'Physical correction. ',
                    'Experience of group energy as you practise with others.',
                    'The advantage of physical space to practise.',
                    'Teacher-Student connection/ bond Eg. Eye-eye contact with teacher and reassuring physical presence.'
               ],
               [
                    'Travel to the studio.',
                    'Fear of COVID-19 Safety among students.',
                    'Need to allot time for both practise and travel',
                    'During monsoon and winter weather, the student has to plan their time and commute.',
                    'Being on time is crucial.'
               ]
          ]
     };

     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Head>
                    <title>Space - AthayogLiving</title>

                    <meta
                         name="keywords"
                         content="yoga classes near me, nearest yoga class to me, yoga class near me, yoga classes, yoga class, yoga classes online, when yoga day, yoga classes near me only for ladies, yoga classes near me with fees, yoga course, yoga courses, nearest yoga studio to me, near yoga classes, yoga teacher training course, yoga course certificate, near yoga classes, yoga class nearby, yoga classes online free, nearby yoga classes, yoga class near, nearby yoga class, near yoga class, near yoga centre, near yoga center, yoga classes in bangalore, bangalore yoga classes, yoga classes bangalore"
                    ></meta>
               </Head>
               <Hero pageData={pageData} />
               <ClassesLayout>
                    <BreadCrumb subLinks="classes" currentPage="Space" />
                    <Classes classes={pageData.classes} />
                    <IntensityTable />
                    {/* <Schedule schedule="general" /> */}
                    <Schedule />
                    <Box height="sm" width="100%">
                         <Flex
                              height="100%"
                              width="100%"
                              justifyContent="center"
                              alignItems="center"
                              direction="column"
                              position="relative"
                         >
                              <Box
                                   height="100%"
                                   bg={{
                                        sm: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%)',
                                        base: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%)',
                                        md: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%)'
                                   }}
                                   width="100%"
                                   zIndex={1}
                              ></Box>
                              <Box
                                   position="absolute"
                                   top="0"
                                   left="0"
                                   height="100%"
                                   width="100%"
                                   zIndex="1"
                                   color="white"
                              >
                                   <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="column"
                                        height="100%"
                                        py={10}
                                        gap={5}
                                   >
                                        <Heading
                                             fontSize="5xl"
                                             fontWeight="bold"
                                        >
                                             Check our Pricing
                                        </Heading>

                                        <Link
                                             href="/classes/space/offerings"
                                             passHref={true}
                                        >
                                             <Button
                                                  colorScheme="aygreen"
                                                  size="lg"
                                             >
                                                  Check Now
                                             </Button>
                                        </Link>
                                   </Flex>
                              </Box>
                              <Image
                                   src={CTAImage}
                                   layout="fill"
                                   objectFit="cover"
                                   alt="hero"
                                   placeholder="blur"
                              />
                         </Flex>
                    </Box>

                    <ProsAndCons data={pageData.prosAndCons} name="Space" />
               </ClassesLayout>
          </motion.div>
     );
};

export default Space;
Space.Layout = HomeLayout;

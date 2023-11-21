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
                    className: 'Inner World',
                    classInfo: `Explore the subtler levels of your mind through the systemic practice of Yoga Nidra. A practice that comes traditionally from Bihar School of Yoga which helps in deep physical and mental relaxation and takes you closer to a meditative state of mind. `,
                    structure: [
                         'Grounding',
                         '35 minutes of Asana Practice',
                         'Relaxation',
                         'Breathing (Pranayama) & Meditation'
                    ]
               },
               {
                    className: 'Universal Harmony',
                    classInfo: `A practice that involves body, breath & mind practices.  Asanas for body, Pramana maya for breath & meditation for mind.                    `,
                    structure: [
                         'Grounding',
                         '45 minutes of Hatha Vinyasa Flow',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Rhythm of Being',
                    classInfo: `Perfect alignment of the body & skilful breathing is the goal of this practice. Involve in a session of chosen asanas to help build body & breath connect.`,
                    structure: [
                         'Grounding',
                         '45 minutes of Asana Practice',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Hatha Pradipika',
                    classInfo: `Learn the intricate details of asanas practice as mentioned in the Hatha Yoga Pradipika scripture written by Swatmarama which helps you develop mental and spiritual awareness.                    `,
                    structure: [
                         'Grounding',
                         'Yoga Nidra - 45 minutes of Guided Relaxation'
                    ]
               },
               {
                    className: 'Ashtanga Yoga',
                    classInfo: `A traditional yoga sequence designed by great masters T Krishnamacharya and Pattabi Jois with a fixed sequence of asana practice along with the other limbs of yoga stitched together into one piece of practice.`,
                    structure: [
                         'Grounding',
                         '15 minutes of Warm-Up & Surya Namaskar',
                         'Guided Relaxation',
                         'Breathing (Pranayama) & Meditation'
                    ]
               },
               {
                    className: 'Transcending Transitions',
                    classInfo: `Flow into your body using your breath. Enhance your asana practice thought combination of posture sequenced together with conscious breathing.                    `,
                    structure: [
                         'Grounding',
                         'Warm Up - Engaging & Interactive Activities',
                         'Asana Practice',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Adv. Hatha Yoga:',
                    classInfo: `Fine tuning the Hatha Yoga Practices of Asanas, Pranayama and Meditation, adhering to critical alignments proper breathing technique and mind control while practicing on the mat.                    `,
                    structure: [
                         'Grounding',
                         'Ashtanga Surya Namaskar',
                         'Ashtanga Primary Series Asanas',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Power Vinyasa',
                    classInfo: `Combining the concepts of exercise by the east & the west and unifying into one practice. Using methods developed in the modern science and traditional wisdom of yoga through practice of asanas and movements.`,
                    structure: [
                         'Grounding',
                         '15 minutes of Warm-Up',
                         'Breathing (Pranayama)',
                         'Surya Namaskar',
                         'Asana Practice',
                         'Guided Relaxation'
                    ]
               },
               {
                    className: 'Special Ladies Batch',
                    classInfo: `An exclusive hour only for women with yoga practices especially curated for the betterment of womens’ physical, mental & emotional wellbeing. This is an all exclusive session open only to women.`,
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

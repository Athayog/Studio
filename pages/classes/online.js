import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogOnline from 'public/athayogOnline.jpg';
import Information from '@/components/shared/Information';
import Pricing from '@/components/shared/Pricing';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';
import Schedule from '@/components/shared/Schedule';
import {
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Heading,
     Flex,
     Box,
     Text,
     List,
     ListItem,
     ListIcon,
     Badge
} from '@chakra-ui/react';
import OnlineCourses from '@/components/shared/OnlineCourses';
import ProsAndCons from '@/components/shared/ProsAndCons';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import ClassesLayout from '@/components/shared/ClassesLayout';
import Head from 'next/head';
import Classes from '@/components/shared/Classes';
export async function getStaticProps(context) {
     const { offers } = await getOffer('online');

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

const Online = ({ offers, notFound }) => {
     const pageData = {
          name: 'Online',
          heroImage: athayogOnline,
          whatis: `You may be looking to keep your practice going at a steady pace but are unsure about stepping out in the midst of the pandemic. With AthaYog Online, you can continue from the comfort of your own space.`,
          prosAndCons: [
               [
                    'Practise in the safety and comfort of your home',
                    'Solitude - Practise behind closed doors and in your own company',
                    'Beneficial for physically unfit people who can’t commute.',
                    'Practise in your own time.',
                    'Practise from anywhere around the globe.'
               ],
               [
                    'Need a strong connection/ Technical issues',
                    'Lack of teacher’s physical presence.',
                    'Clarity of teacher’s demonstration, voice and screen display',
                    'Lack of physical correction.',
                    'Need for space and phone support for better angle/ visibility.'
               ]
          ],
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
          ]
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
                    isGeneral: data.isGeneral,
                    durationNum: data.days,
                    price: data.price,
                    sub_category: data.sub_category
               });
          }
     });
     const d = new Date();

     const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
     ];

     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Head>
                    <title>Online - AthayogLiving</title>

                    <meta
                         name="keywords"
                         content="yoga online course, online yoga class, online yoga classes, yoga online classes, online yoga classes near me, online yoga class near me, near yoga classes, near yoga centre, yoga class online india, near yoga center, yoga online courses, online yoga certification course by government of india, online yoga class india, online yoga classes india, who online courses, online yoga classes bangalore, yoga online teacher training, online yoga classes best, online yoga classes weight loss, online yoga classes for weight loss, online yoga classes for kids, online yoga class live, online yoga class beginners, yoga online course certification, online yoga classes for beginners, online yoga class for beginners, yoga online classes for beginners, yoga online classes near me, yoga online courses india, yoga online classes india, online yoga courses india,
"
                    ></meta>
               </Head>
               <Hero pageData={pageData} />
               {/* <Information pageData={pageData} /> */}
               <Classes classes={pageData.classes} />
               <ClassesLayout>
                    <BreadCrumb subLinks="classes" currentPage="Online" />
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
                         bg="primaryWhite"
                    >
                         <Flex
                              justifyContent="center"
                              direction="column"
                              alignItems="center"
                              width={{ base: '95%', md: '90%', lg: '90%' }}
                         >
                              <Heading
                                   fontWeight="normal"
                                   fontSize={{ base: '2xl', md: '3xl' }}
                              >
                                   Online Group Class Schedule December 2022
                              </Heading>
                              <Box
                                   overflowX="auto"
                                   width="100%"
                                   boxShadow="base"
                                   rounded="lg"
                                   mt={10}
                              >
                                   <Table
                                        variant="simple"
                                        size="sm"
                                        bg="white"
                                        colorScheme="aygreen"
                                        className="scheduleTable"
                                   >
                                        <Thead>
                                             <Tr>
                                                  <Th bg="aygreen.200">Time</Th>
                                                  <Th bg="aygreen.200">
                                                       Monday
                                                  </Th>
                                                  <Th bg="aygreen.200">
                                                       Tuesday
                                                  </Th>
                                                  <Th bg="aygreen.200">
                                                       Wednesday
                                                  </Th>
                                                  <Th bg="aygreen.200">
                                                       Thursday
                                                  </Th>
                                                  <Th bg="aygreen.200">
                                                       Friday
                                                  </Th>
                                                  <Th bg="aygreen.200">
                                                       Saturday
                                                  </Th>
                                                  <Th bg="aygreen.200">
                                                       Sunday
                                                  </Th>
                                             </Tr>
                                        </Thead>
                                        <Tbody>
                                             <Tr>
                                                  <Td
                                                       bg="aygreen.100"
                                                       borderBottom="1px"
                                                       borderColor="aygreen.200"
                                                       padding="0px"
                                                       paddingLeft="10px"
                                                  >
                                                       <Text width="150px">
                                                            6.00 AM - 7.00 AM
                                                       </Text>
                                                  </Td>
                                                  <Td>Rhythm Of Being </Td>
                                                  <Td>
                                                       Transcending Transitions
                                                  </Td>
                                                  <Td>
                                                       Sivanandha/Universal
                                                       Harmony
                                                  </Td>

                                                  <Td>Rhythm Of Being </Td>
                                                  <Td>Universal Harmony</Td>
                                                  <Td> - </Td>
                                                  <Td> - </Td>
                                             </Tr>

                                             <Tr>
                                                  <Td
                                                       bg="aygreen.100"
                                                       borderBottom="1px"
                                                       borderColor="aygreen.200"
                                                       padding="0px"
                                                       paddingLeft="10px"
                                                  >
                                                       7:00 AM - 8:00 AM
                                                  </Td>
                                                  <Td>--</Td>
                                                  <Td>--</Td>
                                                  <Td>-- </Td>
                                                  <Td>-- </Td>

                                                  <Td>-- </Td>
                                                  <Td>Rhythm Of Being </Td>
                                                  <Td>Universal Harmony </Td>
                                             </Tr>

                                             <Tr>
                                                  <Td
                                                       bg="aygreen.100"
                                                       borderBottom="1px"
                                                       borderColor="aygreen.200"
                                                       padding="0px"
                                                       paddingLeft="10px"
                                                  >
                                                       5:00 PM - 6:00 PM
                                                  </Td>
                                                  <Td>Kids Yoga</Td>
                                                  <Td>Kids Yoga</Td>
                                                  <Td>Kids Yoga</Td>
                                                  <Td>Kids Yoga</Td>
                                                  <Td>Kids Yoga</Td>
                                                  <Td> - </Td>
                                                  <Td> - </Td>
                                             </Tr>
                                             <Tr>
                                                  <Td
                                                       bg="aygreen.100"
                                                       borderBottom="1px"
                                                       borderColor="aygreen.200"
                                                       padding="0px"
                                                       paddingLeft="10px"
                                                  >
                                                       5:00 PM - 6:00 PM
                                                  </Td>
                                                  <Td>Universal Harmony</Td>
                                                  <Td>Rhythm Of Being</Td>
                                                  <Td>Universal Harmony</Td>
                                                  <Td>Rhythm Of Being</Td>
                                                  <Td>
                                                       Transcending Transitions
                                                  </Td>
                                                  <Td>Rhythm Of Being</Td>
                                                  <Td>Universal Harmony</Td>
                                             </Tr>
                                        </Tbody>
                                   </Table>
                              </Box>
                         </Flex>
                    </Flex>

                    <Pricing
                         pricing={apiPricing}
                         registerTo={pageData.name.toLocaleLowerCase()}
                    />

                    <ProsAndCons data={pageData.prosAndCons} name="Online" />
               </ClassesLayout>
               -10 AM is Women's Batch
          </motion.div>
     );
};

export default Online;
Online.Layout = HomeLayout;

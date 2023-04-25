import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogPersonal from 'public/athayogPersonal.jpeg';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import InformationSplit from '@/components/shared/InformationSplit';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';
import Schedule from '@/components/shared/Schedule';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';
import ClassesLayout from '@/components/shared/ClassesLayout';
import Head from 'next/head';
import { Box, Flex, List, ListIcon, ListItem } from '@chakra-ui/react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export async function getStaticProps(context) {
     const { offers } = await getOffer('personal');

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

const Personal = ({ offers, notFound }) => {
     const pageData = {
          name: 'Personal Sessions',
          heroImage: athayogPersonal,
          whatis: `Eliminate the distractions and keep your focus intact on your Yogic practice as you welcome change and break the patterns with AthaYog Personal Sessions. In the personal sessions, you can expect a more customized and structured approach to learning that suits your needs.`,
          secondBlock: `What you get`,
          description: `Experience a more personalized and up-close path to immersing yourself in the Yogic way of life.`
     };

     const apiPricing = [];
     offers.map((data) => {
          apiPricing.push({
               id: data.id,
               courseName: data.name,
               description: data.description,
               duration: data.isTrial
                    ? data.days + ' Trial'
                    : data.days == 0
                    ? 'No Duration'
                    : data.days + ' Days',
               durationNum: data.days,
               isTrial: data.isTrial,
               isGeneral: data.isGeneral,
               price: data.price,
               sub_category: data.sub_category
          });
     });
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Head>
                    <title>Personal - AthayogLiving</title>

                    <meta
                         name="keywords"
                         content="yoga online course, online yoga class, online yoga classes, yoga online classes, online yoga classes near me, online yoga class near me, near yoga classes, near yoga centre, yoga class online india, near yoga center, yoga online courses, online yoga certification course by government of india, online yoga class india, online yoga classes india, who online courses, online yoga classes bangalore, yoga online teacher training, online yoga classes best, online yoga classes weight loss, online yoga classes for weight loss, online yoga classes for kids, online yoga class live, online yoga class beginners, yoga online course certification, online yoga classes for beginners, online yoga class for beginners, yoga online classes for beginners, yoga online classes near me, yoga online courses india, yoga online classes india, online yoga courses india,
"
                    ></meta>
               </Head>
               <Hero pageData={pageData} />
               <ClassesLayout>
                    <BreadCrumb subLinks="classes" currentPage="Personal" />
                    <InformationSplit pageData={pageData} />
                    <Schedule schedule="personal" />
                    <Pricing pricing={apiPricing} registerTo="personal" />
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
                         direction="column"
                    >
                         <Box
                              mt={10}
                              textAlign="left"
                              boxShadow="base"
                              bg="white"
                              rounded="md"
                              p={3}
                              width={{ base: '95%', md: '90%', lg: '90%' }}
                         >
                              <List>
                                   <ListItem>
                                        <ListIcon
                                             as={BsFillArrowRightCircleFill}
                                             color="green.500"
                                             display="inline-block"
                                             flexDir="column"
                                        />
                                        Note: 1 free trial class - Will be
                                        provided on request.
                                   </ListItem>
                              </List>
                         </Box>
                    </Flex>
               </ClassesLayout>
          </motion.div>
     );
};

export default Personal;
Personal.Layout = HomeLayout;

import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogOnsite from 'public/athayogOnsite.jpg';
import Information from '@/components/shared/Information';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import HomeLayout from '@/components/layout/HomeLayout';
import { getOffer } from '@/lib/db/offerings';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';
import ClassesLayout from '@/components/shared/ClassesLayout';
import Head from 'next/head';

export async function getStaticProps(context) {
     const { offers } = await getOffer('onsite');

     if (!offers) {
          return {
               notFound: true
          };
     }
     return {
          props: {
               offers: JSON.parse(JSON.stringify(offers)),
               notFound: false
          },
          revalidate: 1
     };
}

const Onsite = ({ offers, notFound }) => {
     const pageData = {
          name: 'Onsite',
          heroImage: athayogOnsite,
          whatis: `AthaYog Onsite is for people seeking Yogic education on their own personal time, from the comfort of their space. And unsure about stepping out in the midst of pandemic. With Athayog Onsite you can continue your practice at your space by our teachers visiting you.`
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
                    sub_category: sub_category
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

                    <Pricing
                         pricing={apiPricing}
                         toRegister={true}
                         registerTo="onsite"
                    />

                    <Register registerTo={pageData.name.toLocaleLowerCase()} />
               </ClassesLayout>
          </motion.div>
     );
};

export default Onsite;
Onsite.Layout = HomeLayout;

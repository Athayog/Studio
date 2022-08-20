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
          },
          revalidate: 1
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
               price: data.price
          });
     });
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Hero pageData={pageData} />
               <ClassesLayout>
                    <BreadCrumb subLinks="classes" currentPage="Personal" />
                    <InformationSplit pageData={pageData} />
                    <Schedule schedule="personal" />
                    <Pricing pricing={apiPricing} registerTo="personal" />
               </ClassesLayout>
          </motion.div>
     );
};

export default Personal;
Personal.Layout = HomeLayout;

import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogWorkshop from 'public/athayogWorkshop.jpg';
import Pricing from '@/components/shared/Pricing';
import InformationSplit from '@/components/shared/InformationSplit';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';
import WorkShopTable from '@/components/shared/WorkShopTable';
import WorkShopCourse from '@/components/shared/WorkShopCourse';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';

export async function getStaticProps(context) {
     const { offers } = await getOffer('workshops');

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

const Workshops = ({ offers, notFound }) => {
     const pageData = {
          name: 'Workshops',
          heroImage: athayogWorkshop,
          whatis: `Experience a profound approach to Yogic knowledge and living. Explore the deeper, subtler and more authentic aspects of Yoga as we share our collective wisdom on specialized and focussed topics in the Yogic realm.`,
          secondBlock: `What you get`,
          description: `Workshop of the Week is a 75-minute workshop that we organize weekly, covering individual subjects to give you a more insightful perspective on the subtleties of the Yogic cosmos.\nWorkshop of the Month is a 10-hour series of 4 workshops in a month, branching out into broader Yogic themes, stemming from time-honoured wisdom.`
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
               <BreadCrumb subLinks="classes" currentPage="Workshop" />
               <InformationSplit pageData={pageData} />
               <WorkShopCourse />
               <WorkShopTable />
               <Pricing
                    pricing={apiPricing}
                    registerTo={pageData.name.toLocaleLowerCase()}
               />

               {/* <Register registerTo={pageData.name.toLocaleLowerCase()} /> */}
          </motion.div>
     );
};

export default Workshops;
Workshops.Layout = HomeLayout;

import Enquiry from '@/components/home/Enquiry';
import HomeLayout from '@/components/layout/HomeLayout';
import Hero from '@/components/retreat/Hero';
import Info from '@/components/retreat/Info';
import JoinBlock from '@/components/retreat/JoinBlock';
import UnplugBlock from '@/components/retreat/UnplugBlock';
import Head from 'next/head';

function YogaRetreat({ imageProps }) {
     return (
          <div>
               <Head>
                    <title>Yoga Retreat - AthayogLiving</title>
               </Head>
               <Hero />
               <JoinBlock />
               <Info />
               <UnplugBlock />
               <Enquiry />
          </div>
     );
}

export default YogaRetreat;
YogaRetreat.Layout = HomeLayout;

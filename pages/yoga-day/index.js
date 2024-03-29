import Banner from '@/components/arambha/Banner';
import Hero from '@/components/arambha/Hero';
import ImageGallery from '@/components/arambha/ImageGallery';
import Quote from '@/components/arambha/Quote';
import RegisterButton from '@/components/arambha/RegisterButton';
import Schedule from '@/components/arambha/Schedule';
import Welcome from '@/components/arambha/Welcome';
import Youtube from '@/components/arambha/Youtube';
import HomeLayout from '@/components/layout/HomeLayout';
import Head from 'next/head';
import React from 'react';

function YogaDay() {
     return (
          <div>
               <Head>
                    <title>Yoga Day - Arambha</title>
               </Head>
               <Hero />
               <Welcome />
               {/* <Youtube /> */}
               {/* <Banner /> */}
               <Quote />
               <Schedule />
               <ImageGallery />
               <RegisterButton />
          </div>
     );
}

export default YogaDay;
YogaDay.Layout = HomeLayout;

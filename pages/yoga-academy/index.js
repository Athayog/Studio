import Eligible from '@/components/academy/Eligible';
import Enrollment from '@/components/academy/Enrollment';
import Fees from '@/components/academy/Fees';
import Footer from '@/components/academy/Footer';
import Gurus from '@/components/academy/Gurus';
import Hero from '@/components/academy/Hero';
import LimitedSlots from '@/components/academy/LimitedSlots';
import LimitedSlotsBottom from '@/components/academy/LimitedSlotsBottom';
import WhatWillYouLearn from '@/components/academy/WhatWillYouLearn';
import WhyYouShould from '@/components/academy/WhyYouShould';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box } from '@chakra-ui/react';
import CallSvg from 'public/call.svg';
import Head from 'next/head';
import Image from 'next/image';

function yogaAcademy() {
 
    return (
        <Box width={"full"} >
            <Head>
                <title>Athayog Yoga Academy</title>
                <meta name="description" content="Welcome to Athayog Yoga Academy! We offer a wide range of yoga classes and workshops to help you find balance and harmony in your life." />
                <meta name="keywords" content="yoga academy, yoga classes, yoga workshops, balance, harmony" />

                {/* Add more SEO metadata tags here */}
            </Head>
            <NavbarHelper />
            <Hero />
            <WhatWillYouLearn />
            <Enrollment />
            <WhyYouShould />
            <LimitedSlots />
            <Eligible />
            <Fees />
            <Gurus />
            <LimitedSlotsBottom />
            <Footer />
            <Box position='fixed' bottom={{base:10,md:20}} right={{base:5,md:10}}>
                    <a href="tel:+919611771434" style={{position:'relative'}}>
                        <Box position='absolute' background="#F54900" height={55} width={55} border="4px solid #FFF" padding={3} borderRadius='50%' right="10" bottom="0">
                       
                            <Image  src={CallSvg} objectFit='contain' height={25} width={25} />
                          
                        </Box>
                        </a>
                    </Box>
        </Box>
    )
}



export default yogaAcademy
yogaAcademy.Layout = HomeLayout;
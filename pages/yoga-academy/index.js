import Eligible from '@/components/academy/Eligible';
import Enrollment from '@/components/academy/Enrollment';
import Fees from '@/components/academy/Fees';
import Gurus from '@/components/academy/Gurus';
import Hero from '@/components/academy/Hero';
import LimitedSlots from '@/components/academy/LimitedSlots';
import WhatWillYouLearn from '@/components/academy/WhatWillYouLearn';
import WhyYouShould from '@/components/academy/WhyYouShould';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

function yogaAcademy() {
    return (
        <Box width={"full"}>
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
            <Eligible/>
            <Fees/>
            <Gurus/>
        </Box>
    )
}

export default yogaAcademy
yogaAcademy.Layout = HomeLayout;
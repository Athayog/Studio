import Eligible from '@/components/academy/Eligible';
import Enrollment from '@/components/residential/Enrollment';
import Footer from '@/components/academy/Footer';
import Gurus from '@/components/academy/Gurus';
import WhatWillYouLearn from '@/components/academy/WhatWillYouLearn';
import WhyYouShould from '@/components/residential/WhyYouShould';
import HomeLayout from '@/components/layout/HomeLayout';
import Accomodation from '@/components/residential/Accomodation';
import Hero from '@/components/residential/Hero';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import LimitedSlots from '@/components/residential/LimitedSlots';
import Fees from '@/components/residential/Fees';
import LimitedSlotsBottom from '@/components/residential/LimitedSlotsBottom';

function ResidentialProgram() {
    return (
        <Box width={"full"} >
            <Head>
                <title>Athayog Residential Program</title>
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
            <Accomodation />
            <Eligible />
            <Fees />
            <Gurus />
            <LimitedSlotsBottom />
            <Footer />

        </Box>
    )
}

export default ResidentialProgram
ResidentialProgram.Layout = HomeLayout;
import { Box, Button, Flex, Heading, List, ListIcon, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import CareerImage from 'public/class_3-min-min.jpg';
import Image from 'next/image';
import NavbarHelper from '@/components/shared/NavbarHelper';
import HomeLayout from '@/components/layout/HomeLayout';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { PiChalkboardTeacherLight, PiClockBold, PiFlowerLotusLight, PiGlobeHemisphereWestThin, PiHandsPrayingThin, PiMoneyLight, PiSunThin } from "react-icons/pi";
import { IoArrowForwardSharp } from 'react-icons/io5';
import { SiGoogleclassroom } from 'react-icons/si';
import { BiSupport, BiUniversalAccess } from 'react-icons/bi';
import { MdWorkspacePremium } from 'react-icons/md';

const SquigglyLine = () => {
    return (
        <div style={{ position: 'relative', marginBottom: '10px', borderBottom: '1px solid black' }}>
            <svg
                width="100%"
                height="10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', bottom: '0' }}
            >
                <path
                    d="M0 2 C 20 2, 40 6, 60 2 S 80 0, 100 2"
                    fill="transparent"
                    stroke="transparent"
                    strokeWidth="1"
                />
            </svg>
        </div>
    );
};
function yogaAcademy() {
    return (
        <Box bg='aygray.50'>
            <NavbarHelper />
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="center"
                height={['90vh', '60vh']}
                bg='aygray.50'
                width='100%'
            // borderBottom="1px solid #000"
            >
                <Box
                    flex="1"

                    overflow='hidden'
                    height='100%'
                    width='100%'
                    position="relative"
                    background="linear-gradient(to bottom,rgba(0,0,0,0.6) 10%,rgba(0,0,0,0.6))"
                >
                    <Image
                        zIndex={-1}
                        src={CareerImage}
                        alt="Hero Image"
                        layout="fill"
                        className="class-image"
                        objectFit="cover"
                        placeholder='blur'

                    />
                </Box >

                <Box flex="1" textAlign={{ base: 'center', md: 'left' }} ml={{ base: 0, md: 8 }} p={8}>
                    <Text mb={6} textColor='aygreen.500' textTransform='uppercase'>Unlock Your Yoga Journey with AthaYog Living</Text>
                    <Heading as="h1" size="3xl" mb={6} color="black">
                        RYT 200 Certification Course
                    </Heading>
                    <Text fontSize="lg" mb={6} color="black" fontWeight='normal' textColor='aygray.800'>
                        Transform your practice in our empowering group yoga sessions. Immerse yourself in a supportive community, fostering positive lifestyle changes. Discover the harmony of mind, body, and soul. Join us on a journey to elevate your well-being through the ancient wisdom of yoga. Embrace the power of connection and wellness with us today
                    </Text>


                    <Button colorScheme='aygray' size="lg" variant='outline' shadow='none' rightIcon={<ArrowRightIcon />} >Learn More</Button>

                </Box>
            </Flex>

            <Box bg='aygreen.50' width="100%">

                <Box py={20} px={5} maxW='container.lg' margin='0 auto' >
                    <Heading
                        as="h3"
                        fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}

                    >What will you learn?</Heading>
                    <Text fontSize='xl' textColor='aygreen.700' mb={10}>A Perfect Blend of Practical &amp; Theoretical Learning</Text>
                    <Box border='1px solid #999'>
                        <Box borderBottom='1px solid #999' >
                            <Box borderBottom='1px solid #999' p={5} bg='aygreen.200' display="flex" alignItems='center' fontSize='lg'> <PiFlowerLotusLight style={{ marginRight: '10px' }} />Main 1: Practical Learning:</Box>
                            <List p={5} spacing={3} bg='aygreen.100' >
                                <ListItem> <ListIcon as={IoArrowForwardSharp} /> Master Breathing Techniques, Asanas, Sat Kriyas, Pranayama, and Meditation.</ListItem>

                                <ListItem> <ListIcon as={IoArrowForwardSharp} /> Immerse in the spiritual teachings of Yoga Sutras, Bhagavad Gita, Hatha Yoga Pradipika,
                                    and Modern Science.</ListItem>

                            </List>
                        </Box>
                        <Box borderBottom='1px solid #999'    >
                            <Box borderBottom='1px solid #999' bg='aygreen.200' p={5} display="flex" alignItems='center' fontSize='lg'> <PiFlowerLotusLight style={{ marginRight: '10px' }} />Main 2: Theoretical Learning:</Box>
                            <List p={5} bg='aygreen.100'>
                                <ListItem><ListIcon as={IoArrowForwardSharp} /> Dive into the depths of Anatomy, Physiology, Psychology, Teaching Methodology, and the
                                    Business of Yoga.</ListItem>


                            </List>
                        </Box>
                        <Box borderBottom='1px solid #999'   >
                            <Box borderBottom='1px solid #999' bg='aygreen.200' p={5} display="flex" alignItems='center' fontSize='lg'> <PiFlowerLotusLight style={{ marginRight: '10px' }} />Main 3: Branding &amp; Packaging:</Box>
                            <List p={5} bg='aygreen.100'>
                                <ListItem><ListIcon as={IoArrowForwardSharp} /> Learn basics of personal branding and packaging basic yoga. You will be able to sell yoga
                                    courses yourself or you will be able to choose which Studio/Brand suits better for your
                                    practise.</ListItem>


                            </List>
                        </Box>
                        <Box borderBottom='1px solid #999'   >
                            <Box bg='aygray.100' p={5} fontSize='lg'>
                                <h1>Main Upon Completion: Become a Holistic Yoga Teacher</h1>
                            </Box>

                            <Box p={5} bg='aygray.50'>
                                Graduates will confidently teach basic yoga, promoting positive health and harmony in
                                society. Receive a lifetime-valid certificate recognized nationally and internationally.


                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box bg='aygray.50' width="100%">

                <Box py={20} px={5} maxW='80vw' margin='0 auto' >
                    <Heading
                        as="h3"
                        fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                        textAlign='center'

                    >Why should you choose AthaYog Living?</Heading>
                    <Flex flexWrap='wrap' gridGap="5rem" mt={10}>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><PiGlobeHemisphereWestThin style={{fontSize:"5rem"}} />Global Accreditation</Box>
                            <Box textAlign='center'>Yoga Alliance USA &amp; Vivekananda Yoga Anusandhana Samsthana
                                validation.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><PiHandsPrayingThin  style={{fontSize:"5rem"}}/>Holistic Approach</Box>
                            <Box textAlign='center'>Blend practical and theoretical for comprehensive learning.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><PiClockBold   style={{fontSize:"5rem"}} />Lifetime Validity</Box>
                            <Box textAlign='center'>Internationally recognized certificate for a lifetime.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><PiChalkboardTeacherLight  style={{fontSize:"5rem"}} />Expert Faculty</Box>
                            <Box textAlign='center'>Learn from qualified Ph.D.&#39;s and MSc&#39;s in Yoga.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><SiGoogleclassroom   style={{fontSize:"5rem"}}/>Teaching Excellence</Box>
                            <Box textAlign='center'>Focus on effective teaching methodology.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><PiMoneyLight   style={{fontSize:"5rem"}}/>Cost-Efficient Mastery</Box>
                            <Box textAlign='center'>Master self-practice, save on subscriptions, flexible payments.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><BiSupport  style={{fontSize:"5rem"}} />Post-Course Support</Box>
                            <Box textAlign='center'> Ongoing mentorship for your teaching journey.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><PiSunThin  style={{fontSize:"5rem"}} />Spiritual Wisdom</Box>
                            <Box textAlign='center'>Infused with teachings from renowned spiritual leaders.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><PiSunThin  style={{fontSize:"5rem"}}/> Authentic Expertise</Box>
                            <Box textAlign='center'>Genuine yoga knowledge, not just a certificate.</Box>
                        </Box>
                        <Box height="auto" width="20rem">
                            <Box fontSize='2xl' display='flex' flexDir='column' alignItems='center' justifyContent='center'><BiUniversalAccess  style={{fontSize:"5rem"}} />Accessible Eligibility</Box>
                            <Box textAlign='center'>Open to individuals 16+, 10th-grade education, 1 month of recent yoga
                                practice.</Box>
                        </Box>
                    </Flex>
                </Box>

            </Box>
        </Box>
    )
}

export default yogaAcademy
yogaAcademy.Layout = HomeLayout;
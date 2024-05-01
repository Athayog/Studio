import { Box, Button, Flex, Heading, TableContainer, Text, chakra } from '@chakra-ui/react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import WorkshopTable from './WorkshopTable';
import WorkHome from 'public/work-home.jpg';
import Image from 'next/image';
import EnquiryModal from './Enquiry/EnquiryModal';
import EnquireWorkshop from './enquireWorkshop';
function UpcomingWorkshops() {
    const MayData = [
        { date: '4th', time: '7:00 AM', topic: 'Shat Karma Level 01', teacher: 'Madhusudhan' },
        { date: '11th', time: '11:00 AM', topic: 'Advance Inversion', teacher: 'Harsha' },
        { date: '18th', time: '11:00 AM', topic: 'Chakra Meditation', teacher: 'Sushma' },
        { date: '25th', time: '11:00 AM', topic: 'Pranic Energization Technique', teacher: 'Ankush' },
        // Add more data rows as needed
    ];

    const JuneData = [
        { date: '2nd', time: '11:00 AM', topic: 'MSRT', teacher: 'Purvi' },
        { date: '8th', time: '11:00 AM', topic: 'Advance Pranayama', teacher: 'Sharath' },
        { date: '15th', time: '11:00 AM', topic: 'Bhajan', teacher: 'Harsh & Ankush' },
        { date: '22nd', time: '11:00 AM', topic: 'Advanced Transitions (Mobility Workshop)', teacher: 'Madhusudhan' },
        { date: '29th', time: '11:00 AM', topic: 'Yoga for spinal health', teacher: 'Sushma' },
        // Add more data rows as needed
    ];
    const JulyData = [
        { date: '6th', time: '11:00 AM', topic: 'Mantra Chanting', teacher: 'Ankush / Harsha ' },
        { date: '14th', time: '11:00 AM', topic: 'Art Therapy', teacher: 'Purvi' },
        { date: '20th', time: '11:00 AM', topic: 'Yoga Philosophies (Patanjalu & Bhagvad Gita)', teacher: 'Sharath' },
        { date: '27th', time: '7:00 AM', topic: 'Shat Karma Level 02', teacher: 'Ankush' },
        // Add more data rows as needed
    ];
    return (
        <Box py={10} maxW="90vw" margin="0 auto">
            <Heading
                fontWeight="medium"
                display="flex"
                gap={5}
                fontSize={['2xl', '3xl']}
                mb={5}
            >
                Our Upcoming Workshops <BsArrowRightCircleFill />
            </Heading>


            <WorkshopTable heading="May Workshop" data={MayData} />
            <WorkshopTable heading="June Workshop" data={JuneData} />
            <WorkshopTable heading="July Workshop" data={JulyData} />
            <Box shadow="md" p={5} fontSize='lg' border='1px solid purple'>
                <Flex gap={1} flexDirection='column' flexWrap='wrap'>
                    <Text pr={10} >Workshop - <chakra.span fontWeight='bold' color='purple.700'>₹999</chakra.span></Text>
                    <Text pr={10}>3 Workshops - <chakra.span fontWeight='bold' color='purple.700'>₹2699</chakra.span></Text>
                    <Text pr={10}>6 Workshops - <chakra.span fontWeight='bold' color='purple.700'>₹5399</chakra.span></Text>
                    <Text >All Workshops - <chakra.span fontWeight='bold' color='purple.700'>₹9999</chakra.span> </Text></Flex>

                <EnquireWorkshop />
            </Box>

        </Box>
    )
}

export default UpcomingWorkshops

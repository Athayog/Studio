import { Box, Button, Flex, Heading, TableContainer, Text, chakra } from '@chakra-ui/react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import WorkshopTable from './WorkshopTable';
import WorkHome from 'public/work-home.jpg';
import Image from 'next/image';
import EnquiryModal from './Enquiry/EnquiryModal';
import EnquireWorkshop from './enquireWorkshop';
function UpcomingWorkshops() {
     const AugustData = [
          { date: '10th & 11th', time: '11:00 AM', topic: 'Ayurveda', teacher: 'Shobith' },
          { date: '17th', time: '11:00 AM', topic: 'Prenatal & Postnatal Workshop', teacher: 'Harsha' },
          { date: '25th', time: '11:00 AM', topic: 'Yoga For PCOS', teacher: 'Purvi' },
          { date: '31st', time: '11:00 AM', topic: 'Guided Meditation For Stress Relief', teacher: 'Sushma' }
          // Add more data rows as needed
     ];

     const SeptemberData = [
          { date: '7th', time: '11:00 AM', topic: 'Advance Yoga Sadhana (Advance Yoga Asanas)', teacher: 'Madhu' },
          { date: '14th', time: '11:00 AM', topic: 'Pranayama With Bandha&apos;s', teacher: 'Harsha' },
          { date: '21st', time: '7:00 AM', topic: 'Shatkarma', teacher: 'Ankush' },
          { date: '29th', time: '11:00 AM', topic: 'Expressive Based Yoga Art Therapy', teacher: 'Purvi' }
          // Add more data rows as needed
     ];
     const OctoberData = [
          { date: '5th', time: '11:00 AM', topic: 'Yoga For Fertility', teacher: 'Sushma' },
          { date: '12th', time: '11:00 AM', topic: 'Alignment Workshop', teacher: 'Madhu' },
          { date: '19th & 20th', time: '11:00 AM', topic: 'Antar Mouna', teacher: 'Shobith' },
          { date: '26th', time: '11:00 AM', topic: 'Arm Balancing Workshop', teacher: 'Ankush' }
          // Add more data rows as needed
     ];
     return (
          <Box py={10} maxW="90vw" margin="0 auto">
               <Heading fontWeight="medium" display="flex" gap={5} fontSize={['2xl', '3xl']} mb={5}>
                    Our Upcoming Workshops <BsArrowRightCircleFill />
               </Heading>

               <WorkshopTable heading="August Workshop" data={AugustData} />
               <WorkshopTable heading="September Workshop" data={SeptemberData} />
               <WorkshopTable heading="October Workshop" data={OctoberData} />
               <Box shadow="md" p={5} fontSize="lg" border="1px solid purple">
                    <Flex gap={1} flexDirection="column" flexWrap="wrap">
                         <Text pr={10}>
                              All Workshop (Except Yoga Nidra) -{' '}
                              <chakra.span fontWeight="bold" color="purple.700">
                                   ₹999
                              </chakra.span>
                         </Text>
                         <Text pr={10}>
                              Ayurveda and Antar mouna -{' '}
                              <chakra.span fontWeight="bold" color="purple.700">
                                  Single Session -  ₹1200
                              </chakra.span>
                              <br/>
                              <chakra.span fontWeight="bold" color="purple.700">
                                  Both Session -  ₹1800
                              </chakra.span>
                         </Text>
                    </Flex>
                    <EnquireWorkshop />
               </Box>
          </Box>
     );
}

export default UpcomingWorkshops;

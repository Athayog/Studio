import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import {
     Box,
     Heading,
     Table,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr
} from '@chakra-ui/layout';
import React from 'react';

function RPYTCourses() {
     return (
          <>
               <HeaderLayout>
                    <Heading>RPYT Course</Heading>
                    <Box mt={5}>
                         <Text>
                              <strong>Course date : </strong>3rd October - 28th
                              October 2022 (Weekday Batch)
                         </Text>
                         <Text>
                              <strong>Time:</strong> 11am - 4pm
                         </Text>
                         <Text>
                              <strong>Total hours:</strong> 85 hours / 1 Month
                         </Text>
                    </Box>
                    <Heading mt={10} fontSize="xl">
                         Eligibility
                    </Heading>
                    <Box mt={5}>
                         <Text>Certified RYT200 / YIC /any</Text>
                         <Text>Other certification Graduates</Text>
                    </Box>
               </HeaderLayout>
               <ContactMore registerTo="RPYT" />
          </>
     );
}

export default RPYTCourses;
RPYTCourses.Layout = HomeLayout;

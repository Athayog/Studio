import HomeLayout from '@/components/layout/HomeLayout';
import Arrivals from '@/components/store/Arrivals';
import { Box } from '@chakra-ui/react';
import React from 'react';

function Store() {
     return (
          <Box minH="100vh" py={10} maxW="90vw" m="0 auto" mt={20}>
               <Arrivals />
          </Box>
     );
}
export default Store;
Store.Layout = HomeLayout;

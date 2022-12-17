import EventRegister from '@/components/jayanti/EventRegister';
import JayantiHero from '@/components/jayanti/JayantiHero';
import HomeLayout from '@/components/layout/HomeLayout';
import { Box } from '@chakra-ui/react';

function SwamiVivekanandaJayanti() {
     return (
          <Box>
               <JayantiHero />
               <EventRegister />
          </Box>
     );
}

export default SwamiVivekanandaJayanti;
SwamiVivekanandaJayanti.Layout = HomeLayout;

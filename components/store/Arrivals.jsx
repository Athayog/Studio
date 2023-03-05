import React from 'react';
import { Heading, Grid, Box } from '@chakra-ui/react';
import Data from '@/lib/storedata.json';
import ProductCard from './ProductCard';

function Arrivals() {
     return (
          <Box>
               <Heading fontSize="2xl" fontWeight="700">
                    New Arrivals
               </Heading>
               <Grid
                    mt={6}
                    gap={10}
                    gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
               >
                    {Data.map((product, idx) => {
                         return <ProductCard key={idx} {...product} />;
                    })}
               </Grid>
          </Box>
     );
}

export default Arrivals;

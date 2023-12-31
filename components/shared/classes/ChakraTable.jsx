import React from 'react';
import { ChakraProvider, CSSReset, Box, Grid, GridItem } from '@chakra-ui/react';

const TableExample = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <Grid templateColumns="repeat(8, 1fr)" gap={4}>
          {/* Empty cell in the top-left corner */}
          <GridItem rowSpan={1} colSpan={1}></GridItem>

          {/* Days of the week (headers) */}
          {daysOfWeek.map((day, index) => (
            <GridItem key={index} colSpan={1} textAlign="center" bg="gray.200" p={2} fontWeight="bold">
              {day}
            </GridItem>
          ))}

          {/* Time slots and classes */}
          <GridItem colSpan={1} textAlign="center" bg="gray.200" p={2} fontWeight="bold">
            8:00 AM - 9:00 AM
          </GridItem>
          {/* Add more time slots as needed */}

          {/* Classes schedule */}
          {Array.from({ length: 7 * 8 }, (_, index) => (
            <GridItem key={index} colSpan={1} textAlign="center" p={2} border="1px" borderColor="gray.300">
              {/* Replace this with your class information */}
              Class {index + 1}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default TableExample;

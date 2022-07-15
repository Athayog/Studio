import FormHeader from '@/components/admin/FormHeader';
import React, { useState } from 'react';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { Grid, Spinner, useColorModeValue } from '@chakra-ui/react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import LeadsData from '@/components/admin/table/LeadsData';
import YogaDayData from '@/components/admin/table/YogaDayData';
import JobTable from '@/components/admin/table/JobTable';

const Career = () => {
     const [latestDoc, setLatestDoc] = useState(0);
     const { data, error } = useSWR(`/api/career/all`, fetcher);

     const bg = useColorModeValue('white', 'gray.800');

     if (!data) {
          return (
               <Grid placeItems="center" mt={10}>
                    <Spinner
                         thickness="4px"
                         speed="0.65s"
                         emptyColor="gray.200"
                         color="blue.500"
                         size="xl"
                    />
               </Grid>
          );
     }
     console.log(data.submissions);
     return (
          <>
               <JobTable
                    forms={data.submissions}
                    latestDoc={latestDoc}
                    setDocs={setLatestDoc}
               />
          </>
     );
};

export default Career;
Career.Layout = DashboardLayout;

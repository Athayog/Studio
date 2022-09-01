import UsersHeader from '@/components/admin/UsersHeader';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import {
     Box,
     chakra,
     Divider,
     Flex,
     Grid,
     Heading,
     Spinner,
     Table,
     Thead,
     Tbody,
     Button,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     TableContainer,
     Text,
     useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import useSWR from 'swr';

function ApplicationID() {
     const router = useRouter();
     const id = router.query.uuid;
     const { data, error } = useSWR(`/api/career/${id}`, fetcher);

     if (error) {
          return (
               <Grid placeItems="center" height="250px">
                    <Text>Sorry somrthing happend :(</Text>
               </Grid>
          );
     }

     if (!data) {
          return (
               <Grid placeItems="center" height="250px">
                    <Spinner />
               </Grid>
          );
     }

     if (data.user.length === 0) {
          return (
               <Grid placeItems="center" height="250px">
                    <Text>Looks like something happend :(</Text>
               </Grid>
          );
     }

     return (
          <>
               <Box bg="white" boxShadow="base" p={5} rounded="md">
                    <Link href="/admin/career/" passHref>
                         <Button
                              size="sm"
                              mb={6}
                              leftIcon={<IoMdArrowRoundBack />}
                         >
                              Back To Applications
                         </Button>
                    </Link>
                    <Heading size="lg">{data.user.name}</Heading>
                    <Flex
                         textColor="gray.900"
                         justifyContent="space-between"
                         alignItems="flex-start"
                    >
                         <Box>
                              <Text>{data.user.email}</Text>

                              <Text>{data.user.number}</Text>
                         </Box>
                         <Box>
                              {' '}
                              <Link
                                   href={data.user.pdf_url}
                                   target="_blank"
                                   passHref
                              >
                                   <Button colorScheme="teal" size="sm">
                                        VIEW RESUME
                                   </Button>
                              </Link>
                         </Box>
                    </Flex>
                    <TableContainer mt="5">
                         <Table
                              variant="simple"
                              size="md"
                              colorScheme="blackAlpha"
                         >
                              <Thead>
                                   <Tr>
                                        <Th>Location</Th>
                                        <Th>Desigation</Th>
                                        <Th>Current Company</Th>
                                        <Th>Expirience</Th>
                                        <Th>Current CTC</Th>
                                        <Th>Expected CTC</Th>
                                        <Th>Notice Period</Th>
                                        <Th>Relocate</Th>
                                        <Th>Any Offer In Hand</Th>
                                        <Th>Flexible With Split Shift</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td>{data.user.location}</Td>
                                        <Td>{data.user.desigation}</Td>
                                        <Td>{data.user.current_company}</Td>
                                        <Td>{data.user.experience}</Td>
                                        <Td>{data.user.current_ctc}</Td>
                                        <Td>{data.user.expected_ctc}</Td>
                                        <Td>{data.user.notice_period}</Td>
                                        <Td>{data.user.relocate}</Td>
                                        <Td>{data.user.offer}</Td>{' '}
                                        <Td>{data.user.flexible}</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </TableContainer>

                    <Box mt={5}>
                         <Heading as="h3" size="md">
                              Actions
                         </Heading>
                         <Flex mt={3}>
                              <a href={'mailto:' + data.user.email}>
                                   <Button size="sm" colorScheme="green">
                                        Email Applicant
                                   </Button>
                              </a>
                         </Flex>
                    </Box>
               </Box>
          </>
     );
}

export default ApplicationID;
ApplicationID.Layout = DashboardLayout;

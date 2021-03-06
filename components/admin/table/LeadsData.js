import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     Input,
     chakra,
     Box,
     Button,
     useColorModeValue,
     Badge,
     ButtonGroup,
     Text,
     Flex,
     Select,
     Grid,
     useColorMode
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { useMemo } from 'react';

import ColumnFilter from './Filters/ColumnFilter';
import SelectColumnFilter from './Filters/SelectColumnFilter';
import NumberFilter from './Filters/NumberFilter';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { ImBackward2, ImForward2 } from 'react-icons/im';
import { RiLoader3Fill } from 'react-icons/ri';
import firebase from '@/lib/firebase';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { FirebaseToDate } from '@/components/helper/FirebaseToDate';
import { v4 as uuidv4 } from 'uuid';
import { Styles } from './Styles';
const firestore = firebase.firestore();

export const DateCreated = ({ values }) => {
     // Loop through the array and create a badge-like component instead of a comma-separated string
     return <>{FirebaseToDate(values)}</>;
};

const LeadsData = ({ forms, latestDoc, setDocs }) => {
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
     const data = useMemo(() => forms, []);
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('gray.200', 'gray.700');

     const columns = useMemo(
          () => [
               {
                    Header: 'Name',
                    accessor: 'name',
                    Filter: ColumnFilter
               },

               {
                    Header: 'phone',
                    accessor: 'phone',
                    Filter: NumberFilter,
                    filter: 'number'
               },
               {
                    Header: 'email',
                    accessor: 'email',
                    Filter: ColumnFilter
               },
               {
                    Header: 'Submitted',
                    accessor: 'createdAt',
                    Cell: ({ cell: { value } }) => (
                         <DateCreated values={value} key={uuidv4()} />
                    ),
                    Filter: ColumnFilter,
                    disableFilters: true
               }
          ],
          []
     );

     const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          page,
          prepareRow,
          state,
          nextPage,
          canNextPage,
          canPreviousPage,
          previousPage,
          pageOptions,
          gotoPage,
          setPageSize,
          pageSize
     } = useTable(
          { columns, data },
          useFilters,

          useSortBy,
          usePagination
     );

     const { pageIndex } = state;

     const loadMoreDoc = () => {
          setDocs(forms[forms.length - 1]);
     };

     return (
          <Styles>
               {/* <Box>Showing Date Between {forms[0].createdAt}</Box> */}
               <Box className="tableWrap">
                    <Table
                         {...getTableProps()}
                         bg={bg}
                         shadow="base"
                         rounded="lg"
                         padding={5}
                         mt={3}
                         colorScheme="green"
                    >
                         <Thead>
                              {headerGroups.map((headerGroup) => (
                                   <Tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                             <>
                                                  <Th
                                                       {...column.getHeaderProps()}
                                                  >
                                                       {column.render('Header')}
                                                       <chakra.span pl="4">
                                                            {column.isSorted ? (
                                                                 column.isSortedDesc ? (
                                                                      <TriangleDownIcon aria-label="sorted descending" />
                                                                 ) : (
                                                                      <TriangleUpIcon aria-label="sorted ascending" />
                                                                 )
                                                            ) : null}
                                                       </chakra.span>
                                                       <div>
                                                            {column.canFilter ? (
                                                                 column.render(
                                                                      'Filter'
                                                                 )
                                                            ) : (
                                                                 <Box mt="1">
                                                                      <Input visibility="hidden" />
                                                                 </Box>
                                                            )}
                                                       </div>
                                                  </Th>
                                             </>
                                        ))}
                                   </Tr>
                              ))}
                         </Thead>
                         <Tbody {...getTableBodyProps()}>
                              {page.map((row) => {
                                   prepareRow(row);
                                   return (
                                        <Tr {...row.getRowProps()}>
                                             {row.cells.map((cell) => (
                                                  <Td
                                                       {...cell.getCellProps()}
                                                       isNumeric={cell.column}
                                                  >
                                                       {cell.render('Cell')}
                                                  </Td>
                                             ))}
                                        </Tr>
                                   );
                              })}
                         </Tbody>
                    </Table>
               </Box>
               <Flex
                    bg={bg}
                    padding="1rem 1rem"
                    mt={2}
                    width="100%"
                    rounded="lg"
                    mb={5}
                    alignItems="center"
                    boxShadow="base"
                    className="pagination"
                    flexWrap="wrap"
                    justifyContent="space-between"
               >
                    <ButtonGroup size="sm" colorScheme="blue" flexWrap="wrap">
                         <Button
                              onClick={() => gotoPage(0)}
                              disabled={!canPreviousPage}
                              leftIcon={<ImBackward2 />}
                              margin={2}
                         >
                              First
                         </Button>
                         <Button
                              onClick={() => previousPage()}
                              disabled={!canPreviousPage}
                              leftIcon={<IoMdArrowRoundBack />}
                              margin={2}
                         >
                              Previous
                         </Button>
                         <Button
                              onClick={() => nextPage()}
                              disabled={!canNextPage}
                              leftIcon={<IoMdArrowRoundForward />}
                              margin={2}
                         >
                              Next
                         </Button>
                         <Button
                              onClick={() => gotoPage(pageOptions.length - 1)}
                              disabled={!canNextPage}
                              leftIcon={<ImForward2 />}
                              margin={2}
                         >
                              Last
                         </Button>
                         <Button
                              onClick={() => loadMoreDoc()}
                              disabled={canNextPage}
                              leftIcon={<RiLoader3Fill />}
                              margin={2}
                         >
                              Load More
                         </Button>
                    </ButtonGroup>

                    <Select
                         value={pageSize}
                         width="xsm"
                         size="sm"
                         margin={2}
                         rounded="md"
                         onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                         {[10, 25, 50].map((pageSize) => (
                              <option key={pageSize} value={pageSize}>
                                   Show {pageSize}
                              </option>
                         ))}
                    </Select>

                    <Text margin={2}>
                         Page {pageIndex + 1} of {pageOptions.length}
                    </Text>
               </Flex>
          </Styles>
     );
};

export default LeadsData;

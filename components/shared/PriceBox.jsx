import {
     Box,
     Button,
     Flex,
     Grid,
     GridItem,
     Heading,
     Text
} from '@chakra-ui/react';
import React from 'react';
import { capitalizeFirstLetter } from '../helper/Capitalize';

export default function PriceBox({
     user,
     toRegister,
     coursePurchased,
     buttonId,
     handleUserPayment,
     courses,
     limited,
     unlimited
}) {
     console.log(limited);
     if (limited.length !== 0 && unlimited.length !== 0) {
          return (
               <Grid
                    gridTemplateColumns={{
                         sm: 'repeat(1,1fr)',
                         md: 'repeat(2,1fr)'
                    }}
                    gap={5}
                    width="100%"
                    mt={10}
               >
                    {' '}
                    <Grid gap={5}>
                         {limited.map((data, index) => {
                              console.log(data.price);

                              return (
                                   <GridItem
                                        bg={'aygreen.100'}
                                        height="auto"
                                        rounded="sm"
                                        padding={{
                                             base: '6',
                                             md: '8',
                                             lg: '8'
                                        }}
                                        textAlign="center"
                                        d="flex"
                                        boxShadow="base"
                                        flexDirection="column"
                                        key={data.id}
                                        justifyContent="space-between"
                                   >
                                        <Box>
                                             <Heading
                                                  fontSize={{
                                                       base: 'xl',
                                                       md: 'xl',
                                                       lg: '2xl'
                                                  }}
                                                  fontWeight="normal"
                                                  textAlign="left"
                                             >
                                                  {capitalizeFirstLetter(
                                                       data.courseName
                                                  )}
                                             </Heading>
                                             <Text
                                                  mt={5}
                                                  fontWeight="light"
                                                  textAlign="left"
                                                  fontSize={{
                                                       base: 'base',
                                                       md: 'md',
                                                       lg: 'lg'
                                                  }}
                                             >
                                                  {data.description}
                                             </Text>
                                        </Box>
                                        <Box>
                                             <Flex
                                                  justifyContent="space-between"
                                                  align="center"
                                                  mt={5}
                                             >
                                                  <Text
                                                       fontSize={{
                                                            base: 'md',
                                                            md: 'lg',
                                                            lg: 'xl'
                                                       }}
                                                  >
                                                       {data.duration}
                                                  </Text>
                                                  <Flex>
                                                       <Text
                                                            fontSize={{
                                                                 base: 'xl',
                                                                 md: '2xl',
                                                                 lg: '3xl'
                                                            }}
                                                       >
                                                            {toRegister !==
                                                            false
                                                                 ? '₹'
                                                                 : null}{' '}
                                                            {data.price}
                                                       </Text>
                                                  </Flex>
                                             </Flex>
                                             {toRegister !== false ? (
                                                  <Button
                                                       colorScheme="aygreen"
                                                       width="8rem"
                                                       size="sm"
                                                       rounded="sm"
                                                       mt={4}
                                                       isDisabled={coursePurchased.find(
                                                            (element) =>
                                                                 element ==
                                                                 data.id
                                                       )}
                                                       onClick={() =>
                                                            handleUserPayment(
                                                                 data.price,
                                                                 data.durationNum,
                                                                 data.description,
                                                                 data.courseName,
                                                                 data.id,
                                                                 data.isTrial
                                                            )
                                                       }
                                                       isLoading={
                                                            buttonId === data.id
                                                       }
                                                  >
                                                       {user
                                                            ? coursePurchased.find(
                                                                   (element) =>
                                                                        element ==
                                                                        data.id
                                                              ) !== undefined
                                                                 ? 'Purchased'
                                                                 : 'Register'
                                                            : 'Register'}
                                                  </Button>
                                             ) : null}
                                        </Box>
                                   </GridItem>
                              );
                         })}
                    </Grid>
                    <Grid gap={5}>
                         {unlimited.map((data, index) => {
                              return (
                                   <GridItem
                                        bg={'aygreen.200'}
                                        height="auto"
                                        rounded="sm"
                                        padding={{
                                             base: '6',
                                             md: '8',
                                             lg: '8'
                                        }}
                                        textAlign="center"
                                        d="flex"
                                        boxShadow="base"
                                        flexDirection="column"
                                        key={data.id}
                                        justifyContent="space-between"
                                   >
                                        <Box>
                                             <Heading
                                                  fontSize={{
                                                       base: 'xl',
                                                       md: 'xl',
                                                       lg: '2xl'
                                                  }}
                                                  fontWeight="normal"
                                                  textAlign="left"
                                             >
                                                  {capitalizeFirstLetter(
                                                       data.courseName
                                                  )}
                                             </Heading>
                                             <Text
                                                  mt={5}
                                                  fontWeight="light"
                                                  textAlign="left"
                                                  fontSize={{
                                                       base: 'base',
                                                       md: 'md',
                                                       lg: 'lg'
                                                  }}
                                             >
                                                  {data.description}
                                             </Text>
                                        </Box>
                                        <Box>
                                             <Flex
                                                  justifyContent="space-between"
                                                  align="center"
                                                  mt={5}
                                             >
                                                  <Text
                                                       fontSize={{
                                                            base: 'md',
                                                            md: 'lg',
                                                            lg: 'xl'
                                                       }}
                                                  >
                                                       {data.duration}
                                                  </Text>
                                                  <Flex>
                                                       <Text
                                                            fontSize={{
                                                                 base: 'xl',
                                                                 md: '2xl',
                                                                 lg: '3xl'
                                                            }}
                                                       >
                                                            {toRegister !==
                                                            false
                                                                 ? '₹'
                                                                 : null}{' '}
                                                            {data.price}
                                                       </Text>
                                                  </Flex>
                                             </Flex>
                                             {toRegister !== false ? (
                                                  <Button
                                                       colorScheme="aygreen"
                                                       width="8rem"
                                                       size="sm"
                                                       rounded="sm"
                                                       mt={4}
                                                       isDisabled={coursePurchased.find(
                                                            (element) =>
                                                                 element ==
                                                                 data.id
                                                       )}
                                                       onClick={() =>
                                                            handleUserPayment(
                                                                 data.price,
                                                                 data.durationNum,
                                                                 data.description,
                                                                 data.courseName,
                                                                 data.id,
                                                                 data.isTrial
                                                            )
                                                       }
                                                       isLoading={
                                                            buttonId === data.id
                                                       }
                                                  >
                                                       {user
                                                            ? coursePurchased.find(
                                                                   (element) =>
                                                                        element ==
                                                                        data.id
                                                              ) !== undefined
                                                                 ? 'Purchased'
                                                                 : 'Register'
                                                            : 'Register'}
                                                  </Button>
                                             ) : null}
                                        </Box>
                                   </GridItem>
                              );
                         })}
                    </Grid>
               </Grid>
          );
     } else if (courses.length !== 0) {
          return (
               <Grid
                    gridTemplateColumns={{
                         sm: 'repeat(1,1fr)',
                         md: 'repeat(2,1fr)'
                    }}
                    gap={5}
                    width="100%"
                    mt={12}
               >
                    {' '}
                    {courses.map((data, index) => {
                         return (
                              <GridItem
                                   bg={'aygreen.100'}
                                   height="auto"
                                   rounded="sm"
                                   padding={{
                                        base: '6',
                                        md: '8',
                                        lg: '8'
                                   }}
                                   textAlign="center"
                                   d="flex"
                                   boxShadow="base"
                                   flexDirection="column"
                                   key={data.id}
                                   justifyContent="space-between"
                              >
                                   <Box>
                                        <Heading
                                             fontSize={{
                                                  base: 'xl',
                                                  md: 'xl',
                                                  lg: '2xl'
                                             }}
                                             fontWeight="normal"
                                             textAlign="left"
                                        >
                                             {capitalizeFirstLetter(
                                                  data.courseName
                                             )}
                                        </Heading>
                                        <Text
                                             mt={5}
                                             fontWeight="light"
                                             textAlign="left"
                                             fontSize={{
                                                  base: 'base',
                                                  md: 'md',
                                                  lg: 'lg'
                                             }}
                                        >
                                             {data.description}
                                        </Text>
                                   </Box>
                                   <Box>
                                        <Flex
                                             justifyContent="space-between"
                                             align="center"
                                             mt={5}
                                        >
                                             <Text
                                                  fontSize={{
                                                       base: 'md',
                                                       md: 'lg',
                                                       lg: 'xl'
                                                  }}
                                             >
                                                  {data.duration}
                                             </Text>
                                             <Flex>
                                                  <Text
                                                       fontSize={{
                                                            base: 'xl',
                                                            md: '2xl',
                                                            lg: '3xl'
                                                       }}
                                                  >
                                                       {toRegister !== false
                                                            ? '₹'
                                                            : null}{' '}
                                                       {data.price}
                                                  </Text>
                                             </Flex>
                                        </Flex>
                                        {toRegister !== false ? (
                                             <Button
                                                  colorScheme="aygreen"
                                                  width="8rem"
                                                  size="sm"
                                                  rounded="sm"
                                                  mt={4}
                                                  isDisabled={coursePurchased.find(
                                                       (element) =>
                                                            element == data.id
                                                  )}
                                                  onClick={() =>
                                                       handleUserPayment(
                                                            data.price,
                                                            data.durationNum,
                                                            data.description,
                                                            data.courseName,
                                                            data.id,
                                                            data.isTrial
                                                       )
                                                  }
                                                  isLoading={
                                                       buttonId === data.id
                                                  }
                                             >
                                                  {user
                                                       ? coursePurchased.find(
                                                              (element) =>
                                                                   element ==
                                                                   data.id
                                                         ) !== undefined
                                                            ? 'Purchased'
                                                            : 'Register'
                                                       : 'Register'}
                                             </Button>
                                        ) : null}
                                   </Box>
                              </GridItem>
                         );
                    })}
               </Grid>
          );
     } else {
          return null;
     }
}

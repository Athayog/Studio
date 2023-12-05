import {
     Box,
     Flex,
     Grid,
     Heading,
     List,
     ListItem,
     OrderedList,
     SimpleGrid,
     Text,
     UnorderedList

} from '@chakra-ui/react';
import heroDesktop from 'public/hero_desk_1.jpg';
import React from 'react';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import { motion } from 'framer-motion';
import { MotionBox, MotionText } from '@/components/shared/MotionElements';
import Image from 'next/image';

const Classes = ({ classes }) => {
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem 0',
                    md: '3rem 0',
                    lg: '5rem 0'
               }}
               justifyContent="center"
               alignItems="center"
               width="100%"
               bg="white"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width={{ base: '90%', md: '85%', lg: '80%' }}
               >
                    <motion.h1
                         initial={{ scale: 0.8, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         layoutId="title"
                    >
                         <MotionText
                              cursor="pointer"
                              fontWeight="normal"
                              fontSize={{
                                   base: '3xl',
                                   md: '4xl',
                                   lg: '4xl'
                              }}
                              mb={5}
                         >

                              Class Formats
                         </MotionText>
                    </motion.h1>


                    {classes.map((data, index) => {
                         return (
                              <Flex
                              flexDirection={["column", null, "row"]} 
                                   justifyContent="flex-start"
                                   bg={
                                        index % 2 == 0
                                             ? 'aygreen.100'
                                             : 'aygreen.200'
                                   }
                                   height="25rem"
                                   rounded="lg"
                                   width="100%"
                                   cursor="pointer"
                                   boxShadow="base"
                                   textAlign="center"
                                   key={index}
                                   mb={10}
                              >
                                   {
                                        index % 2 == 0
                                             ?  <><Box flex="1" position='relative'order={[0, null, 0]}   overflow='hidden' >
                                             <Image
                                             overflow='hidden'
                                                  src={data.imageUrl}
                                                  alt={"Sd"}
                                                  layout="fill"
                                                  objectPosition="center top"
                                                  className="class-image"
                                                  objectFit="cover"
                                               
                                                  maxH="100%"
                                                  maxW="100%"
                                             />
                                        </Box>
                                        <Box 
                                        flex="1"
                                        padding={{
                                             base: '6',
                                             md: '8',
                                             lg: '10'
                                        }}>
                                             {' '}
                                             <Text
                                                  fontSize={{
                                                       base: 'xl',
                                                       md: '2xl',
                                                       lg: '2xl'
                                                  }}
                                                  fontWeight="normal"
                                             >
                                                  {capitalizeFirstLetter(
                                                       data.className
                                                  )}
                                             </Text>
                                             {data.classInfo
                                                  .split('\n')
                                                  .map((i, index) => {
                                                       return (
                                                            <Text
                                                                 mt={5}
                                                                 fontWeight="normal"
                                                                 textAlign="justify"
                                                                 whiteSpace="pre-wrap"
                                                                 key={index}
                                                                 fontSize={{
                                                                      base: 'base',
                                                                      md: 'md',
                                                                      lg: 'lg'
                                                                 }}
                                                            >
                                                                 {i}{' '}
                                                            </Text>
                                                       );
                                                  })}
                                        </Box></>
                                             : 
                                             <>
                                             <Box 
                                        flex="1"
                                        order={[1, null, 0]}
                                        padding={{
                                             base: '6',
                                             md: '8',
                                             lg: '10'
                                        }}>
                                             
                                             {' '}
                                             <Text
                                                  fontSize={{
                                                       base: 'xl',
                                                       md: '2xl',
                                                       lg: '2xl'
                                                  }}
                                                  fontWeight="normal"
                                             >
                                                  {capitalizeFirstLetter(
                                                       data.className
                                                  )}
                                             </Text>
                                             {data.classInfo
                                                  .split('\n')
                                                  .map((i, index) => {
                                                       return (
                                                            <Text
                                                                 mt={5}
                                                                 fontWeight="normal"
                                                                 textAlign="justify"
                                                                 whiteSpace="pre-wrap"
                                                                 key={index}
                                                                 fontSize={{
                                                                      base: 'base',
                                                                      md: 'md',
                                                                      lg: 'lg'
                                                                 }}
                                                            >
                                                                 {i}{' '}
                                                            </Text>
                                                       );
                                                  })}
                                        </Box>
                                             <Box flex="1"  overflow='hidden'  position='relative'>
                                             <Image
                                             className="class-image"
                                             overflow='hidden'
                                                  src={data.imageUrl}
                                                  alt={data.className}
                                                  objectFit="cover"
                                                  
                                                  layout="fill"
                                                  objectPosition="center bottom"
                                                  maxH="100%"
                                                  maxW="100%"
                                             />
                                        </Box>
                                        </>
                                   }
                                  


                              </Flex>
                         );
                    })}

               </Flex>
          </Flex>
     );
};

export default Classes;

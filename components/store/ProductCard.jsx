import React from 'react';
import {
     Card,
     CardHeader,
     CardBody,
     CardFooter,
     Stack,
     Heading,
     Text,
     ButtonGroup,
     Button,
     Divider,
     Box,
     Flex
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({
     name,
     image,
     description,
     attributes,
     price,
     url
}) {
     return (
          <Box
               w={{ base: '100%' }}
               border="1px"
               rounded="lg"
               borderColor="gray.200"
          >
               <Box>
                    <Flex
                         borderRadius="lg"
                         overflow="hidden"
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                    >
                         <Image
                              src={image}
                              alt="Green double couch with wooden legs"
                              height={250}
                              width={250}
                         />
                    </Flex>
                    <Divider />
                    <Stack mt="2" spacing="3" p={3}>
                         <Box>
                              <Heading size="sm" fontWeight="600">
                                   {name}
                              </Heading>
                              <Text mt={1} color="green.900" fontSize="lg">
                                   ₹{price}
                              </Text>
                         </Box>

                         <Box>
                              <Link href={'store/product/' + url} passHref>
                                   <Button
                                        size="sm"
                                        width="full"
                                        variant="solid"
                                        colorScheme="gray"
                                   >
                                        Check Now
                                   </Button>
                              </Link>
                         </Box>
                    </Stack>
               </Box>
          </Box>
     );
}

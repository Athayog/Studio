import { Box, Grid, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';

function BasicInfo() {
     return (
          <Box
               margin="0 auto"
               textColor="green.900"
               bg="green.50"
               textAlign="center"
               w="100%"
          >
               <Grid
                    gridTemplateColumns={{
                         base: '1fr',
                         lg: 'repeat(2,1fr)'
                    }}
                    gridGap={{ base: '0', md: '10' }}
                    alignItems="center"
                    justifyContent="space-evenly"
                    width="100%"
               >
                    <Box p={5}>
                         <Text
                              margin="0 auto"
                              fontSize={{ base: '2xl', md: '4xl' }}
                         >
                              Let your children, move, pose, breathe and chant
                              their hearts out, they will come back to you as
                              centred, mindful and happy beings.
                         </Text>
                    </Box>
                    <Box width="100%" bg="white" py={{ base: '10', md: '20' }}>
                         <List
                              width={{ base: '95%', md: '80%' }}
                              spacing={3}
                              fontSize={{ base: 'md', md: 'xl' }}
                              textAlign="left"
                              margin="0 auto"
                         >
                              <ListItem>
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="green.500"
                                   />
                                   Move, Pose &amp; Breathe in the Yoga Asana
                                   Class
                              </ListItem>
                              <ListItem>
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="green.500"
                                   />
                                   Chant your Hearts out at Satsang
                              </ListItem>
                              <ListItem>
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="green.500"
                                   />
                                   Learn through Play with Yoga games &amp; more
                              </ListItem>
                              <ListItem>
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="green.500"
                                   />
                                   Group activities to Nurture their Social
                                   skills
                              </ListItem>
                              <ListItem>
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="green.500"
                                   />
                                   Sattvic snacks to help develop Healthy Eating
                                   Habits
                              </ListItem>
                         </List>
                    </Box>
               </Grid>
          </Box>
     );
}

export default BasicInfo;

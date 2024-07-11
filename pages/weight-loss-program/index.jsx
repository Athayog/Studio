// pages/WeightLossProgram.js
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box, Button, Container, Divider, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Binu from 'public/Binu Francis.png';
import Sweta from 'public/Swetha Reddy.png';
import Practice1 from 'public/WL-AS_1.png';
import Practice2 from 'public/WL-AS_2.png';
import Practice3 from 'public/WL-AS_3.png';
import HomeWall from 'public/WL_1.svg';
import Support1 from 'public/WL_10.png';
import Support2 from 'public/WL_11.png';
import Support3 from 'public/WL_12.png';
import Support4 from 'public/WL_13.png';
import HomeWoman from 'public/WL_2.png';
import Flower from 'public/WL_F.svg';
import Footer from 'public/WL_FOOTER.svg';
import LeftArrow from 'public/WL_LEFT.png';
import RightArrow from 'public/WL_RIGHT.png';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './style.module.css'; // Import CSS module

function WeightLossProgram() {
     return (
          <div>
               <NavbarHelper />

               {/* Home */}
               <Box className={styles.backgroundContainer} position="relative">
                    <Box  display="flex" position='relative' maxW="1440px" margin="0 auto" flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
                         <Box
                              p={{
                                   base: '20px 20px',
                                   sm: '20px 20px',
                                   md: '100px 10px 100px 50px',
                                   lg: ' 100px 10px 100px 50px',
                                   xl: '100px 50px'
                              }}
                              width="100%"
                         >
                              <Box display="flex" alignItems={{ base: 'center', md: 'baseline' }} flexDirection="column">
                                   <Heading
                                        textAlign={{ base: 'center', md: 'left' }}
                                        color="#CF1B2A"
                                        fontSize={{
                                             base: '32px',
                                             sm: '32px',
                                             md: '36px',
                                             lg: '56px',
                                             xl: '74px'
                                        }}
                                   >
                                        3 Months Yoga <br /> Weight Loss Program
                                   </Heading>
                                   <Box display={{ base: 'block', md: 'none' }} width='400px'>
                                        <Image src={HomeWoman} style={{ position: 'absolute', bottom: '0', right: '0' }} />
                                   </Box>
                                   <Box
                                        w={{
                                             base: '100%',
                                             sm: '100%',
                                             md: '60%',
                                             lg: '55%',
                                             xl: '65%'
                                        }}
                                        display="flex"
                                        flexDirection={{ base: 'column', md: 'column' }}
                                        alignItems={{ base: 'center', md: 'baseline' }}
                                   >
                                        <Text
                                             fontSize={{
                                                  base: '18px',
                                                  sm: '18px',
                                                  md: '22px',
                                                  lg: '22px',
                                                  xl: '32px'
                                             }}
                                             textAlign={{ base: 'center', md: 'left' }}
                                             fontWeight="semibold"
                                             mt={{ base: '15px', lg: '15px' }}
                                        >
                                             This 3 month program at AthaYog offers a holistic approach to weight loss, helping you achieve lasting results through <span style={{ fontWeight: 'bold' }}>Asana practice </span>and <span style={{ fontWeight: 'bold' }}>Pesonalised support</span>
                                        </Text>
                                        <Text
                                             fontWeight="semibold"
                                             fontSize={{
                                                  base: '18px',
                                                  sm: '18px',
                                                  md: '22px',
                                                  lg: '22px',
                                                  xl: '36px'
                                             }}
                                             color="#097300"
                                             textAlign={{ base: 'center', md: 'left' }}
                                             mt={{ base: '20px', md: '30px', lg: '34px' }}
                                        >
                                             Starting from <span style={{ fontWeight: 'bold' }}>29th July</span>
                                        </Text>
                                        <Link href="#" passHref>
                                             <Button
                                                  zIndex="2"
                                                  width="max-content"
                                                  p={{ base: '30px 50px', md: '30px 50px', lg: '40px 80px' }}
                                                  fontSize={{
                                                       base: '22px',
                                                       md: '24px',
                                                       lg: '24px',
                                                       xl: '30px'
                                                  }}
                                                  fontWeight="700"
                                                  _hover={{ backgroundColor: '#1E5C18' }}
                                                  backgroundColor="#097300"
                                                  color="white"
                                                  rounded="full"
                                                  mt={{ base: '20px', md: '20px', lg: '30px' }}
                                             >
                                                  Register Now
                                             </Button>
                                        </Link>
                                   </Box>
                              </Box>
                            
                         </Box>
                         <Box
                              display={{ base: 'none', md: 'block' }}
                              position="absolute"
                              bottom="0px"
                              right="0px"
                              width={{
                                   base: '0px',
                                   sm: '300px',
                                   md: '400px',
                                   lg: '450px',
                                   xl: '600px'
                              }}
                         >
                              <Image src={HomeWoman} style={{ position: 'absolute', bottom: '0', right: '0' }} />
                         </Box>
                         <Box
                              width={{
                                   base: '0px',
                                   sm: '100px',
                                   md: '220px',
                                   lg: '450px',
                                   xl: '600px'
                              }}
                              position="absolute"
                              display={{ base: 'none', md: 'block' }}
                              right="30"
                              top="30"
                              zIndex="-1"
                         >
                              <Image src={Flower} />
                         </Box>
                    </Box>
                      <Box zIndex="-2">
                                   <Image src={HomeWall} layout="fill" objectFit="cover" className={styles.backgroundImage} styles={{ zIndex: '-2' }} />
                              </Box>
               </Box>
               <Container
                    display="flex"
                    maxW="1440px"
                    p={{
                         base: '20px',
                         sm: '20px',
                         md: '50px',
                         lg: ' 50px',
                         xl: '120px 100px'
                    }}
                    margin="0 auto"
                    flexDir="column"
                    mt={{ base: '50px', md: '50px' }}
               >
                    <Heading
                         textAlign="center"
                         color="#CF1B2A"
                         fontSize={{
                              base: '40px',
                              sm: '40px',
                              md: '40px',
                              lg: '56px',
                              xl: '74px'
                         }}
                         mb="60px"
                    >
                         Asana Practice
                    </Heading>

                    <Box display="flex" flexDirection={{ base: 'column-reverse', md: 'row' }} alignItems={'center'} width="100%" justifyContent="space-between">
                         <Box display="flex" flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }} maxW="500px">
                              <Text fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }} fontWeight="bold">
                                   Monday to Thursday
                              </Text>
                              <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} textAlign={{ base: 'center', md: 'left' }} fontWeight="semibold">
                                   Intense asana practice to help loss weight, Build strength and improve flexibility
                              </Text>
                         </Box>
                         <Box>
                              <Image src={Practice1} />
                         </Box>
                    </Box>
                    <Divider my={10} />
                    <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems={'center'} width="100%" justifyContent="space-between">
                         <Box>
                              <Image src={Practice2} />
                         </Box>
                         <Box display="flex" flexDirection="column" alignItems={{ base: 'center', md: 'flex-end' }} maxW="500px">
                              <Text fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }} fontWeight="bold">
                                   Friday
                              </Text>
                              <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} textAlign={{ base: 'center', md: 'right' }} fontWeight="semibold">
                                   108 surya namaskar for improving endurance and full body workout
                              </Text>
                         </Box>
                    </Box>
                    <Divider my={10} />
                    <Box display="flex" flexDirection={{ base: 'column-reverse', md: 'row' }} alignItems={'center'} width="100%" justifyContent="space-between">
                         <Box display="flex" flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }} maxW="500px">
                              <Text fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }} fontWeight="bold">
                                   Sunday
                              </Text>
                              <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight="semibold" textAlign={{ base: 'center', md: 'left' }}>
                                   Kriya practice (Advance cleansing/ Detox techniques)
                              </Text>
                         </Box>
                         <Box>
                              <Image src={Practice3} />
                         </Box>
                    </Box>
               </Container>
               <Container
                    display="flex"
                    maxW="1440px"
                    p={{
                         base: '20px',
                         sm: '20px',
                         md: '50px',
                         lg: ' 50px',
                         xl: '120px 100px'
                    }}
                    margin="0 auto"
                    flexDir="column"
                    mt={{ base: '50px', md: '50px' }}
               >
                    <Heading
                         textAlign="center"
                         color="#CF1B2A"
                         fontSize={{
                              base: '36px',
                              sm: '36px',
                              md: '36px',
                              lg: '56px',
                              xl: '74px'
                         }}
                         mb="60px"
                    >
                         Personalised Support
                    </Heading>
                    <Grid gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} justifyContent='center' alignItems='center' gap={{ base: '40px', md: '40px', lg: '50px' }}>
                         <Box margin='0 auto'>
                              <Box >
                                   <Image src={Support1} />
                                   <Text
                                        fontWeight="bold"
                                        fontSize={{
                                             base: '28px',
                                             sm: '28px',
                                             md: '28px',
                                             lg: '32px',
                                             xl: '40px'
                                        }}
                                        mt={{ base: '10px', md: '30px', lg: '34px' }}
                                        textAlign="center"
                                   >
                                        BMI Check
                                   </Text>
                              </Box>
                         </Box>
                         <Box margin='0 auto'>
                              <Box>
                                   <Image src={Support2} />
                                   <Text
                                        fontWeight="bold"
                                        fontSize={{
                                             base: '28px',
                                             sm: '28px',
                                             md: '28px',
                                             lg: '32px',
                                             xl: '40px'
                                        }}
                                        mt={{ base: '10px', md: '30px', lg: '34px' }}
                                        textAlign="center"
                                   >
                                        Weekly Reassessments
                                   </Text>
                              </Box>
                         </Box>
                         <Box margin='0 auto'>
                              <Box>
                                   <Image src={Support3} />
                                   <Text
                                        fontWeight="bold"
                                        fontSize={{
                                             base: '28px',
                                             sm: '28px',
                                             md: '28px',
                                             lg: '32px',
                                             xl: '40px'
                                        }}
                                        mt={{ base: '10px', md: '30px', lg: '34px' }}
                                        textAlign="center"
                                   >
                                        Counselling Sessions
                                   </Text>
                              </Box>
                         </Box>
                         <Box margin='0 auto'>
                              <Box>
                                   <Image src={Support4} />
                                   <Text
                                        fontWeight="bold"
                                        fontSize={{
                                             base: '28px',
                                             sm: '28px',
                                             md: '28px',
                                             lg: '32px',
                                             xl: '40px'
                                        }}
                                        mt={{ base: '10px', md: '30px', lg: '34px' }}
                                        textAlign="center"
                                   >
                                        Nutrition Consultation
                                   </Text>
                              </Box>
                         </Box>
                    </Grid>
               </Container>
               <Container
                    display="flex"
                    maxW="1440px"
                    p={{
                         base: '50px',
                         sm: '50px',
                         md: '50px',
                         lg: ' 50px',
                         xl: '120px 100px'
                    }}
                    margin="0 auto"
                    flexDir="column"
               >
                    <Heading
                         textAlign="center"
                         display={{ base: 'none', md: 'block' }}
                         color="#CF1B2A"
                         m="auto"
                         fontSize={{
                              base: '36px',
                              sm: '36px',
                              md: '36px',
                              lg: '44px',
                              xl: '54x'
                         }}
                         maxW="6xl"
                         mb={{ base: '10px', md: '30px', lg: '60px' }}
                    >
                         Transform Your Body & Mind: Start Your <br /> 3-Month Trim Transformation Today!
                    </Heading>
                    <Heading
                         textAlign="center"
                         color="#CF1B2A"
                         m="auto"
                         fontSize={{
                              base: '36px',
                              sm: '36px',
                              md: '36px',
                              lg: '44px',
                              xl: '54x'
                         }}
                         maxW="6xl"
                         mb={{ base: '10px', md: '30px', lg: '60px' }}
                         display={{ base: 'block', md: 'none' }}
                    >
                         Transform Your Body & Mind: Start Your 3-Month Trim Transformation Today!
                    </Heading>
                    <Link href="#" passHref>
                         <Button
                              p={{ base: '30px 50px', md: '30px 50px', lg: '40px 80px' }}
                              fontSize={{
                                   base: '26px',
                                   md: '26px',
                                   lg: '30px',
                                   xl: '30px'
                              }}
                              fontWeight="700"
                              _hover={{ backgroundColor: '#BF1D2C' }}
                              backgroundColor="#097300"
                              color="white"
                              rounded="full"
                              width="fit-content"
                              margin="0 auto"
                              mt="30px"
                         >
                              Register Now
                         </Button>
                    </Link>
               </Container>

               <Box position="relative" py="30px">
                    <Box maxW="1440px" margin="0 auto" padding="20px" position="relative">
                         <Heading
                              textAlign="center"
                              fontSize={{
                                   base: '32px',
                                   sm: '32px',
                                   md: '36px',
                                   lg: '56px',
                                   xl: '74px'
                              }}
                              mb="20px"
                         >
                              Testimonials
                         </Heading>
                         <Swiper
                              slidesPerView={1}
                              spaceBetween={10}
                              navigation={{
                                   nextEl: '.swiper-button-next',
                                   prevEl: '.swiper-button-prev'
                              }}
                              modules={[Navigation]}
                         >
                              <SwiperSlide key="1">
                                   <Box height="100%" width="100%" textAlign="center">
                                        <Box rounded="base" overflow="hidden" height="100%" width="300px" margin="0 auto">
                                             <Image layout="responsive" height="10px" width="10px" objectFit="cover" alt="Sweta" src={Sweta} />
                                        </Box>
                                        <Box mt="20px">
                                             <Text fontWeight="bold" fontSize={{ base: '30px', md: '38px', lg: '44px' }}>
                                                  Swetha Reddy
                                             </Text>
                                             <Text fontWeight="medium" fontSize={{ base: '20px', md: '30px', lg: '39px' }}>
                                                  Agile coach at EY
                                             </Text>
                                             <Text mt="40px" fontWeight="medium" fontSize={{ base: '20px', md: '20px', lg: '24px' }}>
                                                  As a 38-year-old woman working in IT, I know how challenging it can be to maintain a healthy lifestyle with a demanding job. Three months ago, I decided to join the Athayog Weight Loss Program, and it has been a transformative experience. I’ve lost 7 kg, which is a significant achievement for me. But beyond the numbers on the scale, I’ve experienced improvements in other areas of my life. My sleep cycle has dramatically improved, allowing me to wake up refreshed and ready for the day. My energy levels have soared, and I no longer feel the
                                                  mid-day slump that used to plague me.
                                             </Text>

                                             <Text mt="30px" fontWeight="medium" fontSize={{ base: '20px', md: '20px', lg: '24px' }}>
                                                  One of the most rewarding moments was being able to fit into my 7-year-old jeans again. It felt like a tangible reminder of how far I’ve come. The Athayog program provided me with the guidance, support and motivation I needed to make these positive changes. I’m grateful for this journey and excited to continue living a healthier, more energetic life.
                                             </Text>
                                        </Box>
                                   </Box>
                              </SwiperSlide>
                              <SwiperSlide key="2">
                                   <Box height="100%" width="100%" textAlign="center">
                                        <Box rounded="base" overflow="hidden" height="100%" width="300px" margin="0 auto">
                                             <Image layout="responsive" height="10px" width="10px" objectFit="cover" alt="Binu" src={Binu} />
                                        </Box>
                                        <Box mt="20px">
                                             <Text fontWeight="bold" fontSize={{ base: '30px', md: '38px', lg: '44px' }}>
                                                  Binu Francis
                                             </Text>
                                             <Text fontWeight="medium" fontSize={{ base: '20px', md: '30px', lg: '39px' }}>
                                                  Manager
                                             </Text>
                                             <Text mt="40px" fontWeight="medium" fontSize={{ base: '20px', md: '20px', lg: '24px' }}>
                                                  As a 45-year-old bank manager, my job is demanding and stressful, making it difficult to prioritize my health. Joining the Athayog Weight Loss Program was a game-changer. In just three months, I lost 9 kg, but the benefits extended beyond weight loss.
                                             </Text>
                                             <Text mt="30px" fontWeight="medium" fontSize={{ base: '20px', md: '20px', lg: '24px' }}>
                                                  My sleep cycle improved significantly, allowing me to wake up refreshed and ready for the day. I noticed a remarkable boost in my energy levels, helping me stay productive and focused throughout my busy workdays. The icing on the cake was fitting into my favorite jeans from years ago—something I thought was impossible.
                                             </Text>
                                             <Text mt="30px" fontWeight="medium" fontSize={{ base: '20px', md: '20px', lg: '24px' }}>
                                                  Athayog provided the structure, support, and motivation I needed to make lasting changes. I’m grateful for the positive impact this program has had on my health and overall quality of life."
                                             </Text>
                                        </Box>
                                   </Box>
                              </SwiperSlide>
                         </Swiper>
                         <Box position="relative" height="100px" display="flex" justifyContent="center" gap="10px" width="100%">
                              <Box className="swiper-button-prev" left="auto" marginLeft="-150px" color="#097300 !important" backgroundColor="white" padding="30px">
                                   <Image src={LeftArrow} alt="Previous" width={50} height={50} />
                              </Box>
                              <Box className="swiper-button-next" right="auto" marginRight="-150px" color="#097300 !important" backgroundColor="white" padding="30px">
                                   <Image src={RightArrow} alt="Next" width={50} height={50} />
                              </Box>
                         </Box>
                    </Box>
                    <Box>
                         <Image src={Footer} layout="fill" objectFit="cover" className={styles.backgroundImage} />
                    </Box>
               </Box>
          </div>
     );
}

export default WeightLossProgram;
WeightLossProgram.Layout = HomeLayout;

import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Data from '@/lib/storedata.json';

// Import Swiper React components
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import EnquireModal from '@/components/store/EnquireModal';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import HomeLayout from '@/components/layout/HomeLayout';

function ProductPage({ product, colors }) {
     const router = useRouter();
     const [thumbsSwiper, setThumbsSwiper] = useState(null);
     const slideTo = (index) => swiper.slideTo(index);
     return (
          <Box minH="100vh" py={10} maxW="90vw" m="0 auto" mt={20}>
               <Link href="/store/" passHref>
                    <Button leftIcon={<ArrowBackIcon />} variant="outline">
                         Back
                    </Button>
               </Link>
               <Head>
                    <title>{product.name}</title>
                    <meta
                         name="description"
                         content="Generated by create next app"
                    />
                    <meta
                         name="viewport"
                         content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <Flex
                    mt={0}
                    gap={20}
                    px={3}
                    justifyContent="center"
                    wrap="wrap"
                    position="relative"
               >
                    <Box
                         width={{
                              base: '100%',
                              sm: '100%',
                              md: '100%',
                              lg: '40%'
                         }}
                    >
                         <Swiper
                              style={{
                                   '--swiper-navigation-color': '#000',
                                   '--swiper-pagination-color': '#000'
                              }}
                              navigation={true}
                              spaceBetween={0}
                              centeredSlides={true}
                              thumbs={{
                                   swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed
                                             ? thumbsSwiper
                                             : null
                              }}
                              modules={[FreeMode, Navigation, Thumbs]}
                         >
                              {product.otherImages.map((image, idx) => {
                                   return (
                                        <SwiperSlide key={idx}>
                                             <Image
                                                  src={image}
                                                  height={600}
                                                  width={600}
                                                  alt={product.name}
                                             />
                                        </SwiperSlide>
                                   );
                              })}
                         </Swiper>

                         <Swiper
                              onSwiper={setThumbsSwiper}
                              slidesPerView={4}
                              spaceBetween={5}
                              freeMode={true}
                              watchSlidesProgress={true}
                              modules={[FreeMode, Navigation, Thumbs]}
                              className="mySwiper"
                         >
                              {product.otherImages.map((image, idx) => {
                                   return (
                                        <SwiperSlide key={idx}>
                                             <Image
                                                  src={image}
                                                  height={500}
                                                  width={500}
                                                  alt={product.name}
                                             />
                                        </SwiperSlide>
                                   );
                              })}
                         </Swiper>
                    </Box>
                    <Box
                         width={{
                              base: '100%',
                              sm: '100%',
                              md: '100%',
                              lg: '40%'
                         }}
                    >
                         <Text fontWeight="600" fontSize="2xl">
                              {' '}
                              {product.name}
                         </Text>

                         <Text
                              color="green.800"
                              fontWeight="500"
                              fontSize="2xl"
                         >
                              ₹{product.price}
                         </Text>
                         {product.priceType?.map((type, idx) => {
                              return (
                                   <Tag key={idx} mr={3}>
                                        ₹{type.price} {type.text}
                                   </Tag>
                              );
                         })}
                         {colors && (
                              <Flex gap={2} mt={2}>
                                   {colors.map((color, idx) => {
                                        return (
                                             <Button size="sm" key={idx}>
                                                  {color.name}
                                             </Button>
                                        );
                                   })}
                              </Flex>
                         )}

                         <Text mt={10}>
                              {ReactHtmlParser(product.description)}
                         </Text>
                         <EnquireModal product={product} colors={colors} />
                    </Box>
               </Flex>
          </Box>
     );
}
export default ProductPage;
ProductPage.Layout = HomeLayout;
export async function getStaticPaths() {
     let products = Data;
     const paths = products.map((product) => {
          return {
               params: {
                    name: product.url
               }
          };
     });

     return {
          paths,
          fallback: false
     };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
     const id = params.name;
     let product = Data.find((product) => product.url === id);
     let colors = null;
     if (product.attributes) {
          colors = product.attributes.colors;
     }
     // Pass post data to the page via props
     return { props: { product, colors } };
}
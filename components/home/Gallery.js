import fetcher from '@/utils/fetcher';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import React from 'react';

import useSWR from 'swr';

import Image from 'next/image';
// Import Swiper React components
import Swiper from 'react-id-swiper';

import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';

// Import Swiper styles

import 'swiper/swiper-bundle.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Gallery = ({ images }) => {
     const { data, error } = useSWR(`/api/images/gallery`, fetcher, {
          initialData: images
     });
     if (error) return <Skeleton height="100vh"></Skeleton>;

     if (!data) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     if (data.images.length === 0) {
          return null;
     }

     const totalImages = data.images.length;

     let sliderPerView = 3;
     let xl = 4;
     let md = 3;
     let sm = 2;
     let vs = 1;

     if (totalImages == 2) {
          sliderPerView = 2;
          xl = 2;
          md = 2;
          (sm = 1), (vs = 1);
     } else if (totalImages == 1) {
          sliderPerView = 1;
          xl = 1;
          md = 1;
          (sm = 1), (vs = 1);
     } else {
          sliderPerView = 3;
          xl = 3;
          md = 3;
          (sm = 2), (vs = 1);
     }

     const params = {
          slidesPerView: sliderPerView,
          spaceBetween: 30,
          pagination: {
               el: '.swiper-pagination',
               clickable: true
          },
          autoplay: {
               delay: 2500,
               disableOnInteraction: false
          },
          navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev'
          },
          renderPrevButton: () => (
               <IoIosArrowBack
                    className="swiper-button-prev"
                    style={{ color: 'black' }}
               />
          ),
          renderNextButton: () => (
               <IoIosArrowForward
                    className="swiper-button-next"
                    style={{ color: 'black' }}
               />
          ),
          breakpoints: {
               1024: {
                    slidesPerView: xl,
                    spaceBetween: 30
               },
               768: {
                    slidesPerView: md,
                    spaceBetween: 30
               },
               640: {
                    slidesPerView: sm,
                    spaceBetween: 20
               },
               320: {
                    slidesPerView: vs,
                    spaceBetween: 10
               }
          }
     };

     return (
          <Box
               padding={{ base: '1rem', md: '2rem', lg: '5rem' }}
               height="100%"
               margin="auto"
               bg="gray.200"
          >
               <Heading
                    fontWeight="normal"
                    textAlign="center"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    mb={{ base: '2', md: '5', lg: '10' }}
               >
                    Gallery
               </Heading>
               <Swiper {...params}>
                    {data.images.map((data) => {
                         return (
                              <Box rounded="lg" overflow="hidden" key={data.id}>
                                   <Image
                                        layout="responsive"
                                        height="150px"
                                        width="300px"
                                        objectFit="cover"
                                        src={data.imageUrl}
                                   />
                              </Box>
                         );
                    })}
               </Swiper>
          </Box>
     );
};

export async function getStaticProps(context) {
     const images = await fetcher('/api/images/gallery');
     return { props: { images }, revalidate: 1 };
}

export default Gallery;

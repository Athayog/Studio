import fetcher from '@/utils/fetcher';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Swiper from 'react-id-swiper';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Gallery = ({ images }) => {
     const { data, error } = useSWR(`/api/images/gallery`, fetcher, {
          initialData: images
     });
     if (error) return <Skeleton height="350px"></Skeleton>;

     if (!data) {
          return <Skeleton height="350px"></Skeleton>;
     }

     if (data.images.length === 0) {
          return null;
     }

     const activeImage = data.images.filter((image) => image.isActive === true);

     if (activeImage.length === 0) {
          return null;
     }

     const totalImages = activeImage.length;

     let sliderPerView = 5;
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
          sliderPerView = sliderPerView;
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

     const soundMediation = [
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/sound%2FIMG_0813.jpg?alt=media&token=bb7ba315-7cd8-470b-ae74-ff93a763ded4',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/sound%2FIMG_0814.jpg?alt=media&token=0c16cf7b-7d0d-44ef-b29b-8492c2189067',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/sound%2FIMG_0819.jpg?alt=media&token=c605b77c-d90d-4820-ba27-9bfee51b9f29',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/sound%2FIMG_0825.jpg?alt=media&token=b70af84d-b107-440f-9269-c21797a0ac1d',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/sound%2FIMG_0826.jpg?alt=media&token=2e015077-c8b4-4533-8d77-7f2b8a352c55',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/sound%2FIMG_0856.jpg?alt=media&token=2dcc0c5d-f46f-42d4-ac06-b9f22f7d15f1',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/sound%2FIMG_0877.jpg?alt=media&token=00cdf575-b0bf-47db-b502-92c13f5d25d6',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/sound%2FIMG_0897.jpg?alt=media&token=73b878f5-964e-4c91-b488-87779ebbfc5a'
     ];
     const aromaTherapy = [
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/aroma%2F_DSC1724.JPG?alt=media&token=13db967d-ed55-4a2c-a1ee-0d6071208326',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/aroma%2F_DSC1741.JPG?alt=media&token=6105e84b-9937-40f2-aa20-785155fd3307',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/aroma%2F_DSC1758.jpeg?alt=media&token=fcf2e525-7516-472f-b5b1-1997548a27b3',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/aroma%2F_DSC1760.jpeg?alt=media&token=dd841bb9-5620-48a6-98e4-9465b923f695',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/aroma%2F_DSC1768.JPG?alt=media&token=dd74e04b-1c11-4ce5-a21c-1196561f18de',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/aroma%2F_DSC1770.JPG?alt=media&token=0c78d178-305b-4d1b-b7b5-fd36b5cb708f',
          'https://firebasestorage.googleapis.com/v0/b/athayog-e4ff7.appspot.com/o/aroma%2F_DSC1771.JPG?alt=media&token=73c01757-249d-488c-83df-79144ff16dac'
     ];

     return (
          <>
               <Box
                    padding={{ base: '1rem', md: '2rem', lg: '3rem' }}
                    height="100%"
                    margin="auto"
                    bg="gray.200"
               >
                    <Heading
                         fontWeight="normal"
                         textAlign="left"
                         fontSize={{ base: 'xl', md: '2xl' }}
                         mb={{ base: '2', md: '5', lg: '10' }}
                         borderBottom="2px solid green"
                         maxW="max-content"
                    >
                         Gallery
                    </Heading>
                    <Swiper {...params} key={uuidv4()}>
                         {activeImage
                              .sort((a, b) => a.position - b.position)
                              .map((image) => {
                                   return (
                                        <Box
                                             rounded="base"
                                             overflow="hidden"
                                             key={image.id}
                                        >
                                             <Image
                                                  layout="responsive"
                                                  height="150px"
                                                  width="300px"
                                                  objectFit="cover"
                                                  alt={image.alt}
                                                  src={image.imageUrl}
                                             />
                                        </Box>
                                   );
                              })}
                    </Swiper>
               </Box>
               <Box
                    padding={{ base: '1rem', md: '2rem', lg: '3rem' }}
                    height="100%"
                    margin="auto"
                    bg="gray.200"
               >
                    <Heading
                         fontWeight="normal"
                         textAlign="left"
                         fontSize={{ base: 'xl', md: '2xl' }}
                         mb={{ base: '2', md: '5', lg: '10' }}
                         borderBottom="2px solid green"
                         maxW="max-content"
                    >
                         Sound Meditation
                    </Heading>
                    <Swiper {...params} key={uuidv4()}>
                         {soundMediation
                              .sort((a, b) => a.position - b.position)
                              .map((image) => {
                                   return (
                                        <Box
                                             rounded="base"
                                             overflow="hidden"
                                             key={image.id}
                                        >
                                             <Image
                                                  layout="responsive"
                                                  height="150px"
                                                  width="300px"
                                                  objectFit="cover"
                                                  alt={image}
                                                  src={image}
                                             />
                                        </Box>
                                   );
                              })}
                    </Swiper>
               </Box>
               <Box
                    padding={{ base: '1rem', md: '2rem', lg: '3rem' }}
                    height="100%"
                    margin="auto"
                    bg="gray.200"
               >
                    <Heading
                         fontWeight="normal"
                         textAlign="left"
                         fontSize={{ base: 'xl', md: '2xl' }}
                         mb={{ base: '2', md: '5', lg: '10' }}
                         borderBottom="2px solid green"
                         maxW="max-content"
                    >
                         Aroma Therapy
                    </Heading>
                    <Swiper {...params} key={uuidv4()}>
                         {aromaTherapy
                              .sort((a, b) => a.position - b.position)
                              .map((image) => {
                                   return (
                                        <Box
                                             rounded="base"
                                             overflow="hidden"
                                             key={image.id}
                                        >
                                             <Image
                                                  layout="responsive"
                                                  height="150px"
                                                  width="300px"
                                                  objectFit="cover"
                                                  alt={image}
                                                  src={image}
                                             />
                                        </Box>
                                   );
                              })}
                    </Swiper>
               </Box>
          </>
     );
};

export default Gallery;

import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import { v4 as uuidv4 } from 'uuid';
import kidsDesktop from 'public/kids-summer-desktop.png';
import kidsMobile from 'public/kids-summer-mobile.png';
import jayantiDesktop from 'public/jayanti_dekstop.png';
import jayantiMobile from 'public/jayanti_mobile.png';
import heroDesktop from 'public/hero_desk_1.jpg';
import heroMobile from 'public/hero_mobile_1.jpg';
import { useRouter } from 'next/router';
SwiperCore.use([Navigation, Pagination]);
import { isMobile } from 'react-device-detect';
import NavbarHelper from '../shared/NavbarHelper';

const HeroCarousel = () => {
     const router = useRouter();
     const [collection, setCollection] = useState([]);

     const pushToLink = (url) => {
          if (url !== null) router.push(url);
     };

     const images = [
          {
               id: 0,
               alt: 'Athayog Living',
               imageUrl: heroDesktop,
               url: null
          }

          // {
          //      id: 3,
          //      alt: 'Yoga retreat',
          //      imageUrl: jayantiDesktop,
          //      url: '/yoga-retreat'
          // }
     ];

     const imagesMobile = [
          {
               id: 0,
               alt: 'Athayog Living',
               imageUrl: heroMobile,
               url: null
          }

          // {
          //      id: 4,
          //      alt: 'Yoga retreat',
          //      imageUrl: jayantiMobile,
          //      url: '/yoga-retreat'
          // }
     ];

     useEffect(() => {
          if (isMobile) {
               setCollection(imagesMobile);
          } else {
               setCollection(images);
          }
          return () => {};
     }, []);

     return (
          <Box height="105vh">
               <NavbarHelper />
               <Swiper
                    key={uuidv4()}
                    navigation={true}
                    autoplay={{
                         delay: 8000,
                         disableOnInteraction: false
                    }}
               >
                    {collection?.map((image) => {
                         return (
                              <SwiperSlide
                                   key={image.id}
                                   onClick={() => pushToLink(image.url)}
                              >
                                   <Box height="100vh">
                                        <Image
                                             layout="fill"
                                             alt={image.alt}
                                             objectFit="cover"
                                             src={image.imageUrl}
                                             placeholder="blur"
                                        />
                                   </Box>
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </Box>
     );
};

export default HeroCarousel;

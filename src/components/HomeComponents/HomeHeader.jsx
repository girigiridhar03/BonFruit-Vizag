import { Box } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';


const HomeHeader = () => {
  return (
    <Box mt={['6.2rem']} w={'100%'} h={['25vh','30vh','50vh','65vh','70vh','85vh']}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 10200,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide>
          <video
            src="/Videos/video1.mp4"
            autoPlay
            muted
            loop
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <video
            src="/Videos/video2.mp4"
            autoPlay
            muted
            loop
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HomeHeader;

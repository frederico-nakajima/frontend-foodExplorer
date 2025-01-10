import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import { Card } from "../Card"
import { StyledSwiper } from './styles';

export function Slider(){

 return( 
    <StyledSwiper>
        <Swiper
        
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        
        
       
            
        >
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        </Swiper>
    </StyledSwiper>
 )
}

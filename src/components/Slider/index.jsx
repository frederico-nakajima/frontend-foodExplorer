import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card } from "../Card"
import { StyledSwiper } from './styles';

export function Slider({title}){

 return( 
    <StyledSwiper>
        <h2>{title}</h2>

        <Swiper        
          modules={[Navigation]}
          spaceBetween={0}
          navigation
          breakpoints={{
            
            0: { 
              slidesPerView: 1.7,
            },
            
            1368: { 
              slidesPerView: 3.5,
            },
          }}
                      
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

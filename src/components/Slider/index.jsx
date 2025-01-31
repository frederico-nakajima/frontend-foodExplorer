import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card } from "../Card"
import { StyledSwiper } from './styles';

export function Slider({title, cardImage,alternativeText, showButtonAlignment = true }){

 return( 
    <StyledSwiper>
        <h2>{title}</h2>

        <Swiper        
          modules={[Navigation]}          
          navigation
          breakpoints={{
            
            0: { 
              slidesPerView: 1.7,
              spaceBetween: 20, 
            },
            
            1368: { 
              slidesPerView: 3.5,
              spaceBetween:30,
            },
          }}
                      
        >
          <SwiperSlide><Card image={cardImage} altText={alternativeText} showButtonAlignment={showButtonAlignment}/></SwiperSlide>
          <SwiperSlide><Card image={cardImage} altText={alternativeText} showButtonAlignment={showButtonAlignment}/></SwiperSlide>
          <SwiperSlide><Card image={cardImage} altText={alternativeText} showButtonAlignment={showButtonAlignment}/></SwiperSlide> 
          <SwiperSlide><Card image={cardImage} altText={alternativeText} showButtonAlignment={showButtonAlignment}/></SwiperSlide>
          <SwiperSlide><Card image={cardImage} altText={alternativeText} showButtonAlignment={showButtonAlignment}/></SwiperSlide>
          <SwiperSlide><Card image={cardImage} altText={alternativeText} showButtonAlignment={showButtonAlignment}/></SwiperSlide>        
        </Swiper>
    </StyledSwiper>
 )
}

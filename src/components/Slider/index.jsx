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
               navigation
               breakpoints={{
                 // Configuração para dispositivos móveis
                 0: { // Breakpoint para dispositivos menores
                   slidesPerView: 1.7,
                 },
                 
                 1368: { // Altere para o ponto de quebra desejado
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

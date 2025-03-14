import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { StyledSwiper } from './styles';

export function Slider({ title, children,...rest  }){

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
          {children}                
        </Swiper>
    </StyledSwiper>
 )
}

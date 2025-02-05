import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card } from "../Card"
import { StyledSwiper } from './styles';

export function Slider({title, cardImage, itemImage,alternativeText,itemName,description, price, showButtonAlignment = true }){

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
          <SwiperSlide>
          <Card itemName = {itemName}  image={cardImage} itemImage={itemImage} altText={alternativeText} description={description} price={price} showButtonAlignment={showButtonAlignment}/>
            </SwiperSlide>
                 
        </Swiper>
    </StyledSwiper>
 )
}

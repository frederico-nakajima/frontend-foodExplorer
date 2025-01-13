import styled from 'styled-components';
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const StyledSwiper = styled.div`

  margin-top:20px;
  >h2{
    margin-bottom:24px;
    margin-left:20px;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .swiper {
    width: 100%;
    height:100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
   display:none;
   
   
 
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
  
  
   >h2{
    margin-bottom:24px;    
    font-size: 32px;
    margin-left:10px;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    display:block;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff; 
    width: 10px;
height: 5px;
  }
   
   
 
  
  
  
  }

`;

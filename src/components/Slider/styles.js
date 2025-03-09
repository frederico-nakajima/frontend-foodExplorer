import styled from 'styled-components';
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const StyledSwiper = styled.div`
  margin-top:20px;
    >h2{
      margin-bottom:24px;
      margin-left:0px;
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
    position: relative;
    overflow: hidden;
    padding: 20px 0; 

    h2 {
          
      font-size: 32px;
      margin-left: 10px;
    }

    .swiper {
      position: relative;
    
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 130px; 
        pointer-events: none;
        z-index: 2;
      }
    
      &::before {
        left: 0;
        background: linear-gradient(to right,rgb(2, 11, 15), transparent);
      }
    
      &::after {
        right: 0;
        background: linear-gradient(to left,rgb(2, 11, 15), transparent);
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: block;
     
      color: ${({ theme }) => theme.COLORS.WHITE};
      width:60px;
      height:60px;
      position: absolute;
      z-index: 20;
     
      
    }

    .swiper-button-next::after, .swiper-button-prev::after {
      font-size: 24px; 
      background: transparent; 
      padding: 10px; 
       width:60px;
      height:60px;
       position: absolute;
      z-index: 20;
      pointer-events: auto; 
    }
  }



`;

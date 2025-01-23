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
        background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
      }
    
      &::after {
        right: 0;
        background: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: block;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      color: ${({ theme }) => theme.COLORS.WHITE};
      width: 10px;
      height: 10px;
      
      z-index: 10;
    }
  }



`;

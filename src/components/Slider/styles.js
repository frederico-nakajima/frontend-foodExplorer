import styled from 'styled-components';
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const StyledSwiper = styled.div`  
  margin-top:2.0px;
  >h2{
    margin-bottom:2.4rem;
    margin-left:.0rem;
    font-family: Poppins;
    font-size: 1.8rem;
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
    padding: 2.0rem 0; 

    h2 {          
      font-size: 3.2rem;
      margin-left: 1.0rem;
    }

    .swiper {
      position: relative;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 13.0rem; 
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
      width:6.0rem;
      height:6.0rem;
      position: absolute;
      z-index: 20;      
    }
    .swiper-button-next::after, .swiper-button-prev::after {
      font-size: 2.4rem; 
      background: transparent; 
      padding: 1.0rem; 
      width:6.0rem;
      height:6.0rem;
      position: absolute;
      z-index: 20;
      pointer-events: auto; 
    }
  }

`;

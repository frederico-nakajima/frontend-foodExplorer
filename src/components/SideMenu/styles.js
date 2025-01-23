import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.aside`

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  width: 101%;
  height: 1454px;
  position:absolute;
  z-index:9999;
 
  transform:translateX(-100%);
  transition:transform .3s ease-in-out;

  &[data-menu-is-open="true"] {
      transform:translateX(0);
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    display:none;
    
  }

`;

export const SideMenuContent = styled.div`
padding:28px;
margin-bottom: 1043px;

`

export const Header = styled.header`  
  padding: 32px 24px;
  height:114px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  font-size: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column; 

  >.NewDishLink {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 300;
    line-height: 140%; 
    padding:10px;
   
    
  }

  >.SignOut {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 300;
    line-height: 140%; 
    padding:10px;
    
    margin-top: ${({ isAdmin }) => (isAdmin ? '25px' : '0px')};    
  }

  >hr{
    border-bottom:${({ theme }) => theme.COLORS.BACKGROUND_1000};
  }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 28px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const HeaderSideMenu = styled.div`
  width: 428px;
  height: 114px; 
  padding:56px 28px 24px;
  
`;

export const HeaderControls = styled.div`
  display: flex;
  width: 372px;
  height: 34px;
  align-items: center;
  gap: 16px;

  >span{
    font-family: Roboto;
    font-size: 21px;
    font-weight: 400;
    position:relative;
    top:-3px;
   
  }

`;
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  width: 101%;
  height: 145.4rem;
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
  padding:2.8rem;
  margin-bottom: 109.3rem;

`;

export const Header = styled.header`  
  padding: 3.2rem 2.4rem;
  height:11.4rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: .7rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  font-size: 2.4rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column; 

  >.NewDishLink {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: Poppins;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 140%; 
    padding:1.0rem;    
  }
  >.SignOut {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: Poppins;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 140%; 
    padding:1.0rem;    
    margin-top: ${({ isAdmin }) => (isAdmin ? '2.5rem' : '0px')};    
  }
  >hr{
    border-bottom:${({ theme }) => theme.COLORS.BACKGROUND_1000};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  > svg {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const HeaderSideMenu = styled.div`
  width: 42.8rem;
  height: 11.4rem; 
  padding:5.6rem 2.8rem 2.4rem;
  
`;

export const HeaderControls = styled.div`
  display: flex;
  width: 37.2rem;
  height: 3.4rem;
  align-items: center;
  gap: 1.6rem;
  >span{
    font-family: Roboto;
    font-size: 2.1rem;
    font-weight: 400;
    position:relative;
    top:-.3rem;
   
  }

`;
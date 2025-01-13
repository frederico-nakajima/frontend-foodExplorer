import styled from "styled-components";


export const Container = styled.aside`
 display:none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  width: 101%;
  height: 1454px;
 
 


`;

export const SideMenuContent = styled.div`
padding:28px;


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

 

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 300;
    line-height: 140%; 
    padding:10px;
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

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;


  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: transparent;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
   
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
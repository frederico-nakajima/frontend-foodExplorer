import styled from 'styled-components';

export const Container = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:.3rem;
    width: 100%;
    height: 4.8rem;
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem; 
    background-color:${({theme}) => theme.COLORS.RED_300} ;
    color:${({theme}) => theme.COLORS.WHITE} ;
    border: 0;
    padding:1.2rem;
    border-radius: .5rem;
    color:${({theme}) => theme.COLORS.WHITE}; 
    outline:none;

`;
  

   

    


  




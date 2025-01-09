import styled from 'styled-components';



export const Container = styled.button`
   
    width: 100%;
    height: 48px;
    background-color:${({theme}) => theme.COLORS.RED_300} ;
    color:${({theme}) => theme.COLORS.WHITE} ;

  

    border: 0;
    padding:12px 32px;
   
    border-radius: 5px;

    
   
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 


  

`;



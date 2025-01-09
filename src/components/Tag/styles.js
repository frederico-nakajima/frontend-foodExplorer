import styled from 'styled-components';


export const Container = styled.span`
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    height:32px;
   
    text-align: center;
    border-radius: 5px;
    
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};



`;

import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`   
    width: 100%;
    height: 100%;
    background-color:${({theme}) => theme.COLORS.RED_300} ;
    color:${({theme}) => theme.COLORS.WHITE} ;
    border-radius: .5rem;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem; 
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;     
    

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    text-align: center;
    cursor:pointer;
        
    }

`;



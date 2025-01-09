import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        height: 100vh;  
    }
`;

export const Div = styled.div`
    position:relative;
    left:-25px;
   
    

    > .content {
        display: flex;
        align-items: center;
        gap: 30px;

        p {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: 'Roboto', serif;
            font-size: 38px;  
            font-weight: 700;
        }
    }

    img {
        width: 40px;
        height: 40px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        position: absolute;
        top: 341px;
        left: 222px;

        > .content p {
            font-size: 42px;  
        }
    }
`;

export const Form = styled.form`
    padding: 65px;
    width: 476px;
    height: 541px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    

    > h1 {
        display: none;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        align-self: center;
        text-align: center;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        width: 476px;
        padding: 0 64px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        position: absolute;
        top: 142px;
        right: 108px;
        padding: 64px;
        height: 650px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius:16px;
         > h1 {
            display: block;
            
    }
    }
`;

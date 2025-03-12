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

export const Header = styled.div`
    > .content {
        display: flex;
        align-items: center;
        gap: 3.0rem;

        p {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: 'Roboto', serif;
            font-size: 3.8rem;  
            font-weight: 700;
        }
    }

    img {
        width: 4.0rem;
        height: 4.0rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        position: absolute;
        top: 34.1rem;
        left: 22.2rem;

        > .content p {
            font-size: 4.2rem;  
        }
    }
`;

export const Form = styled.form`
    padding: 6.5rem;
    width: 47.6rem;
    height: 54.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.0rem;
   
    

    > h1 {
        display: none;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: Poppins;
        font-size: 1.4rem;
        font-weight: 500;
    
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:.8rem;
        width: 47.6rem;
        padding: 0 6.4rem;
    }

    .custom-buttom{
        display: flex;
        width: 48.0rem;
        height:4.8rem;
        justify-content: center;
        align-items: center;
        margin-top:.5rem;
        
    }



    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        position: absolute;
        top: 14.2rem;
        right: 10.8rem;
        padding: 6.4rem;
        height: 65.0rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius:1.6rem;
        gap: 2.9rem;

         > h1 {
            display: block;
            
    }
    }
`;

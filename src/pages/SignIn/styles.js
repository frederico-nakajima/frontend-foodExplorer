import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;   

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        height: 100vh;  
    }
`;

export const Header = styled.div`
    > .content {
        display: flex;
        align-items: center;
        gap: 3.0rem;
        margin-left:1.5rem;
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
    gap: 3.2rem;
    margin-left:2.7rem;
    > h1 {
        display: none;
    }
    > a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        align-self: center;
        text-align: center;
        font-family: Poppins;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
    }
    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.0rem;
        width: 47.6rem;
        padding: 0 6.4rem;
        label{
            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 100%;
        }

        &::placeholder{
            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 100%;
        }
    }
    .custom-buttom{
        display: flex;
        width: 48.0rem;
        height:4.8rem;
        justify-content: center;
        align-items: center;
        margin-top:.5rem;
        font-family: Poppins;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 24px; 
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        position: absolute;
        top: 14.2rem;
        right: 10.8rem;
        padding: 6.4rem;
        height: 54.1rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius:1.6rem;
        gap: 2.9rem;
        > h1 {
            display: block;
            font-family: Poppins;
            font-size: 3.2rem;
            font-weight: 500;
            line-height: 140%;
        }
    }
`;

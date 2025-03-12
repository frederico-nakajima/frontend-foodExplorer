import styled from 'styled-components';


export const Container = styled.span`
    display: flex;
    padding: .4rem .8rem;
    justify-content: center;
    align-items: center;
    height:3.2rem;   
    text-align: center;
    border-radius: .5rem;    
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};

`;

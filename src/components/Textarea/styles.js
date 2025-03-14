import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 15.0rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};    
    resize: none;
    margin-top:.7rem;
    margin-left:-.1rem;
    margin-bottom: .8rem;
    border-radius: .8rem;
    padding: 1.9rem 1.6rem;
    border:0;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    
    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-family: Roboto;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%; 
    }
`;

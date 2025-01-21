import styled from 'styled-components';



export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};    
    resize: none;
    margin-top:7px;
    margin-left:-1px;
    margin-bottom: 8px;
    border-radius: 8px;
    padding: 19px 16px;
    border:0;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%; 

    
    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 100%; 
    }

`;

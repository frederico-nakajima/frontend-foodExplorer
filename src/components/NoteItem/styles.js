import styled from 'styled-components';

export const Container = styled.div`   
    display: flex;
    align-items: center;
    width: 15.0rem;
    background-color: ${({theme,$isnew}) => $isnew   ? "transparent" : theme.COLORS.GRAY_300};
    border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};   
    border-radius: 1.0rem;
    padding-right:1.6rem;
    >button{
        border: none;
        background: none;
        position:relative;
        top:.3rem;
    }
    .button-delete{
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    .button-add{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    >input{
        height: 3.2rem;
        width: 100%;
        padding: 1.2rem;
        outline: none;
        background: transparent;
        border: none;
        font-family: Roboto;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%; 
        color: ${({theme}) => theme.COLORS.WHITE};       

        &::placeholder{
            color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
            font-family: Roboto;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
        }
    }
`;

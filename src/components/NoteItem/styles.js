import styled from 'styled-components';

export const Container = styled.div`
   
    display: flex;
    align-items: center;
    width: 150px;

    background-color: ${({theme,$isnew}) => $isnew   ? "transparent" : theme.COLORS.GRAY_300};
    
    
    

    
   border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};


   
    border-radius: 10px;
    padding-right:16px;


    >button{
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    .button-add{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

    >input{
        height: 32px;
        width: 100%;
        padding: 12px;
        outline: none;
        background: transparent;
        border: none;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */
        color: ${({theme}) => theme.COLORS.WHITE};
       

        &::placeholder{
            color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
            

        }
    }

`;

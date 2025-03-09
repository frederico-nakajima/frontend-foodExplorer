import styled from 'styled-components';



export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    width:100w;
    heigth:114px;
    padding:40px 10px 15px 10px;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_700};
    margin-left:-5px;
    margin-bottom:10px;

     >img.list{
        margin-right:60px;
        margin-left:-40px;
     }

    >img{
        width: 25px;
        height: 25px;
    }
    >div{
        display:flex;
        align-items:center;
        gap:10px;
        
       h2{
        font-family: "Roboto", serif;
        font-size: 21px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        
        }
        


       p{
        color:${({theme}) => theme.COLORS.CIANO};
        font-family: "Roboto",serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */

       }

    }
`;
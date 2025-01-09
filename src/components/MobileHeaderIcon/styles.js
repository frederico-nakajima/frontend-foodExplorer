import styled from 'styled-components';



export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    width:424px;
    heigth:114px;
    padding:30px 10px 15px 10px;
    border:1px solid ${({theme}) => theme.COLORS.WHITE};
    background-color:${({theme}) => theme.COLORS.BACKGROUND_700};
    margin-left:-5px;
    margin-bottom:10px;

     >.list{
        margin-right:60px;
       
     }

    >img{
        width: 25px;
        height: 25px;
    }
    >div{
        display:flex;
        align-items:center;
       
        
       h2{
        font-family: "Roboto", serif;
        font-size: 21px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-right:60px;
        }
        div.positionZero{
        position:relative;
        width: 38px;
        height: 38px;
        }
        >div.smallZero{
        position:absolute;
        top:25px;
        right:25px;
        background-color:${({theme}) => theme.COLORS.RED_300};
        display: flex;
        width: 20px;
        height: 20px;
        padding: 10px 10px;
        justify-content: center;
        align-items: center;
        border-radius: 99px;
        }
       

    }
`;
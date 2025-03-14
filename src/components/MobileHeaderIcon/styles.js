import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1.1rem;
    width:100vw;
    heigth:11.4rem;
    padding:4.0rem 1.0rem 1.5rem 1.0rem;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_700};
    margin-left:-.5rem;
    margin-bottom:-.9rem;
     >.list{
        margin-right:6.0rem;       
     }
    >img{
        width: 2.5rem;
        height: 2.5rem;
    }
    >div{
        display:flex;
        align-items:center;        
        h2{
            font-family: "Roboto", serif;
            font-size: 2.1rem;
            font-style: normal;
            font-weight: 700;
            margin-right:6.0rem;
        }
        div.positionZero{
            position:relative;
            width: 3.8rem;
            height: 3.8rem;
        }
        >.smallZero{
            position:absolute;
            top:3.3rem;
            right:2.5rem;
            background-color:${({theme}) => theme.COLORS.RED_300};
            display: flex;
            width: 2.0rem;
            height: 2.0rem;
            padding: 1.0rem 1.0rem;
            justify-content: center;
            align-items: center;
            border-radius: 9.9rem;
        }
    }
  
`;
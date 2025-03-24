import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1.1rem;
    width:100vw;
    heigth:11.4rem;
    padding:4.0rem 1.0rem 2.0rem 1.0rem;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_700};
    margin-left:-.5rem;
    margin-bottom:-.9rem;
    position: fixed;
    top: 0;
    z-index: 999;
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
        position:relative;    
        h2{
            font-family: "Roboto", serif;
            font-size: 2.1rem;
            font-weight: 700;
            margin-right:6.0rem;
        }
        .positionZero{
            position:relative;
            width: 3.8rem;
            height: 3.8rem;
        }
        >.smallZero{
            position:absolute;
            top:-.5rem;
            right:-.5rem;
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
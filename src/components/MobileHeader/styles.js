import styled from 'styled-components';

export const Container = styled.div`
    grid-area: header;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1.0rem;
    width:100vw;
    heigth:11.4rem;
    padding:4.0rem 1.0rem 2.5rem 1.0rem;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_700};
    margin-left:-.5rem;   
    position: fixed;
    top: 0;
    z-index: 999;
    >img.list{
    margin-right:6.0rem;
    margin-left:-4.0rem;    
    }
    >img{
        width: 2.5rem;
        height: 2.5rem;
    }
    >div{
        display:flex;
        align-items:center;
        gap:1.0rem;        
        h2{
            font-family: "Roboto", serif;
            font-size: 2.1rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;        
        }
        p{
            color:${({theme}) => theme.COLORS.CIANO};
            font-family: "Roboto",serif;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; 
        }
    }
`;
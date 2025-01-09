import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 94px 460px auto 94px;
    grid-template-areas:
    "header"
    "banner"
    "content"
    "footer";

    >.underHeader{
         width: 100%;
        
        display:flex;
        justify-content:center;
    }
  
    
`;

export const Banner  = styled.div`
    grid-area: banner;
    margin-top: 32px;
    width:1120px;
    height:406px;
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
 
    >img{
    width:632px;
    height:406px;
   
    
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
    
    
    >.textBox{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        width:1120px;
        height:260px;
        align-items:flex-end;
        padding-right:70px;
        position:absolute;
        z-index:-1;
        top: 272px;
        border-radius: 8px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
       
        
        h1{
            font-family: Poppins;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 56px */
        }
        p{
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
        }
           
    }

`;

export const Content  = styled.div`         
    grid-area:content;
    

    

`;

export const Carrossel  = styled.div`         



    

`;
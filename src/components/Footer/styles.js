import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`

  height: 77px;
  width: 428px;
  display: flex;
  justify-content:center;
  align-items: center;
  border:1px solid ${({theme}) => theme.COLORS.WHITE_200} ;
  background-color:${({theme}) => theme.COLORS.BACKGROUND_600};
  position:absolute;
  z-index:9999;
  

  >main{
    display: flex;
    justify-content:center;
    align-items: center;
   
    p{
      color:${({theme}) => theme.COLORS.WHITE_200} ;
      font-family: "Roboto",serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 22.4px */
      
    
    }
    
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 77px;
     width: 100%;
   
    >main{
    display: flex;
    align-items: center;
    
    gap:715px;
    
    p{
      color:${({theme}) => theme.COLORS.WHITE_200} ;
      font-size: 14px;
    }
    
  }
  }   
`;
      

export const Brand = styled.div`
  display:flex;
  align-items:center;



  >img{
  width: 22px;
  height: 18px;
  }
  >div{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  
  h2{
  font-family: "Roboto", serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width:150px;
  color:${({theme}) => theme.COLORS.GRAY_700};
  }
    
  }



  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  
  >img{
  width: 30px;
  height: 30px;
  }
  >div{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  
  h2{

  font-size: 24px;
  }
    
  }
  }        

`;
     
      
    
   
    
    
   
  
    
    
    
  
   
    
    
     
    
 
  
  
  
    
   
  
    



      
   



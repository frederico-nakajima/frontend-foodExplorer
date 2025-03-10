import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer` 
  width: 100vw;
  height: 77px;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color:${({theme}) => theme.COLORS.BACKGROUND_600};
  
  >main{
    display: flex;
    justify-content:center;
    align-items: center;
   
    p{
      color:${({theme}) => theme.COLORS.WHITE_200} ;
      font-family: "Roboto",serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 160%;    
    }    
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {   
    >main{
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
      >h2{
        font-size: 24px;
      }      
    }
  }        

`;
     
      
    
   
    
    
   
  
    
    
    
  
   
    
    
     
    
 
  
  
  
    
   
  
    



      
   



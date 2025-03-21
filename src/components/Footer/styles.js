import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer` 
  width: 100vw;
  height: 7.7rem;
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
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 160%;    
    }    
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
 margin: 0 auto; 
    >main{
      gap:71.5rem;    
      p{
        color:${({theme}) => theme.COLORS.WHITE_200} ;
        font-size: 1.4rem;
      }
    }  
  }   
`;
      

export const Brand = styled.div`
  display:flex;
  align-items:center;
  >img{
    width: 2.2rem;
    height: 1.8rem;
  }
  >div{
    display:flex;
    flex-direction:column;
    align-items:flex-start;  
    h2{
      font-family: "Roboto", serif;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: normal;
      width:15.0rem;
      color:${({theme}) => theme.COLORS.GRAY_700};
    }    
  }
    
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {  
    >img{
      width: 3.0rem;
      height: 3.0rem;
    }
    >div{      
      >h2{
        font-size: 2.4rem;
      }      
    }
  }        

`;
     
      
    
   
    
    
   
  
    
    
    
  
   
    
    
     
    
 
  
  
  
    
   
  
    



      
   



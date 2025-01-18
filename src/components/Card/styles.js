import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';




export const CardWrapper = styled.div`
    width:210px;
    height:292px;
    padding:24px;
    position:relative;
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
    
    .favoritar{
        position:absolute;
        top:16px;
        right:16px;
        z-index: 1;
    }

    a{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:15px;
           
        >img{
            width: 88px;
            height: 88px;
        }

        >h2{
            display:flex;
            align-items:center;
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-align: center;
            font-family: Poppins;
            font-size: 14px;
            font-weight: 700;
            line-height: 140%; 

            >i{
              font-size: 14px;
               margin-left: 8px;
            }
        }

        >p{
            
            display:none;
          
        }

        >span{
            color: ${({ theme }) => theme.COLORS.CIANO};
            text-align: center;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 400;
            line-height: 160%; 
        }
    
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        width:304px;
        height:462px;
                      
        a{
            >img{
                width:176px;
                height:176px;
            }
            >h2{
                font-size: 24px;
                font-weight: 700;
                
                >i{
                    font-size:15px;
                    margin-left: 8px;
                }
            }

            >p{
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-family: Roboto;
                display:flex;
                text-align: center;
                font-size: 14px;
                font-weight: 400;
                line-height: 160%;
            }

             >span{
                font-size: 32px;
                
            }
        
        }

    }
`; 
    
    

export const ButtonAlignmentCount = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap:10px;
    margin-top:10px;

    .count {
        display: flex;
        justify-content:center;
        align-items: center;
        gap:10px;
        
        span{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: Roboto;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%; /* 32px */
        }
    }

    .custom-button{
        display: flex;
        justify-content:center;
        align-items: center;
        width: 170px;
        height: 32px;
         
    }
     

     @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        flex-direction:row;
        justify-content:space-between;
        width:304px;
        padding-right:70px;
        padding-left:20px;
       
        .count {
            align-items: center;
            gap:10px;
            padding-right:0px;

            span{
                font-size: 20px;          
            }
        }

        .custom-button {
            width: 200px;
            height: 48px;
                
        }    

    }
`;
    
            
            

    
    
    
    
    
    












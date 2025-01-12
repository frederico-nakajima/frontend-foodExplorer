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
            color: var(--Light-Light-300, #E1E1E6);
            text-align: center;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%; /* 33.6px */

            >i{
              font-size: 14px;
               margin-left: 8px;
            }
        }

        >p{
         display:none;


        }
        >span{
            color: var(--Tints-Cake-200, #82F3FF);
            text-align: center;
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 51.2px */
        }



    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    
    width:304px;
    height:462px;
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
            width:176px;
            height:176px;
        }
        >h2{
            display:flex;
            align-items:center;
            color: var(--Light-Light-300, #E1E1E6);
            text-align: center;
            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%; /* 33.6px */

            >i{
               font-size:15px;
               margin-left: 8px;
            }
        }

        >p{
            color: var(--Light-Light-400, #C4C4CC);
            text-align: center;
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 22.4px */


        }
        >span{
            color: var(--Tints-Cake-200, #82F3FF);
            text-align: center;
            font-family: Roboto;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 51.2px */
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
    width:304px;
    padding-right:135px;
    
    margin-top:10px;
    .count {
        display: flex;
        justify-content:center;
        align-items: center;
        gap:10px;

        span{
            color: var(--Light-Light-400, #C4C4CC);
            font-family: Roboto;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%; /* 32px */
        }

        

            
    }

  

     @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    gap:10px;
    width:304px;
    padding-right:80px;
    padding-left:20px;
    margin-top:10px;
    .count {
        display: flex;
        align-items: center;
        gap:10px;

        span{
            font-size: 20px;          
        }

            
    }

    .button {
        display: flex;
       
    }    

    }
`;
    
    
    
    
    
    
    












import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';




export const CardWrapper = styled.button`
    width:210px;
    height:292px;
    padding:24px;
    position:relative;
    background:${({ theme }) => theme.COLORS.BACKGROUND_1000};
    color:${({ theme }) => theme.COLORS.WHITE};
    border:1px solid ${({ theme }) => theme.COLORS.WHITE};
    display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;
    
    .favoritar{
        position:absolute;
        top:16px;
        right:16px;
        z-index: 1;
    }

   .itemImage{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:15px;
           
     

        >img {
            width: 88px;
            height: 88px;
            transition: transform 0.3s ease;
        }

        img:hover {
            animation: tremor 0.2s ease-in-out 3; /* 3 repetições da tremidinha */
        }

        @keyframes tremor {
            0% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            50% { transform: translateX(3px); }
            75% { transform: translateX(-3px); }
            100% { transform: translateX(0); }
        }

    }


    .alignment {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between; 
        gap: 8px;
        white-space: nowrap;  
        overflow: hidden;  
        text-overflow: ellipsis; 
    }

    .alignment h6 {
        font-size: 16px;
        font-weight: 700;
        margin: 0;
    }

    .alignment i {
        font-size: 15px;
        margin-left: auto; 
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
    

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        width:304px;
        height:462px;
                      
        .itemImage{
            >img{
                width:176px;
                height:176px;
            }
        }
       .alignment {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between; 
            gap: 8px;
            white-space: nowrap;  
            overflow: hidden;  
            text-overflow: ellipsis; 
        }

        .alignment h6 {
            font-size: 16px;
            font-weight: 700;
            margin: 0;
        }

        .alignment i {
            font-size: 15px;
            margin-left: auto; 
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
`; 
    
    

export const ButtonAlignmentCount = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap:10px;
    
    margin:0 auto;

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
        width:225px;
        
       
        .count {
            align-items: center;
            gap:10px;
            

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
    
            
            

    
    
    
    
    
    












import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';




export const CardWrapper = styled.button`
    width:21.0rem;
    height:29.2rem;
    padding:2.4rem;
    position:relative;
    background:${({ theme }) => theme.COLORS.BACKGROUND_1000};
    color:${({ theme }) => theme.COLORS.WHITE};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1.0rem;
    border:0;
    
    .favoritar{
        position:absolute;
        top:1.6rem;
        right:1.6rem;
        z-index: 1;
    }

   .itemImage{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:1.5rem;
           
     

        >img {
            width: 8.8rem;
            height: 8.8rem;
            transition: transform 0.3s ease;
        }

        img:hover {
            animation: tremor 0.2s ease-in-out 3; 
        }

        @keyframes tremor {
            0% { transform: translateX(0); }
            25% { transform: translateX(-.3rem); }
            50% { transform: translateX(.3rem); }
            75% { transform: translateX(-.3rem); }
            100% { transform: translateX(0); }
        }

    }


    .alignment {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between; 
        gap: .8rem;
        white-space: nowrap;  
        overflow: hidden;  
        text-overflow: ellipsis; 
    }

    .alignment h6 {
        font-family: Poppins;
        font-size: 1.4rem;
        font-weight: 500;
        margin: 0;
    }

    .alignment i {
        font-size: 1.5rem;
        margin-left: auto; 
    }
    >p{        
        display:none;        
    }
    >span{
        color: ${({ theme }) => theme.COLORS.CIANO};
        text-align: center;
        font-family: Roboto;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 160%; 
    }    

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        width:30.4rem;
        height:46.2rem;
                      
        .itemImage{
            >img{
                width:17.6rem;
                height:17.6rem;
            }
        }
       .alignment {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between; 
            gap: .8rem;
            white-space: nowrap;  
            overflow: hidden;  
            text-overflow: ellipsis; 
        }

        .alignment h6 {
            font-size: 1.6rem;
            font-weight: 700;
            margin: 0;
        }

        .alignment i {
            font-size: 1.5rem;
            margin-left: auto; 
        }

        >p{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: Roboto;
            display:flex;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 160%;
        }

        >span{
        font-size: 3.2rem;
            
        }
        

    }
`; 
    
    

export const ButtonAlignmentCount = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap:1.0rem;
    
    margin:0 auto;

    .count {
        display: flex;
        justify-content:center;
        align-items: center;
        gap:1.0rem;
        
        span{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: Roboto;
            font-size: 2.0rem;
            font-weight: 700;
            line-height: 160%; 
        }
    }

    .custom-button{
        display: flex;
        justify-content:center;
        align-items: center;
        width: 17.0rem;
        height: 3.2rem;
         
    }
     

     @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        flex-direction:row;
        justify-content:space-between;
        width:22.5rem;       
        .count {
            align-items: center;
            gap:1.0rem;
            span{
                font-size: 2.0rem;          
            }
        }

        .custom-button {
            width: 20.0rem;
            height: 4.8rem;
                
        }    

    }
`;
    
            
            

    
    
    
    
    
    












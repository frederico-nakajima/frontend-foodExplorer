import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import  { Link } from 'react-router-dom';

export const Container = styled.div`    
    .mobile-header {
        display: flex;
        margin-bottom:10rem;
        width:100vw; 
    }
    .desktop-header {
        display: none; 
    }    
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;
   
    >main{
        display: flex;
        flex-direction: column;
        align-items: center;       
        width: 30.0rem;        
        .dish{        
            >.restaurantDish {
                width: 26.4rem;
                height: 26.4rem;
                margin-bottom:2.0rem;
                position:relative;
                left:3.5rem;
            }        
            .salad-ingredients{
                display: flex;
                flex-direction: column;
                align-items: center; 
                gap:2.4rem;
                padding:0 1.5rem;
                margin-bottom:2.4rem;            
                h1{
                    color: ${({theme}) => theme.COLORS.WHITE};
                    font-family: Poppins;
                    font-weight: 500;                
                    font-size: 2.7rem;
                    margin-bottom:-1.0rem; 
                }
                p{
                    color: ${({theme}) => theme.COLORS.WHITE};
                    font-family: Poppins;
                    font-weight: 400;
                    text-align: justify;               
                    font-size: 1.6rem;
                }                
            }
            .tags{
                display:flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 1.0rem;
                margin-bottom:0rem; 
                padding:0 1.5rem;
            }
        
            .custom-button{
                width: 30.0rem; 
                height: 4.8rem;
                margin-bottom:2.8rem;
                font-family: Poppins;
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 2.4rem;
                >button{
                    
                }
            } 
        }       
    } 
        
   
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {        
        height:80.0rem;
        .mobile-header {
            display: none; 
        }
        .desktop-header {
            display: flex;
            justify-content:center;
            gap:1.0rem;
        }
        .icon {
            display: none; 
        }
        display: grid;
        justify-content:center;
        grid-template-rows: 9.4rem 8.5rem auto 9.4rem;
        grid-template-areas:
        "header"
        "link"
        "content"
        "footer";
        
        > main {
            grid-area: content;     
            width: 110.0rem;
            height:50.0rem;
            display:flex;
            flex-direction: row;
            justify-content:center;
            margin: 0rem auto 14.3rem auto;
            gap:4.0rem;        
            >.dish { 
                display:flex;
                gap:9.0rem;               
                align-items:center;                               
                >.restaurantDish {
                    width: 39.0rem;
                    height: 39.0rem;
                }
                .salad-ingredients{ 
                    width:70.0rem;                   
                    align-items: flex-start; 
                    margin-bottom: 1.0rem;
                    >h1 {  
                        color: ${({theme}) => theme.COLORS.WHITE};                     
                        font-size: 4.0rem;             
                        line-height: 140%; 
                        margin-bottom: 1.0rem;
                    }
                    >p {
                        color: ${({theme}) => theme.COLORS.WHITE};
                        font-size: 2.4rem;                       
                        line-height: 140%; 
                        margin-bottom: 2.4rem;
                    }                    
                    .tags{                
                        justify-content: flex-start;                
                        margin-bottom:4.0rem;             
                        gap: 2.0rem;
                        
                    }             
                    .custom-button{
                        padding-right:17.0rem;
                        font-size: 1.4rem;
                        button{
                             
                        }            
                    } 
                }
            }        
        }            
    }

`;
 
export const ReturnLink = styled(Link)`
    height: 6.0rem;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: 32.0rem;
    margin:.5rem auto auto 4.0rem;
    >img{
        width: 3.1rem;
        height: 2.8rem;
    }
    >p{
        display:flex;        
        align-items:center;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: Poppins;
        font-size: 1.9rem;       
        font-weight: 500;
        text-transform: uppercase;    
    }
   
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        grid-area: link;  
        width:113.0rem;  
        margin:3.0rem auto auto auto;    
        flex-direction:row;
         display:flex;  
        flex-direction:row;
        justify-content:start;
        gap: .5rem;    
        >img{
            width: 3.2rem;
            height: 3.2rem;
        }
        >p{
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 140%; 
        }      
    }
`;
    
    
    
    
    
    
      
      

        
        
        
        
        
        
     
     
     
     
     


     
















import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import  { Link } from 'react-router-dom';



export const Container = styled.div`    
    .mobile-header {
        display: flex; 
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
        width: 300px;
                 
        
        .dish{        
            >.restaurantDish {
                width: 264px;
                height: 264px;
                margin-bottom:20px;
                position:relative;
                left:35px;
            }    
        
            .salad-ingredients{
                display: flex;
                flex-direction: column;
                align-items: center; 
                gap:24px;
                padding:0 15px;
                margin-bottom:24px;
            
                h1{
                color: ${({theme}) => theme.COLORS.WHITE};
                font-family: Poppins;
                font-weight: 500;                
                font-size: 27.041px;
                margin-bottom:-10px; 
                }

                p{
                 color: ${({theme}) => theme.COLORS.WHITE};
                font-family: Poppins;
                font-weight: 400;
                text-align: justify;               
                font-size: 16px;
                }
                
            }

            .tags{
                display:flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom:0px; 
                padding:0 15px;
            }
        
            .custom-button{
                width: 300px; 
                height: 48px;
                margin-bottom:28px;
                >button{
                    font-size: 16px;
                }
            } 
        }       
    }  
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {        
        height:800px;
            .mobile-header {
            display: none; 
        }

        .desktop-header {
            display: flex;
            gap:10px;
        }

        .icon {
            display: none; 
        }    

        display: grid;
        grid-template-rows: 94px 85px auto 94px;
        grid-template-areas:
        "header"
        "link"
        "content"
        "footer";
        
        > main {
            grid-area: content;     
            width: 1100px;
            height:500px;
            flex-direction: row;
            margin:30px auto auto 380px;
            gap:40px;
           
        
            >.dish { 
                display:flex;
                gap:90px;
               
               
                align-items:center;
                               
                >.restaurantDish {
                    width: 390px;
                    height: 390px;
                }

                .salad-ingredients{                    
                    align-items: flex-start; 
                    margin-bottom: 10px;                   

                    >h1 {  
                        color: ${({theme}) => theme.COLORS.WHITE};                     
                        font-size: 40px;             
                        line-height: 140%; 
                        margin-bottom: 10px;
                    }

                    >p {
                        color: ${({theme}) => theme.COLORS.WHITE};
                        font-size: 24px;                       
                        line-height: 140%; 
                        margin-bottom: 24px;
                    }                    
                }

                .tags{                
                    justify-content: flex-start;                
                    margin-bottom:40px;             
                    gap: 20px;
                }             
                    
            }
            .custom-button{
                padding-right:180px;             
            } 
        }

        footer{
            margin-top:225px;
        }
            
    }

`;
 
export const ReturnLink = styled(Link)`
    height: 60px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: 320px;
    margin:5px auto auto 40px;
        >img{
            width: 31px;
            height: 28px;
        }
        >p{
            display:flex;        
            align-items:center;
            color: ${({theme}) => theme.COLORS.WHITE};
            font-family: Poppins;
            font-size: 19px;       
            font-weight: 500;
            text-transform: uppercase;
    
        }
   
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    grid-area: link;    
    margin:50px auto auto 400px   ;    
    flex-direction:row;
    gap: 5px;    
    
        >img{
            width: 32px;
            height: 32px;
        }

        >p{
            font-size: 24px;
            font-weight: 700;
            line-height: 140%; 
        }                  
       
    }
`;
    
    
    
    
    
    
      
      

        
        
        
        
        
        
     
     
     
     
     


     
















import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import  { Link } from 'react-router-dom';



export const Container = styled.div`
    height:1005px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    
    .header-mobile {
      display: flex; 
    }

    .header-desktop {
      display: none; 
    }  

    >main{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:60px;
    width: 300px;
        img.pratoComida {
        width: 264px;
        height: 264px;
        margin-bottom:20px;
     
       
       
        }
     
        
        .dish{
        
            h1{
            margin-bottom:40px
            
            }
            .salada-ingredientes{
            display: flex;
            flex-direction: column;
            align-items: center; 
            margin-bottom:35px;
            padding:0 15px;
           
            }
        
            .tags{
            display:flex;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom:40px; 
            padding:0 15px;
            }
        
        
        }
    
    }
   
   
       
    // DESKTOP Container
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    width: 1134px;
    height:800px;
    .header-mobile {
        display: none; 
    }

    .header-desktop {
        display: flex;
        gap:10px;

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
     
        width: 1200px;
        height:500px;
        display: flex;
        flex-direction: row;
        margin:0 auto;
        gap:40px;
        margin-bottom: 145px;   

        
            > img.pratoComida {
                width: 390px;
                height: 390px;
            }

            >div.dish {
                
            div.salada-ingredientes{
            display: flex;
            flex-direction: column;
            align-items: flex-start; 
            margin-bottom: 10px;
                   

                    >h1 {
                        font-family: Poppins;
                        font-size: 40px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 140%; /* 56px */
                        margin-bottom: 24px;
                    }

                    >p {
                        font-family: Poppins;
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%; /* 33.6px */
                        margin-bottom: 24px;
                        
                    }

                    
                } 
                 .tags{
                display:flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin-bottom:40px; 
            
                gap: 20px;
                }
              
                    
            }  
        }
    }
`;
           
          
            
            
    
    
export const AlinhamentoCountButton = styled.div`
    display: flex;
    justify-content: center;
   
    gap:20px;
    
        
    
        div.count {
            display: flex;
            align-items: center;
            gap:10px;
            flex-direction: row;


            img.operadorMatemático {
            width: 20px; 
            height: 20px; 
            
            }
            span{
                
                font-family: Roboto;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 160%; /* 32px */
            }
            }

            div.button{
                width: 300px;
               
            }   

  
                

        

    //DESKTOP AlinhamentoCountButton
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {    
    display: flex;
    align-items: center;
     justify-content: flex-start;
    gap:50px;
   

            div.button{
                width: 200px;
               
            } 
      

       
    }
`;

                

        

export const HomeLink = styled(Link)`
    height: 60px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: 345px;
    
        >img{
        width: 31px;
        height: 28px;
        }
        >p{
        display:flex;
        
        align-items:center;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
    
    
        }
    

    //DESKTOP Link
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    grid-area: link;
    
   margin-top:50px;
    display: flex;
    flex-direction:row;
    align-items: center;
    gap: 5px;
    width: 1137px;
    
    
        >img{
        width: 32px;
        height: 32px;
        }

        >p{
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%; /* 33.6px */
        }   
            
            
            

           
       
    }
`;
    
    
    
    
    
    
      
      

        
        
        
        
        
        
     
     
     
     
     


     
















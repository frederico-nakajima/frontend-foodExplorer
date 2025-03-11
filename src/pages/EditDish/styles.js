import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    .header-mobile {
        display: flex;         
    }
    .header-desktop {
        display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;    
    width:100%;
    margin:0 auto;    
              
    >a{
        width: 364px;
        display:flex;
        align-items:center;
        color: ${({theme}) => theme.COLORS.WHITE};         
        font-family: Poppins;
        font-size: 16px;       
        font-weight: 500;
        text-transform: uppercase; 
        padding-bottom:30px;
        position:relative;
        left:-10px;
        >svg{
            width: 8px;
            height: 15px;
        }    
    
    }    
                     
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {                  
        .header-mobile {
            display: none; 
        }
        .header-desktop {
            display: block;
            width:100%;
            margin-bottom:120px;
        }        
        >a{
            margin-top:40px;
            width:1150px;
            padding-bottom:24px;
            color: ${({theme}) => theme.COLORS.WHITE};
            font-family: Poppins;
            font-size: 19px;       
            font-weight: 500;
            text-transform: uppercase;     
        }      
    }
`;    
        
       
    
export const Form = styled.form`  
    padding-bottom: 75px;       
    
    >header{
        .addDish{
            display:none;
        }
         .newDish{
            display:block;
            font-family: Poppins;
            font-size: 32px;
            font-weight: 500;
            line-height: 140%; 
            margin-bottom:45px;
            width: 364px;
        }
    }
            
     .image-salad-category{                
        width: 364px;
        height: 300px;
        display: flex;
        flex-direction: column;
        
        >.dish{          
            margin-top:-10px;
            margin-bottom:10px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 400;
            line-height: 100%;
             
        }
        
        .uploadSimple{
            display:flex;
            flex-direction:column;
            justify-content: start;
            border:1px solid ${({theme}) => theme.COLORS.WHITE};           
            align-items:center;            
            padding-left:25px;            
            border-radius: 8px;
            background-color:${({theme}) => theme.COLORS.BACKGROUND_800};   
            border-radius: 8px;
            height: 48px;                         
            border:0;
            margin-left:-5px;
            margin-top:10px;              
            outline:none;
            >.image{
                display:flex;               
                align-items:center;
                height: 46px;
                width:364px;
                margin-left:10px;
                label{
                    display:flex;
                    gap:10px;
                    >img{                      
                        position:relative;                        
                    }
                    >.select-image{                    
                        margin-top:0px;
                        width: 300px;
                        font-family: Poppins;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 24px;                       
                    }
                }    
                >input{
                    display:none;                            
                }                           
            }
        }                
        
        .inputs{            
            height: 541px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap:32px;
            .name{
                display: flex;
                flex-direction: column;
                gap:16px;
                >label{
                    font-family: Roboto;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 100%; 
                }
                >input{
                    height: 48px;
                    width: 100%;
                    border-radius: 8px;
                    padding: 12px;
                    font-family: "Roboto", serif;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 100%; 
                    color:${({theme}) => theme.COLORS.WHITE};
                    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                    border:0;
               
                }
            }
            .data{
                display: flex;
                flex-direction:column;
                align-items: flex-start;
                gap:16px;
                
                >label{
                    margin-top:-8px;
                    font-family: Roboto;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 100%; 
                    
                }
                    
                >select{
                    border-radius:8px;
                    width: 364px;
                    height: 46px;
                    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                    appearance: none;
                    -webkit-appearance: none;
            
                    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_54)'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_54'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
            
                    background-repeat:no-repeat;
                    background-position: right 24px top 50%;
                    color: #C1BCCC;
                    font-family: Poppins;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 26px; 
                    padding:0 24px;
                    border:0;
                    margin-top:0px; 
                    
                }
            }      
        
        } 
    }
        .section{
            width: 364px;            
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom:15px;       
            >.ingredients-price{
                display: flex;
                flex-direction:row;
                justify-content: center;                
                >section{
                height:100px;
                position:relative;                
                    .tags{
                        display: flex;
                        align-items: center;
                        height: 51px;
                        gap: 15px;
                        width: 364px; 
                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};                
                        border-radius: 8px;
                        margin-bottom:20px;
                        margin-top:16px;                             
                    }
                }
            }
            .price{
                display: flex;
                flex-direction: column;
                gap:16px;
                label{
                    font-family: Roboto;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 100%; 
                }
                
                >input{
                    height: 48px;
                    width: 100%;
                    border-radius: 8px;
                    padding: 12px;
                    font-family: "Roboto", serif;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 100%; 
                    color:${({theme}) => theme.COLORS.WHITE};
                    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                    border:0;
                }
            }
                    
        }        
        .description{
            display: flex;
            flex-direction: column;
            gap:16px;
            label{
                font-family: Roboto;
                font-size: 16px;
                font-weight: 400;
                line-height: 100%; 
            }
        }
        .buttons{
            display: flex;
            justify-content: space-between;
            align-items:center;
            margin-top:13px;            
            .remove{
                >button{
                    width: 164px;
                    height: 48px;
                    padding-right:15px;
                    padding-left:15px;
                    border-radius: 5px;
                    color:${({theme}) => theme.COLORS.WHITE} ;
                    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                    border:0;
                    text-align: center;
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 24px;
                }
            }

            .saveChanges{
                >button{
                    width: 164px;
                    height: 48px;
                    padding-right:15px;
                    padding-left:15px;
                    border-radius: 5px;
                    color:${({theme}) => theme.COLORS.WHITE} ;
                    background-color: ${({ theme }) => theme.COLORS.RED_200};
                    border:0;
                    text-align: center;
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 24px;
                }
            }        
        }
    
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            margin-bottom:-46px;            
            .image-salad-category{
                width: 1137px;
                height: 100px;
                flex-direction: row; 
                justify-content:end;          
                margin-top:65px;
                position:relative;                
                >.dish{
                    left:0px;
                    height:10px;
                    top:-5px;
                    position:absolute;
                }
                >.uploadSimple{
                    margin-right:20px;
                    width: 250px;
                    height: 48px;
                    position:relative;
                    top:6px;
                    >.image{
                        margin-left:170px;
                        label{                            
                            >.select-image{
                                position:relative;
                                top:0px;
                                width: 355px;
                            }
                        }
                    }
                }

                .inputs{
                    flex-direction: row;
                    align-items:center;
                    justify-content:space-between;
                    gap:20px;
                    height: 50px;
                    width:871px;
                    .name{
                        width:600px;
                        position:relative;
                        top:-1px;
                    }
                }                    
            }
            .section{
                width: 1137px;
                flex-direction: row;
                justify-content: flex-start;
                gap:20px;
                position:relative;               
                >.ingredients-price{
                    >section{
                        .tags{
                            width: 834px;
                        }
                    }                
                }
                >.price{
                    position:relative;
                    margin-top:2px;
                    width:400px;
                }
            }
            .buttons{
                display:flex;
                gap:20px;
                width:177px;
                position:relative;
                left:790px;
                          
            }
        }

     
`;
        
        
                
                                    
      
       
    
       
            

   
   
    
   

    
    
    
    
    
    
    
                    
                    
                    
                    
                    


      
        





            

    




           
           
                
           
            


   
   

    



























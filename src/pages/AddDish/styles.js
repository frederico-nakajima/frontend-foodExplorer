import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    .header-mobile {
        display: flex; 
        margin-bottom:10rem;
        width:100vw;        
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
        width: 36.4rem;
        display:flex;
        align-items:center;
        color: ${({theme}) => theme.COLORS.WHITE};         
        font-family: Poppins;
        font-size: 1.6rem;       
        font-weight: 500;
        text-transform: uppercase;       
        position:relative;
        left:-1.0rem;
        >svg{
            width: .8rem;
            height: 1.5rem;
        }    
    }    
                     
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
                         
        .header-mobile {
            display: none; 
        }
        .header-desktop {
            display: block;
            width:100%;
            margin-bottom:12.0rem;
        }        
        >a{
              margin-top:0rem;
            width:115.0rem;
            padding-bottom:1rem;
            color: ${({theme}) => theme.COLORS.WHITE};
            font-family: Poppins;
            font-size: 1.9rem;       
            font-weight: 500;
            text-transform: uppercase;      
        } 
           
    }
`;        
       
    
export const Form = styled.form`  
          
     padding-bottom: 3.0rem;
    >header{
        .addDish{
             display:block;
            font-family: Poppins;
            font-size: 3.2rem;
            font-weight: 500;
            line-height: 140%; 
            margin-bottom:4.5rem;
            margin-top:2rem; 
            width: 36.4rem;
           
        }
        .newDish{
            display:none;
        }
    }            
    .image-salad-category{                
        width: 36.4rem;
        height: 30.0rem;
        display: flex;
        flex-direction: column;        
        >.dish{          
            margin-top:-1.0rem;
            margin-bottom:1.0rem;
            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 100%;             
        }        
        .uploadSimple{
            display:flex;
            flex-direction:column;
            justify-content: start;                      
            align-items:center;            
            padding-left:2.5rem;            
            border-radius: .8rem;
            background-color:${({theme}) => theme.COLORS.BACKGROUND_800};   
            border-radius: .8rem;
            height: 4.8rem;                         
            border:0;
            margin-left:-.5rem;
            margin-top:1.0rem;              
            outline:none;
            >.image{
                display:flex;               
                align-items:center;
                height: 4.6rem;
                width:36.4rem;
                margin-left:1.0rem;
                label{
                    display:flex;
                    gap:1.0rem;
                    >img{                      
                        position:relative;                        
                    }
                    >.select-image{                    
                        margin-top:0rem;
                        width: 30.0rem;
                        font-family: Poppins;
                        font-size: 1.4rem;
                        font-weight: 500;
                        line-height: 2.4rem;                       
                    }
                }    
                >input{
                    display:none;                            
                }                           
            }
        }        
        .inputs{            
            height: 54.1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap:3.2rem;
            .name{
                display: flex;
                flex-direction: column;
                gap:1.6rem;
                >label{
                    font-family: Roboto;
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 100%; 
                }
                >input{
                    height: 4.8rem;
                    width: 100%;
                    border-radius: .8rem;
                    padding: 1.2rem;
                    font-family: "Roboto", serif;
                    font-size: 1.6rem;
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
                gap:1.6rem;                
                >label{
                    margin-top:-.8rem;
                    font-family: Roboto;
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 100%;                    
                }                    
                >select{
                    border-radius:.8rem;
                    width: 36.4rem;
                    height: 4.6rem;
                    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                    appearance: none;
                    -webkit-appearance: none;
            
                    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_54)'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_54'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
            
                    background-repeat:no-repeat;
                    background-position: right 2.4rem top 50%;
                    color: #C1BCCC;
                    font-family: Poppins;
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 2.6rem; 
                    padding:0 2.4rem;
                    border:0;
                    margin-top:0px; 
                    
                }
            }        
        } 
    }
        .section{
            width: 36.4rem;            
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap:-1rem;
            margin-bottom:1.5rem;        
        
            >.ingredients-price{
                display: flex;
                flex-direction:row;
                justify-content: center;                
                >section{
                
                position:relative;                
                    .tags{
                        display: flex;
                        align-items: center;
                        flex-wrap:wrap;                        
                        gap: 1.5rem;
                        width: 36.4rem; 
                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};                
                        border-radius: .8rem;
                        margin-bottom:2.0rem;
                        margin-top:1.6rem;
                        padding:1rem 1rem;
                                                     
                    }
                }
            }
            .price{
                display: flex;
                flex-direction: column;
                
                gap:1.6rem;
                label{
                    font-family: Roboto;
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 100%; 
                }                
                >input{
                    height: 4.8rem;
                    width: 100%;
                    border-radius: .8rem;
                    padding: 1.2rem;
                    font-family: "Roboto", serif;
                    font-size: 1.6rem;
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
            gap:1.6rem;
            label{
                font-family: Roboto;
                font-size: 1.6rem;
                font-weight: 400;
                line-height: 100%; 
            }
        }
        .buttons{
            display: flex;
            justify-content: flex-end;
            align-items:center;
            margin-top:1.3rem;

            >button{
                width: 36.4rem;
                height: 4.8rem;
                padding-right:1.5rem;
                padding-left:1.5rem;
                border-radius: .5rem;
                color:${({theme}) => theme.COLORS.WHITE} ;
                background-color: ${({ theme }) => theme.COLORS.RED_200};
                border:0;
                text-align: center;
                font-family: Poppins;
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 2.4rem;
            }
        }
       

        
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
            margin-bottom:6rem;            
            .image-salad-category{
                width: 113.7rem;
                height: 10.0rem;
                flex-direction: row; 
                justify-content:end;          
                margin-top:6.5rem;
                position:relative;                
                >.dish{
                left:0rem;
                    height:1.0rem;
                    top:-.5rem;
                    position:absolute;                  
                }
                >.uploadSimple{
                    margin-right:2.0rem;
                    width: 25.0rem;
                    height: 4.8rem;
                    position:relative;
                    top:.6rem;
                    >.image{
                        margin-left:17.0rem;
                        label{                            
                            >.select-image{
                                position:relative;
                                top:-.2rem;
                                width: 35.5rem;                              
                            }
                        }
                    }
                }
                .inputs{
                    flex-direction: row;
                    align-items:center;
                    justify-content:space-between;
                    gap:2.0rem;
                    height: 5.0rem;
                    width:87.1rem;
                    .name{
                        width:60.0rem;
                        position:relative;
                        top:-.1rem;                    
                    }                
                }                    
            }
            .section{
                width: 113.7rem;
                flex-direction: row;
                justify-content: flex-start;
                gap:2.0rem;
                position:relative;                
                >.ingredients-price{
                    >section{
                        .tags{                            
                            width: 83.4rem;
                            display: flex;
                            align-items: center;
                            flex-wrap:wrap;                       
                            gap: 1.5rem;                            
                            background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};                
                            border-radius: .8rem;
                            margin-bottom:2.0rem;
                            margin-top:1.6rem;
                            padding:0.8rem .5rem; 
                        }
                    }                
                }
                >.price{
                    position:relative;
                    margin-top:.2rem;
                    width:40.0rem;                 
                }
            }
            .buttons{
                width:17.7rem;
                position:relative;
                left:96.0rem;
            }
        }

     
`;
        
        
                
                                    
      
       
    
       
            

   
   
    
   

    
    
    
    
    
    
    
                    
                    
                    
                    
                    


      
        





            

    




           
           
                
           
            


   
   

    



























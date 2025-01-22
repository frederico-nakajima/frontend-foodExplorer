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
    width:428px;
    margin:0 auto;    
              
    >a{
        width: 364px;
        display:flex;
        align-items:center;
        color: ${({theme}) => theme.COLORS.WHITE};;
        font-family: Poppins;
        font-size: 16.5px;
        font-weight: 500;
        line-height: 140%;
        padding-bottom:30px;
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
           
        } 

        width:100%; 
        
        >a{
            margin-top:40px;
            width:1150px;
            padding-bottom:24px;     
        }
      
    }
`;    
        
       
    
export const Form = styled.form`  
    padding-bottom:50px;       
    
    >header{
        .adicionarPrato{
            display:none;
        }
         .novoPrato{
            display:block;
            font-family: Poppins;
            font-size: 32px;
            font-weight: 500;
            line-height: 140%; 
            margin-bottom:45px;
            width: 364px;
        }
    }
            
    .imagem-salada-categoria{                
        width: 364px;
        height: 300px;
        display: flex;
        flex-direction: column;
                
        
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
            width: 364px;            
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
                
                >.prato{          
                    margin-top:-90px;  
                    margin-left:-10px;
                    width:364px;
                    margin-top:-105px;
                }
                >img{
                   
                    left: -157px;
                    position:relative;
                    
                }
                >.selecione-imagem{                    
                    left: -135px;
                    position:relative;
                    width: 300px;
                }
                >.file{
                    >input{
                        display:none;                            
                    }
                }    
                           
            }
        }                
        
        .inputs{            
            height: 541px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap:32px;
            .nome{
                display: flex;
                flex-direction: column;
                gap:16px;
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
                      
            .dados{
                display: flex;
                flex-direction:column;
                align-items: flex-start;
                gap:16px;
                
                >label{
                    margin-top:-8px;
                   
                }
                    
                >select{
                    border-radius:8px;
                }
            }
    
            select{
                border-radius: 4px;
                width: 364px;
                height: 48px;
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
                margin-top:4px; 
                outline:none;
            }
        }
    
    } 

    .section{
        width: 364px;            
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom:15px;        
    
        >.ingredientes-preco{
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

        .preco{
            display: flex;
            flex-direction: column;
            gap:16px;
            
            >input{
                height: 48px;
                width: 100%;
                border-radius: 8px;
                padding: 12px;
                font-family: "Roboto", serif;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 16px */
                color:${({theme}) => theme.COLORS.WHITE};
                background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                border:0;
            }
        }
                   
    }
     
    .descricao{
        display: flex;
        flex-direction: column;
        gap:16px;
    }

    .buttons{
        display: flex;
        justify-content: flex-end;
        align-items:center;
        margin-top:13px;
        
        >button{
            width: 364px;
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
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        width: 1137px;   
        header{
            .novoPrato{
                display:none;
            }                
            .adicionarPrato{
                display:block;
            }
        }
        
        .imagem-salada-categoria{
            width: 1137px;
            height: 100px;
            flex-direction: row; 
            justify-content:end;          
            margin-top:65px;
           
            >.uploadSimple{
                margin-right:20px;
                width: 250px;
                height: 50px;
                position:relative;
                top:9px;
                >.image{
                    >.prato{
                        margin-left: 48px;
                    }
                    .img-upload-simple{
                        left: -121px;
                    }
                    >.selecione-imagem{
                        left: -107px;
                        width: 355px;
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

                .nome{
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
            
            >.ingredientes-preco{
                >section{
                    .tags{
                       width: 834px;
                        }
                }
              
            }

            >.preco{
                position:relative;
                margin-top:2px;
                width:400px;
            }
        }

        .buttons{
            width:177px;
            position:relative;
            left:960px;


        }
    }

     
`;
        
        
                
                                    
      
       
    
       
            

   
   
    
   

    
    
    
    
    
    
    
                    
                    
                    
                    
                    


      
        





            

    




           
           
                
           
            


   
   

    



























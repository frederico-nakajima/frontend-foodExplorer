import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    
    width:428px;
    margin:0 auto;
    .header-mobile {
        display: flex; /* Exibe o BrandHeader no mobile */
        
    }

    .header-desktop {
        display: none; /* Oculta o Header no mobile */
    }
    
              
    >a{
     width: 364px;
     display:flex;
     align-items:center;
     color: ${({theme}) => theme.COLORS.WHITE};;
     font-family: Poppins;
     font-size: 16.546px;
     font-style: normal;
     font-weight: 500;
     line-height: 140%; /* 23.164px */
     padding-bottom:150px;
     >svg{
         width: 8px;
         height: 15px;
     }
     
    
    }           

    >main{
        display: flex;
        flex-direction: column;
        width:428px;
       padding-bottom:200px;
        align-items:center;

        .imagem-salada-categoria{
                
            width: 364px;
            height: 300px;
            display: flex;
            flex-direction: column;
            
            
            .UploadSimple{
                display:flex;
                flex-direction:column;
                width:270px;
             

                >div{
                  border:1px solid ${({theme}) => theme.COLORS.WHITE};
                    display:flex;
                    align-items:center;
                    width: 364px;
                    padding-left:25px;
                   
                    border-radius: 5px;
                    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};   
                    >input{
                        border-radius: 5px;
                        height: 48px;
                        border:0;
                        margin-left:5px;
                        background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
                        outline:none;
                         
                        &::placeholder {
                            color:${({theme}) => theme.COLORS.GRAY_300};
                            font-family: "Roboto", serif;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            margin-left:5px;
                            text-align:left;
                            }
                    }
                        
                        
        }
                
    }
    
              
    .inputs{
        
        width: 364px;
        height: 541px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap:32px;
        
        
        .nome{
           width: 364px;
            
        }
        
        .dados{
            display: flex;
            flex-direction:column;
            align-items: flex-start;
            
            >label{
                margin-top:-8px;
                
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
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 162.5% */
        padding:0 24px;
        border:0;
        margin-top:4px; 
    }
        
}
}
                                    
                                
    .section{
        width: 364px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom:15px;
    
        
        .preco{
            display: flex;
            flex-direction:column;
            align-items: flex-start;
        >label{
            margin-bottom:5px;
           
        }
        }
        
    }
        
        


    label{
        color:${({theme}) => theme.COLORS.GRAY_200};
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */
        margin-bottom:8px;
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
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 171.429% */
    
        

    }

    }



    .tags{
    display: flex;
    align-items: center;
    height: 51px;
    gap: 15px;
    width: 265px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    padding: 0px 0px 0px 0px;
    border-radius: 8px;

    margin-bottom:20px;

    }


    }
    
                    
@media (min-width: ${DEVICE_BREAKPOINTS.LG}) {            
    width:1918px; 
       
  .header-mobile {
      display: none; /* Oculta o BrandHeader no desktop */
    }

    .header-desktop {
      display: block; /* Exibe o Header no desktop */
    }   
    >a{
        margin-top:40px;
        width:1150px;
        padding-bottom:24px;
    >svg{
    }
    }
    >main{
        height:640px;
    }
    }
`;    
        
       
    
export const Form = styled.form`
    width: 364px;
    height: 541px;
    display: flex;
    flex-direction: column;
    justify-content: center;
       
    
    >header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1.adicionarPrato{
            display:none;
            font-family: Poppins;
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; 
            
        }
         h1.novoPrato{
            display:block;
            font-family: Poppins;
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; 
            margin-bottom:24px;
            
        }
    }
    


    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    
   
    
    width: 1137px;
    header{
    h1.novoPrato{
        display:none;
    }

    h1.adicionarPrato{
            width: 1137px;
            display:block;
    }
    }
    div.imagem-salada-categoria{
        width: 1137px;
        display: flex;
        flex-direction: row;
        align-items:center;
        
        gap: 34px;

    >div.UploadSimple{
        width:200px;

        div{
        width: 224px;
        
        }
    }

    >div.inputs{
        
        display: flex;
        flex-direction: row;
        align-items:center;
        height:64px;
        width:1010px;
        gap:10px;
        

        div.nome{
            width:530px;
            height:67px;
        
        }

        div.dados{
            justify-content: flex-end;
            height:75px;
            select{
                border:1px solid ${({ theme }) => theme.COLORS.WHITE};
            }
                
        }
    }
    } 



    
    div.section{
    width: 1137px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;


    div.ingredientes-preco{
    display: flex;
    flex-direction: column;
    >Section{
        div.tags{
            border:1px solid ${({ theme }) => theme.COLORS.WHITE};
            width: 909px;

            >NoteItem{
                width: 265px;
            }
        }
    }
    }
    div.preco{
        height:77px;
        justify-content:center;
        
    }

    }   
    
    
    div.buttons{
        button{
            width: 165px;
       
        }
    
    }
}
`;
        
        
                
                                    
      
       
    
       
            

   
   
    
   

    
    
    
    
    
    
    
                    
                    
                    
                    
                    


      
        





            

    




           
           
                
           
            


   
   

    



























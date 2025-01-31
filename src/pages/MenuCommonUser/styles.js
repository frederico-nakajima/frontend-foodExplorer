import styled from 'styled-components';
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"


export const Container = styled.div`
    .desktop-header {
        display: none;
    }
    .mobile-header-icon {
        display: block;
        grid-area: header;
    } 

    >.underHeader{
        width: 100%;
        height:150px;
        
            
    }

    .imgBannerDesktop {
        display: none;
    }
    .imgBannerMobile {
        display: block;
        margin-top:10px;
    } 

    .textBoxMobile{
        margin-top:10px;
    }

    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 94px 174px auto 94px;
    grid-template-areas:
    "header"
    "banner"
    "content"
    "footer";   

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    .desktop-header {
        display: block;
    }
    .mobile-header-icon {
        display: none;
    }

    grid-template-rows: 94px 460px auto 94px;    

    >.underHeader{
        display:flex;
        justify-content:center;
    }
  
}  
`;



export const Banner  = styled.div`
     .imgBannerDesktop {
        display: none;
    }
    .imgBannerMobile {
        display: block;
         grid-area: banner;
    }

    >.textBoxDesktop{
        display: none;
    }

    >.textBoxMobile{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        width: 350px;
        height: 120px;
        align-items:flex-end;
        padding-right:20px;
        position:absolute;
        z-index:-1;
        top: 125px;
        right: 9px;        
        border-radius: 8px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        padding-right: 13px;
               
        h1{
            position:relative;
            right:25px;
            font-family: Poppins;
            font-size: 18px;            
            font-weight: 500;
            line-height: 140%;
        }
        p{
            position:relative;
            right:40px;
            font-family: Roboto;
            font-size: 12px;            
            font-weight: 400;
            line-height: 100%; 
        }
           
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        .desktop-header-icon {
            display: block;
        }
        .mobile-header-icon {
            display: none;
        } 
        .imgBannerDesktop {
            display: block;
        }
        .imgBannerMobile {
            display: none;
        }

        grid-area: banner;
        margin-top: 32px;
        width:1120px;
        height:406px;
           
        >.imgBanner{
            width:632px;
            height:406px;
            border:1px solid ${({ theme }) => theme.COLORS.WHITE};
        }

        >.textBoxMobile{
            display: none;
        }
        
        >.textBoxDesktop{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:center;
            width:1120px;
            height:260px;
            align-items:flex-end;
            padding-right:70px;
            position:absolute;
            z-index:-1;
            top: 272px;
            border-radius: 8px;
            background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        
            
            h1{
                font-family: Poppins;
                font-size: 40px;
                font-weight: 500;
                line-height: 140%;
            }
            p{
                font-family: Roboto;
                font-size: 16px;
                font-weight: 400;
                line-height: 100%; 
            }
            
        }
    }
`;

export const Content  = styled.div`         
    grid-area:content;
    width: 380px;
    margin:0 auto;
 
 
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {  
        width:1120px;
        margin:0 auto;

    }
`;

export const FooterWrapper = styled.footer`
  margin-top: 25px;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {   
    margin-top: 46px;

  } 

`;
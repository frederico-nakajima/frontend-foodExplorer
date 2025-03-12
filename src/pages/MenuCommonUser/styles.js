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
        height:15.0rem;
        
            
    }

    .imgBannerDesktop {
        display: none;
    }
    .imgBannerMobile {
        display: block;
        margin-top:1.0rem;
    } 

    .textBoxMobile{
        margin-top:1.0rem;
    }

    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 9.4rem 17.4rem auto 9.4rem;
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

    grid-template-rows: 9.4rem 46.0rem auto 9.4rem;    

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
        width: 35.0rem;
        height: 12.0rem;
        align-items:flex-end;
        padding-right:2.0rem;
        position:absolute;
        z-index:-1;
        top: 12.5rem;
        right: .9rem;        
        border-radius: .8rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        padding-right: 1.3rem;
               
        h1{
            position:relative;
            right:2.5rem;
            font-family: Poppins;
            font-size: 1.8rem;            
            font-weight: 500;
            line-height: 140%;
        }
        p{
            position:relative;
            right:4.0rem;
            font-family: Roboto;
            font-size: 1.2rem;            
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
            transition:  0.5s ;
        }
        .imgBannerDesktop:hover {
            display: block;
            transform:scale(1.1);
        }    
        .imgBannerMobile {
            display: none;
        }

        grid-area: banner;
        margin-top: 3.2rem;
        width:112.0rem;
        height:40.6rem;
           
        >.imgBanner{
            width:63.2rem;
            height:40.6rem;
            border:.1rem solid ${({ theme }) => theme.COLORS.WHITE};
        }

        >.textBoxMobile{
            display: none;
        }
        
        >.textBoxDesktop{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:center;
            width:112.0rem;
            height:26.0rem;
            align-items:flex-end;
            padding-right:7.0rem;
            position:absolute;
            z-index:-1;
            top: 27.2rem;
            border-radius: .8rem;
            background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        
            
            h1{
                font-family: Poppins;
                font-size: 4.0rem;
                font-weight: 500;
                line-height: 140%;
            }
            p{
                font-family: Roboto;
                font-size: 1.6rem;
                font-weight: 400;
                line-height: 100%; 
            }
            
        }
    }
`;

export const Content  = styled.div`         
    grid-area:content;
    width: 38.0rem;
    margin:0 auto;
 
 
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {  
        width:112.0rem;
        margin:0 auto;

    }
`;

export const FooterWrapper = styled.footer`
  margin-top: 2.5rem;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {   
    margin-top: 4.6rem;

  } 

`;
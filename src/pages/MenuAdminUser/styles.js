import styled from 'styled-components';
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 9.4rem 17.4rem auto 9.4rem;
    grid-template-areas:
    "header"
    "banner"
    "content"
    "footer";     
    .desktop-header {
        display: none;
    }
    .mobile-header {
        display: block;
        grid-area: header;       
    }
    .underHeader{
        width: 100%;
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

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        grid-template-rows: 9.4rem 46.0rem auto 9.4rem;
        justify-content:center;    
        padding:0 auto;
        .desktop-header {
            width:100vw;
            display: flex;
            justify-content:center;
            grid-area: header;
            margin-bottom:15.0rem;
            margin-left:auto;
            margin-right:auto;
            padding:0 auto;
        }
        .mobile-header{
            display: none;
        }            
        >.underHeader{            
            display:flex;
            justify-content:center;
        }     
    }  
`;

export const Banner  = styled.div`
    grid-area: banner;
    max-width: 425px;
    margin: 0 auto;
    position: relative;
    padding: 0 1rem;
    position: relative;
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
        top: 2.5rem;
        right: 2rem;        
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
        display:flex;
        justify-content:center;
        grid-area: banner;
        margin: 3.2rem auto 0 auto;
        width:112.0rem;
        height:40.6rem;       
        .desktop-header-icon {
            display: block;
        }
        .mobile-header-icon {
            display: none;
        } 
        .imgBannerDesktop {
            display: block;
            width: 63.2rem;
            height: 40.7rem;
            transition:  0.5s ;
            position:relative;
            left:-25rem;
        }
        .imgBannerDesktop:hover {
            display: block;
            transform:scale(1.1);
        }    
        .imgBannerMobile {
            display: none;
        }                 
        >.imgBanner{
            width:63.2rem;
            height:40.6rem;           
        }
        >.textBoxMobile{
            display: none;
        }        
        >.textBoxDesktop{
            display:flex;
            flex-direction:column;
            justify-content:center;
            width:112.0rem;
            height:26.0rem;
            align-items:flex-end;
            padding-right:7.0rem;
            position:absolute;
            z-index:-1;
            top: 15.2rem;
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
    margin:0 auto 6.5rem auto;    
 
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {  
        width:112.0rem;
        margin:0 auto;
    }
`;



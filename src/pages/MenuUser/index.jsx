import { Container,Banner,Content,FooterWrapper,SideMenuWrapper } from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { MobileHeaderIcon } from '../../components/MobileHeaderIcon';
import { Footer } from '../../components/Footer';
import Pngegg from '../../assets/pngegg.png';
import Pngegg02 from '../../assets/pngegg02.png';
import { Slider } from '../../components/Slider';
import { SideMenu } from '../../components/SideMenu';
import {useState } from "react";

export function MenuUser() {
   
    
    const [menuIsOpen,setMenuIsOpen] = useState(false);
  

    return (
        <Container>
             <SideMenuWrapper>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
             </SideMenuWrapper>

             <div className="desktop-header">
                <DesktopHeaderIcon />
            </div>
            <div className="mobile-header">
                <MobileHeaderIcon />
            </div>
            <div className='underHeader'>
                <Banner>
                    <div className='imgBannerMobile'>
                        <img src={Pngegg02} alt="imagem de biscoitos e frutinhas" />
                    </div>
                    <div className='imgBannerDesktop'>
                        <img src={Pngegg} alt="imagem de biscoitos e frutinhas" />
                    </div>
                    <div className='textBoxMobile'>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com<br/> ingredientes selecionados</p>
                    </div>

                    <div className='textBoxDesktop'>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>
            </div>
            
            <Content>
                <Slider title = 'Refeições'/>
                <Slider title = 'Sobremesas'/>
                <Slider title = 'Bebidas'/>                
            </Content>
            
            <FooterWrapper>
                <Footer />
            </FooterWrapper>

        </Container>
    );
} 
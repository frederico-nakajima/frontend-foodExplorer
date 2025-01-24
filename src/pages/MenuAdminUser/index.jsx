import { Container,Banner,Content,FooterWrapper} from './styles';
import { DesktopHeader } from '../../components/DesktopHeader';
import { MobileHeaderIcon } from '../../components/MobileHeaderIcon';
import { Footer } from '../../components/Footer';
import Pngegg from '../../assets/pngegg.png';
import Pngegg02 from '../../assets/pngegg02.png';
import { Slider } from '../../components/Slider';
import { SideMenu } from '../../components/SideMenu';
import {useState } from "react";
import Pencil from '../../assets/Pencil.svg';

export function MenuAdminUser() {
    const buttonIconContent = "Novo prato";
    
    const [menuIsOpen,setMenuIsOpen] = useState(false);
  

    return (
        <Container>
           
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                isAdmin={false} 
            />
           

             <div className="desktop-header">
                <DesktopHeader/>
            </div>
            <div className="mobile-header-icon">
                <MobileHeaderIcon onOpenMenu={()=> setMenuIsOpen(true)} />
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
                <Slider title = 'Refeições' cardImage={Pencil} alternativeText = "texto alternativo" showButtonAlignment={false}/>
                <Slider title = 'Sobremesas' cardImage={Pencil} alternativeText = "texto alternativo" showButtonAlignment={false}/>
                <Slider title = 'Bebidas' cardImage={Pencil} alternativeText = "texto alternativo" showButtonAlignment={false}/>               
            </Content>
            
            <FooterWrapper>
                <Footer />
            </FooterWrapper>

        </Container>
    );
} 
import { Container,Banner,Content,FooterWrapper} from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { MobileHeaderIcon } from '../../components/MobileHeaderIcon';
import { Footer } from '../../components/Footer';
import Pngegg from '../../assets/pngegg.png';
import Pngegg02 from '../../assets/pngegg02.png';
import { Slider } from '../../components/Slider';
import { SideMenu } from '../../components/SideMenu';
import {useState } from "react";
import Love from '../../assets/love.svg';
import Suco from '../../assets/Suco.png';
import Peachy from '../../assets/Peachy.png';
import Spaguetti from '../../assets/Spaguetti.png';

export function MenuCommonUser() {
    const buttonIconContent = "Pedidos (0)";
    
    const [menuIsOpen,setMenuIsOpen] = useState(false);
  

    return (
        <Container>
           
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                isAdmin={false} 
            />
           

             <div className="desktop-header">
                <DesktopHeaderIcon buttonIconContent={buttonIconContent} showIcon={true}  />
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
                <Slider title = 'Refeições' cardImage={Love} itemImage={Spaguetti} itemName='Spaguetti Gambe' alternativeText = "texto alternativo" description='Massa fresca com camarões e pesto.' price='R$ 79,97'/>
                <Slider title = 'Sobremesas' cardImage={Love} itemImage={Peachy} itemName = 'Peachy pastrie' alternativeText = "texto alternativo"  description='Delicioso folheado de pêssego com folhas de hortelã.' price='R$ 32,97' />
                <Slider title = 'Bebidas' cardImage={Love} itemImage={Suco} itemName = 'Suco de maracujá' alternativeText = "texto alternativo" description='Suco de maracujá gelado, cremoso, docinho.' price='R$ 32,97' />                
            </Content>
            
            <FooterWrapper>
                <Footer />
            </FooterWrapper>

        </Container>
    );
} 
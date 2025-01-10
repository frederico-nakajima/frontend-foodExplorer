import { Container,Banner,Content } from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { Footer } from '../../components/Footer';
import Pngegg from '../../assets/pngegg.png';
import { Slider } from '../../components/Slider';

export function MenuUser() {
    return (
        <Container>
            <DesktopHeaderIcon />
            <div className='underHeader'>
                <Banner>
                    <div className='imgBanner'>
                        <img src={Pngegg} alt="imagem de biscoitos e frutinhas" />
                    </div>
                    <div className='textBox'>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>
            </div>
            
            <Content>

      
            <Slider/>










            </Content>
            <Footer />
        </Container>
    );
} 
import { Container,  AlinhamentoCountButton,HomeLink } from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { Tag } from '../../components/Tag'; 
import Dish from '../../assets/Dish.png';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';

import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { MobileHeaderIcon } from '../../components/MobileHeaderIcon'
import CaretLeft from '../../assets/CaretLeft.svg';



export function MealUser() {
    return (
        <Container>
            <div className="header-mobile">
                <MobileHeaderIcon />
            </div>
            <div className="header-desktop">
                <DesktopHeaderIcon />
            </div>

           
            <HomeLink to="/">
                <img src={CaretLeft} alt="imagem de uma seta apontando para esquerda"  />
                <p>Voltar</p>
            </HomeLink>
           

            <main>
            
                <img className='pratoComida' src={Dish} alt="imagem de um prato de comida de um restaurante" />

                <div className='dish'>
                    <div className="salada-ingredientes">
                        <h1>Salada Ravanello</h1>
                        <p>
                            Rabanetes, folhas verdes e molho agridoce salpicados
                            com gergelim. O pão naan dá um toque especial.
                        </p>
                    </div>

                    <div className='tags'>
                        <Tag title="alface" />
                        <Tag title="cebola" />
                        <Tag title="pão naan" />
                        <Tag title="pepino" />
                        <Tag title="rabanete" />
                        <Tag title="tomate" />
                    </div>

                    <AlinhamentoCountButton>
                        <div className="count">
                            <img className='operadorMatemático' src={Minus} alt="imagem de um sinal de menos" />
                            <span>01</span>
                            <img className='operadorMatemático' src={Plus} alt="imagem de um sinal de mais" />
                        </div>
                        <div className='button'>
                            <Button title="  incluir ∙ R$ 25,00"/>
                        </div>
                    </AlinhamentoCountButton>
                </div>
                              
                            

                
            </main>
            <Footer />
        </Container>
    );
}
                                



            
                              



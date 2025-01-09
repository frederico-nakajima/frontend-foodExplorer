import { Container,  AlinhamentoCountButton,HomeLink } from './styles';
import Dish from '../../assets/Dish.png';


import CaretLeft from '../../assets/CaretLeft.svg';

import { Tag } from '../../components/Tag'; 
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { Header } from '../../components/Header';
import { MobileHeader } from '../../components/MobileHeader'



export function Meal() {
    return (
        <Container>
            <div className="header-mobile">
                <MobileHeader />
            </div>
            <div className="header-desktop">
                <Header />
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
                       
                        <div className='button'>
                            <Button title="Editar prato"/>
                        </div>
                    </AlinhamentoCountButton>
                </div>
                              
                            

                
            </main>
            <Footer />
        </Container>
    );
}
                                



            
                              



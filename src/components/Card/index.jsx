import { CardWrapper,ButtonAlignmentCount } from './styles';
import Spaguetti from '../../assets/Spaguetti.png';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import Love from '../../assets/love.svg';
import { Button } from '../../components/Button';

export function Card(){
    return(
        
            <CardWrapper>
                <div className="favoritar">
                    <img src={Love} alt="icone de um coração favoritar" />
                </div>
                <a href="#">
                    <img src={Spaguetti} alt="Spaguetti Gambe" />
                </a>                
                <h6>Spaguetti Gambe<i className="fas fa-chevron-right"></i> </h6>
                <p>Massa fresca com camarões e pesto. </p>
                <span>R$ 79,97</span>

                <ButtonAlignmentCount>
                    <div className="count">
                        <img src={Minus} alt="imagem de um sinal de menos" />
                        <span>01</span>
                        <img src={Plus} alt="imagem de um sinal de mais" />
                    </div>
                    <div className='custom-button'>
                        <Button title="incluir" />
                    </div>
                </ButtonAlignmentCount>              
            </CardWrapper>
        
    )
}








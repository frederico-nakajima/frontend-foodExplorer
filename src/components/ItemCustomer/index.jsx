import { CardWrapper,ButtonAlignmentCount } from './styles';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

export function ItemCustomer({iconImage,iconAltText,itemImage,itemAltText,description,price,itemName, showButtonAlignment = false, ...rest } ){
    const { user } = useAuth();
    const linkTo = user.role === 'admin' ? '/dishadmin' : '/dishuser';
    
    return(        
        <CardWrapper {...rest}>
            <div className="favoritar">
                <img src={iconImage} alt={iconAltText }/>
            </div>                
            <div className='itemImage'>
                <img src={itemImage} alt={itemAltText}/>
            </div>                           
            <div className="alignment">
                <h6>{itemName}</h6>
                <i className="fas fa-chevron-right"></i>
            </div>
            <p>{description}</p>
            <span>{Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            {
                showButtonAlignment && (
                    <ButtonAlignmentCount>
                        <div className="count">
                            <img src={Minus} alt="imagem de um sinal de menos" />
                            <span>01</span>
                            <img src={Plus} alt="imagem de um sinal de mais" />
                        </div>
                        <div className="custom-button">
                            <Button title="incluir" />
                        </div>
                    </ButtonAlignmentCount>
                )
            }          
        </CardWrapper>        
    )
}








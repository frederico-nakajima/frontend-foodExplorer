import { CardWrapper,ButtonAlignmentCount } from './styles';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { Link } from "react-router-dom"

export function Card({image,altText,itemImage,description,price,itemName, showButtonAlignment = true, ...rest } ){
    const { user, updateProfile } = useAuth();
    const linkTo = user.role === 'admin' ? '/dishadmin' : '/dishuser';
    
    return(        
            <CardWrapper {...rest}>
                <div className="favoritar">
                    <img src={image} alt={altText}/>
                </div>
                <Link to={linkTo}>
                    <img src={itemImage} alt={altText} />
                </Link>
            
                <h6>{itemName}<i className="fas fa-chevron-right"></i> </h6>
                <p>{description}</p>
                <span>{price}</span>

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








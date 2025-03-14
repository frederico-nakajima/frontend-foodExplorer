import { Container } from './styles';
import Polygon from '../../assets/Polygon.png'; 
import list from '../../assets/list.svg'; 
import zero from '../../assets/zero.png';
import Receipt from '../../assets/Receipt.svg';  

export function MobileHeaderIcon({onOpenMenu}) {
  return (
    <Container>
        <img src={list} alt="menu sanduiche" className='list' onClick={onOpenMenu} /> 
        <img src={Polygon} alt="imagem de um polígono" />
        <div>
            <h2>food explorer</h2>
        </div>            
        <div className="positionZero">
            <div className='receiptWithZero'>
                <img src={Receipt} alt="Receipt"/>
            </div>
            <div className="smallZero">
                <img src={zero} alt="0" className='zero'/>
            </div>
        </div>
    </Container>
  );
}

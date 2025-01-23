import { Container } from './styles';
import Polygon from '../../assets/Polygon.png'; 
import list from '../../assets/list.svg'; 

export function MobileHeader({onOpenMenu}) {
  return (
    <Container>
        <img src={list} alt="menu sanduiche" className='list' onClick={onOpenMenu} /> 
        <img src={Polygon} alt="imagem de um polígono" />
        <div>
            <h2>food explorer</h2>
            <p>admin</p>
        </div>
    </Container>
  );
}

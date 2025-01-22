import { Container,Brand,Search } from './styles';
import polygonImageHeader from '../../assets/Polygon-header.png';
import busca from '../../assets/busca.svg';
import SignOut from '../../assets/SignOut.svg'
import { ButtonIcon } from '../ButtonIcon'
import Receipt from '../../assets/Receipt.svg'

export function DesktopHeaderIcon({ buttonIconContent }){   
    
    return(
        <Container>
           
           <main>
               <Brand>
                    <img src={polygonImageHeader} alt="imagem de um polígono" />
                    <div>
                        <h2>food explorer</h2>
                        
                    </div>
                </Brand>

                <Search>
                    <img src={busca} alt="ícone de busca" /> 
                    <input placeholder="Busque por pratos ou ingredientes" />
                </Search>
               
                
                
                <ButtonIcon icon={Receipt}>
                    {buttonIconContent}
                </ButtonIcon>

                
               
                    
                <img src={SignOut} alt="ícone de sair do app" />
           </main>
               
                  
                
          

           
                
        </Container>
    )
}
                
                


import { Container,Brand } from './styles';
import polygonImageFooter from '../../assets/Polygon 1-footer.svg';




export function FooterDishAdminUser({...rest}){
    return(
        <Container {...rest}>
           
           <main>
               <Brand>
                    <img src={polygonImageFooter} alt="imagem de um polígono" />
                    <div>
                        <h2>food explorer</h2>
                    </div>
                </Brand>
                        
                <p>© 2023 - Todos os direitos reservados.</p>
           </main>

        </Container>
    )
}
                    
                
               
                
               
               
                  
                
              

           
                
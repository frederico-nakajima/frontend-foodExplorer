import { Container,  ReturnLink } from './styles';
import { DesktopHeader } from '../../components/DesktopHeader';
import { Tag } from '../../components/Tag'; 
import Dish from '../../assets/Dish.png';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { MobileHeader } from '../../components/MobileHeader'
import CaretLeft from '../../assets/CaretLeft.svg';
import { SideMenu } from '../../components/SideMenu';
import {useState } from "react";
import { useNavigate } from 'react-router-dom';

export function DishAdminUser() {
    const [menuIsOpen,setMenuIsOpen] = useState(false);

    const navigate = useNavigate();

    function handleEditDish() {
        navigate("/edit");
    }
    
    return (
        <Container>
              <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                isAdmin={true} 
            />

            <div className="mobile-header">
                <MobileHeader onOpenMenu={()=> setMenuIsOpen(true)}  />
            </div>
            <div className="desktop-header">
                <DesktopHeader />
            </div>

           
            <ReturnLink to="/">
                <img src={CaretLeft} alt="imagem de uma seta apontando para esquerda"  />
                <p>Voltar</p>
            </ReturnLink>
           

            <main>
            
                <img className='restaurantDish' src={Dish} alt="imagem de um prato de comida de um restaurante" />

                <div className='dish'>
                    <div className="salad-ingredients">
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
                       
                    <div  className="custom-button">
                        <Button title="Editar prato" onClick={handleEditDish}/>
                    </div>                      
                   
                </div>
            </main>

            <Footer />
            
        </Container>
    );
}
                                
                              
                            

                



            
                              



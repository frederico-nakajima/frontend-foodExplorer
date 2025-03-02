import { Container,  AlinhamentoCountButton,ReturnLink } from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { Tag } from '../../components/Tag'; 
import Dish from '../../assets/Dish.png';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { MobileHeaderIcon } from '../../components/MobileHeaderIcon'
import CaretLeft from '../../assets/CaretLeft.svg';
import { SideMenu } from '../../components/SideMenu';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import  { api }  from '../../services/api';
import { Receipt } from "phosphor-react";




export function DishCommonUser() {
    const [menuIsOpen,setMenuIsOpen] = useState(false);
    const buttonIconContent = "Pedidos (0)";
        
    const [data, setData] = useState(null);    

    const params = useParams();
    const navigate = useNavigate();

  

    useEffect(() => {
        async function fetchDish(){
            const response = await api.get(`/dishescustomer/${params.id}`);
            setData(response.data);
        }

        fetchDish();
    },[]);
    return (
           <Container>
                  <SideMenu
                      menuIsOpen={menuIsOpen}
                      onCloseMenu={() => setMenuIsOpen(false)}
                      isAdmin={true} 
                  />
      
                  <div className="mobile-header">
                      <MobileHeaderIcon onOpenMenu={()=> setMenuIsOpen(true)}  />
                  </div>
                  <div className="desktop-header">
                        <DesktopHeaderIcon buttonIconContent={buttonIconContent} showIcon={true}  />
                  </div>
      
                  { 
                      data && 
                      <main>
                          <ReturnLink to="/">
                              <img src={CaretLeft} alt="imagem de uma seta apontando para esquerda"  />
                              <p>Voltar</p>
                          </ReturnLink>
      
                          <div className='dish'>
      
                              <img className='restaurantDish' src={Dish} alt="imagem de um prato de comida de um restaurante" />
      
                              <div className="salad-ingredients">
                                  <h1>{data.name}</h1>
                                  <p>
                                      {data.description}
                                  </p>
      
                                  {
                                      data.tags &&
                                      <div className='tags'>
                                          {   
                                              data.tags.map(tag => (
                                                  <Tag 
                                                  key={String(tag.id)}
                                                  title={tag.name}
                                                  />
                                              ))
                                          }
                                      </div>
                                  }
      
                                  <div  className="custom-button">
                                      <Button title="Editar prato" onClick={() => handleEditDish(data.id)}/>
                                  </div>                   
                              </div>                            
                          </div>
                              
                      </main>
                  }   
                  <Footer/>
                  
              </Container>
    );
}
                                
                              
                            

                



            
                              



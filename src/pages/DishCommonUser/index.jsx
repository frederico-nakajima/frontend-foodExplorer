import { Container,ReturnLink,ButtonAlignmentCount } from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { Tag } from '../../components/Tag'; 
import Dish from '../../assets/Dish.png';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Footer } from '../../components/Footer';
import { MobileHeaderIcon } from '../../components/MobileHeaderIcon'
import CaretLeft from '../../assets/CaretLeft.svg';
import { SideMenu } from '../../components/SideMenu';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import  { api }  from '../../services/api';
import  Receipt  from '../../assets/Receipt.svg';


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

            <ReturnLink to="/">
                <img src={CaretLeft} alt="imagem de uma seta apontando para esquerda"  />
                <p>Voltar</p>
            </ReturnLink>
            
            { 
            data && 
            <main>

                <div className='dish'>      
                    <img 
                        className='restaurantDish' 
                        src={`${api.defaults.baseURL}/files/${data.image}`} 
                        alt={`Imagem do prato ${data.name}`} 
                    />

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

                            <ButtonAlignmentCount>
                            <div className="count">
                                <img src={Minus} alt="imagem de um sinal de menos" />
                                <span>01</span>
                                <img src={Plus} alt="imagem de um sinal de mais" />
                            </div>
                            <div className="custom-button">
                                <ButtonIcon icon={Receipt}>
                                    incluir ∙ R$ 25,00
                                </ButtonIcon>
                            </div>
                        </ButtonAlignmentCount>                 
                    </div>                            
                </div>                    
            </main>
            }

            <Footer/>                
        </Container>
    );
}
                                
                              
                            

                



            
                              



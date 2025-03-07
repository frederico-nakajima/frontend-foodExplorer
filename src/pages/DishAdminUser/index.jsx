import { Container,  ReturnLink } from './styles';
import { DesktopHeader } from '../../components/DesktopHeader';
import { Tag } from '../../components/Tag'; 
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { MobileHeader } from '../../components/MobileHeader'
import CaretLeft from '../../assets/CaretLeft.svg';
import { SideMenu } from '../../components/SideMenu';
import {useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import  { api }  from '../../services/api';

export function DishAdminUser() {
    const [menuIsOpen,setMenuIsOpen] = useState(false);
    const [data, setData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    function handleEditDish(id){
        navigate(`/edit/${id}`);
    }
    
    useEffect(() => {
        async function fetchDish(){
            const response = await api.get(`/dishes/${params.id}`);
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
                <MobileHeader onOpenMenu={()=> setMenuIsOpen(true)}  />
            </div>
            <div className="desktop-header">
                <DesktopHeader />
            </div>

            { 
                data && 
                <main>
                    <ReturnLink to="/">
                        <img src={CaretLeft} alt="imagem de uma seta apontando para esquerda"  />
                        <p>Voltar</p>
                    </ReturnLink>

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
                                        data.tags.map((tag, index) => (
                                            <Tag 
                                            key={index} // 🔹 Usa o índice, pois `tag` agora é apenas um nome
                                            title={tag} // ✅ Agora `tag` é apenas uma string
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
                                
                              
                            

                



            
                              



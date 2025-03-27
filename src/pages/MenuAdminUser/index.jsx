import { Container,Banner,Content} from './styles';
import { DesktopHeader } from '../../components/DesktopHeader';
import { MobileHeader } from '../../components/MobileHeader';
import { Footer } from '../../components/Footer';
import Pngegg from '../../assets/pngegg.png';
import Pngegg02 from '../../assets/pngegg02.png';
import Pencil from '../../assets/Pencil.svg';
import { Slider } from '../../components/Slider';
import { SideMenu } from '../../components/SideMenu';
import { useState, useEffect } from 'react'
import {api} from "../../services/api";
import { Item } from "../../components/Item";
import { SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import { useSearch } from '../../contexts/SearchContext';

export function MenuAdminUser() {
    const iconAltText = ' ícone de um lapiz';
    const itemAltText = 'imagem de uma comida'
    const [dishes, setDishes] = useState([]);
    const navigate = useNavigate();    
    const [menuIsOpen,setMenuIsOpen] = useState(false);
    const { searchTerm } = useSearch();   

    function handleDishAdminUser(id){
        navigate(`/dishadmin/${id}`);
    }
    
    const filteredDishes = dishes;

    
    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get(`/dishes`, {
                    params: { name: searchTerm } 
                });
                setDishes(response.data);
            } catch (error) {
                console.error("Erro ao buscar pratos:", error);
            }
        }
        fetchDishes();
    }, [searchTerm]); 

    return (
        <Container>           
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                isAdmin={true} 
            />           

            <div className="desktop-header">
                <DesktopHeader/>
            </div>
            <div className="mobile-header">
                <MobileHeader onOpenMenu={()=> setMenuIsOpen(true)} />
            </div>
            <div className='banner'>
                <Banner>
                    <div className='imgBannerMobile'>
                        <img src={Pngegg02} alt="imagem de biscoitos e frutinhas" />
                    </div>
                    <div className='imgBannerDesktop'>
                        <img src={Pngegg} alt="imagem de biscoitos e frutinhas" />
                    </div>
                    <div className='textBoxMobile'>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com<br/> ingredientes selecionados</p>
                    </div>

                    <div className='textBoxDesktop'>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>
            </div>
            
            <Content>                       
                <Slider title="Refeições">
                    {
                        filteredDishes
                        .filter(dish => dish.category === "Refeições")
                        .map((dish) => {
                            const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`; 
                            
                            return (
                                <SwiperSlide key={dish.id}>
                                    <Item
                                        iconImage={Pencil}
                                        iconAltText={iconAltText}
                                        itemImage={imageUrl}  
                                        itemAltText={itemAltText}
                                        itemName={dish.name}
                                        description={dish.description}
                                        price={dish.price}
                                        showButtonAlignment={false}
                                        onClick={() => handleDishAdminUser(dish.id)}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </Slider>

                <Slider title="Sobremesas">
                    {
                        filteredDishes
                        .filter(dish => dish.category === "Sobremesas")
                        .map((dish) => {
                            const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`; 
                            
                            return (
                                <SwiperSlide key={dish.id}>
                                    <Item
                                        iconImage={Pencil}
                                        iconAltText={iconAltText}
                                        itemImage={imageUrl}  
                                        itemAltText={itemAltText}
                                        itemName={dish.name}
                                        description={dish.description}
                                        price={dish.price}
                                        showButtonAlignment={false}
                                        onClick={() => handleDishAdminUser(dish.id)}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </Slider>
                <Slider title="Bebidas">
                    {
                        filteredDishes
                        .filter(dish => dish.category === "Bebidas")
                        .map((dish) => {
                            const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`; 
                            
                            return (
                                <SwiperSlide key={dish.id}>
                                    <Item
                                        iconImage={Pencil}
                                        iconAltText={iconAltText}
                                        itemImage={imageUrl}  
                                        itemAltText={itemAltText}
                                        itemName={dish.name}
                                        description={dish.description}
                                        price={dish.price}
                                        showButtonAlignment={false}
                                        onClick={() => handleDishAdminUser(dish.id)}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </Slider>
            </Content>          
            
            <Footer />                      
        </Container>
    );
} 
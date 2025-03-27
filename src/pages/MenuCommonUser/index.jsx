import { Container,Banner,Content} from './styles';
import { DesktopHeaderIcon } from '../../components/DesktopHeaderIcon';
import { MobileHeaderIcon } from '../../components/MobileHeaderIcon';
import { Footer } from '../../components/Footer';
import Pngegg from '../../assets/pngegg.png';
import Pngegg02 from '../../assets/pngegg02.png';
import { SliderCustomer } from '../../components/SliderCustomer';
import { SideMenu } from '../../components/SideMenu';
import { useState, useEffect } from 'react'
import { ItemCustomer } from "../../components/ItemCustomer";
import { SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import Love from '../../assets/love.svg';
import  { api }  from '../../services/api';
import { useSearch } from '../../contexts/SearchContext';

export function MenuCommonUser() {
    const buttonIconContent = "Pedidos (0)";
    const iconAltText = ' ícone de um coração';
    const itemAltText = 'imagem de uma comida'
    const [dishes, setDishes] = useState([]);    
    const [menuIsOpen,setMenuIsOpen] = useState(false);    
    const navigate = useNavigate();
    const { searchTerm } = useSearch(); 

    function handleDishCustomerUser(id){
        navigate(`/dishuser/${id}`);
    }

    const filteredDishes = dishes;    
   
    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get(`/dishescustomer`, {
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
                isAdmin={false} 
            />           

             <div className="desktop-header-icon">
                <DesktopHeaderIcon buttonIconContent={buttonIconContent} showIcon={true} />
            </div>
            <div className="mobile-header-icon">
                <MobileHeaderIcon onOpenMenu={()=> setMenuIsOpen(true)} />
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
                <SliderCustomer title="Refeições">
                    {   
                        filteredDishes
                        .filter(dish => dish.category === "Refeições")
                        .map((dish) => {
                            const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`; 
                            
                            return (
                                <SwiperSlide key={dish.id}>
                                    <ItemCustomer
                                        iconImage={Love}
                                        iconAltText={iconAltText}
                                        itemImage={imageUrl}  
                                        itemAltText={itemAltText}
                                        itemName={dish.name}
                                        description={dish.description}
                                        price={dish.price}
                                        showButtonAlignment={true}
                                        onClick={() => handleDishCustomerUser(dish.id)}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </SliderCustomer>
                <SliderCustomer title="Sobremesas">
                    {
                        filteredDishes
                        .filter(dish => dish.category === "Sobremesas")
                        .map((dish) => {
                            const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`; 
                            
                            return (
                                <SwiperSlide key={dish.id}>
                                    <ItemCustomer
                                        iconImage={Love}
                                        iconAltText={iconAltText}
                                        itemImage={imageUrl}  
                                        itemAltText={itemAltText}
                                        itemName={dish.name}
                                        description={dish.description}
                                        price={dish.price}
                                        showButtonAlignment={true}
                                        onClick={() => handleDishCustomerUser(dish.id)}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </SliderCustomer>
                <SliderCustomer title="Bebidas">
                    {
                        filteredDishes
                        .filter(dish => dish.category === "Bebidas")
                        .map((dish) => {
                            const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`; 
                            
                            return (
                                <SwiperSlide key={dish.id}>
                                    <ItemCustomer
                                        iconImage={Love}
                                        iconAltText={iconAltText}
                                        itemImage={imageUrl}  
                                        itemAltText={itemAltText}
                                        itemName={dish.name}
                                        description={dish.description}
                                        price={dish.price}
                                        showButtonAlignment={true}
                                        onClick={() => handleDishCustomerUser(dish.id)}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </SliderCustomer>
            </Content>             
            
            <Footer />           
        </Container>
    );
} 
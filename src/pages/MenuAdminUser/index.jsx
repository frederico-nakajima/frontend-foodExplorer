import { Container,Banner,Content,FooterWrapper} from './styles';
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


export function MenuAdminUser() {
    const iconAltText = ' ícone de um lapiz';
    const itemAltText = 'imagem de uma comida'
    const [dishes, setDishes] = useState([]);
    const navigate = useNavigate();
    
    const [searchName, setSearchName] = useState(""); 
    const [searchCategory, setSearchCategory] = useState(""); 
    const [searchPrice, setSearchPrice] = useState(""); 
    const [searchDescription, setSearchDescription] = useState(""); 

    
    const [menuIsOpen,setMenuIsOpen] = useState(false);
            
    const meals = Array.isArray(dishes) ? dishes.filter(dish => dish.category === "Refeições") : [];
    const desserts = Array.isArray(dishes) ? dishes.filter(dish => dish.category === "Sobremesas") : [];
    const drinks = Array.isArray(dishes) ? dishes.filter(dish => dish.category === "Bebidas") : [];

    function handleDishAdminUser(id){
        navigate(`/dishadmin/${id}`);
    }
    
    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get(`/dishes`, {
                    params: {
                        name: searchName || "", // Se for vazio, envia uma string vazia
                        category: searchCategory || "",
                        price: searchPrice || "",
                        description: searchDescription || ""
                    }
                });
                setDishes(response.data); // Atualiza o estado com os pratos filtrados
            } catch (error) {
                console.error("Erro ao buscar pratos:", error);
            }
        }        

        fetchDishes();

    },[searchName, searchCategory, searchPrice, searchDescription]);

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
            <div className="mobile-header-icon">
                <MobileHeader onOpenMenu={()=> setMenuIsOpen(true)} />
            </div>
            <div className='underHeader'>
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
                {meals.map((dish) => (
                    <SwiperSlide key={dish.id}>
                    <Item
                        iconImage={Pencil}
                        iconAltText={iconAltText}
                        itemImage={dish.image}
                        itemAltText={itemAltText}
                        itemName={dish.name}
                        description={dish.description}
                        price={dish.price}
                        showButtonAlignment={false}
                        onClick = {() => handleDishAdminUser(dish.id)}
                    />
                    </SwiperSlide>
                ))}
            </Slider>

                <Slider title="Sobremesas">
                {desserts.map((dish) => (
                    <SwiperSlide key={dish.id}>
                    <Item
                        iconImage={Pencil}
                        iconAltText={iconAltText}
                        itemImage={dish.image}
                        itemAltText={itemAltText}
                        itemName={dish.name}
                        description={dish.description}
                        price={dish.price}
                        showButtonAlignment={false}
                        onClick = {() => handleDishAdminUser(dish.id)}
                    />
                    </SwiperSlide>
                ))}
            </Slider>

            <Slider title="Bebidas">
                {drinks.map((dish) => (
                    <SwiperSlide key={dish.id}>
                    <Item
                        iconImage={Pencil}
                        iconAltText={iconAltText}
                        itemImage={dish.image}
                        itemAltText={itemAltText}
                        itemName={dish.name}
                        description={dish.description}
                        price={dish.price}
                        showButtonAlignment={false}
                        onClick = {() => handleDishAdminUser(dish.id)}
                    />
                    </SwiperSlide>
                ))}
            </Slider>

            </Content>
            
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </Container>
    );
} 
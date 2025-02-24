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
import { Dish } from "../../components/Dish";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export function MenuAdminUser() {
    const { id } = useParams();
    const buttonIconContent = "Novo prato";
    const location = useLocation(); // 🔥 Captura o estado passado pelo navigate
    const [dishes, setDishes] = useState([]); 
    
    const [menuIsOpen,setMenuIsOpen] = useState(false);
            
    const meals = Array.isArray(dishes) ? dishes.filter(dish => dish.category === "Refeições") : [];
    const desserts = Array.isArray(dishes) ? dishes.filter(dish => dish.category === "Sobremesas") : [];
    const drinks = Array.isArray(dishes) ? dishes.filter(dish => dish.category === "Bebidas") : [];




    useEffect(() => {
        async function fetchDishes(){
            const response = await api.get(`/dishes/${id}`);
            setDishes(response.data);
        }

        fetchDishes();
    },[id, location.state?.newDishAdded]);

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
                       
            <Slider 
                title="Refeições" 
                dishes={meals} 
                renderItem={(dish) => (
                    <Dish                    
                        itemName={dish.name}
                        image={dish.image}
                        itemImage={dish.image}
                        altText={dish.name}
                        description={dish.description}
                        price={dish.price}
                        showButtonAlignment={false}
                    />
                )}
            />

            <Slider 
                title="Sobremesas" 
                dishes={desserts} 
                renderItem={(dish) => (
                    <Dish
                    itemName={dish.name}
                    image={dish.image}
                    itemImage={dish.image}
                    altText={dish.name}
                    description={dish.description}
                    price={dish.price}
                    showButtonAlignment={false}
                    />
                )}
            />

            <Slider 
                title="Bebidas" 
                dishes={drinks} 
                renderItem={(dish) => (
                    <Dish
                        itemName={dish.name}
                        image={dish.image}
                        itemImage={dish.image}
                        altText={dish.name}
                        description={dish.description}
                        price={dish.price}
                        showButtonAlignment={false}
                    />
                )}
            />


            </Content>
            
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </Container>
    );
} 
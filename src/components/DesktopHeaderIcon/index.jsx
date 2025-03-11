import { Container,Brand,Search } from './styles';
import polygonImageHeader from '../../assets/Polygon-header.png';
import busca from '../../assets/busca.svg';
import SignOut from '../../assets/SignOut.svg'
import { ButtonIcon } from '../ButtonIcon'
import Receipt from '../../assets/Receipt.svg'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';

export function DesktopHeaderIcon({setSearchTerm, buttonIconContent,showButtonIcon = true }){  
    const { signOut,user } = useAuth();
       const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {
          setIsVisible(true);
        }, []);
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();

    }
    return(
        <Container className={isVisible ? 'show' : ''}>
            <main>
               <Brand>
                    <img src={polygonImageHeader} alt="imagem de um polígono" />
                    <div>
                        <h2>food explorer</h2>                        
                    </div>
                </Brand>

                <Search>
                    <img src={busca} alt="ícone de busca" /> 
                    <input 
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => setSearchTerm(e.target.value)}  
                    />
                </Search>               
                
                {
                showButtonIcon && (
                    <ButtonIcon icon={Receipt} >
                        {buttonIconContent}
                    </ButtonIcon>
                )
                }
                                               
                <img src={SignOut} alt="ícone de sair do app" onClick={handleSignOut} />
           </main>
        </Container>
    )
}
                
                


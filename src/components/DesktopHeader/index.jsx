import { Container,Brand,Search } from './styles';
import polygonImageHeader from '../../assets/Polygon-header.png';
import busca from '../../assets/busca.svg';
import SignOut from '../../assets/SignOut.svg'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useAuth } from '../../hooks/auth'
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function DesktopHeader({ setSearchTerm }){
    const { signOut,user } = useAuth();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);
        
    const navigate = useNavigate();

    function handleNewDish() {
        navigate("/add");
    }

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
                        <p>admin</p>
                    </div>
                </Brand>

                <Search>
                    <img src={busca} alt="ícone de busca" /> 
                    <input 
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />

                </Search>               
                
                <ButtonIcon onClick={handleNewDish}>
                    Novo prato
                </ButtonIcon>              
                    
                <img src={SignOut} alt="ícone de sair do app" onClick={handleSignOut}/>
            </main>          
        </Container>
    )
}
                
                
            

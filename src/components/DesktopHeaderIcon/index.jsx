import { Container,Brand,Search } from './styles';
import polygonImageHeader from '../../assets/Polygon-header.png';
import busca from '../../assets/busca.svg';
import SignOut from '../../assets/SignOut.svg'
import { ButtonIcon } from '../ButtonIcon'
import Receipt from '../../assets/Receipt.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { useSearch } from '../../contexts/SearchContext';

export function DesktopHeaderIcon({buttonIconContent,showButtonIcon = true }){  
    const { signOut,user } = useAuth();
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();
    
    function handleSignOut(){
        navigate("/");
        signOut();        
    }
    function handleSearchChange(e) {
        const searchValue = e.target.value;
        setSearchTerm(searchValue);
    }    
    function handleSearchClick() {
        if (location.pathname !== "/") {
            navigate("/");
        }
    }
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
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
                    <img
                        src={busca}
                        alt="ícone de busca"
                        onClick={handleSearchClick} 
                        style={{ cursor: "pointer" }} 
                    />
                   <input
                        placeholder="Busque por pratos ou ingredientes"
                        value={searchTerm}
                        onChange={handleSearchChange}
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
                
                


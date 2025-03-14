import { Container, Brand, Search } from './styles';
import polygonImageHeader from '../../assets/Polygon-header.png';
import busca from '../../assets/busca.svg';
import SignOut from '../../assets/SignOut.svg';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useAuth } from '../../hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSearch } from '../../contexts/SearchContext';

export function DesktopHeader() {
    const { signOut, user } = useAuth();
    const [isVisible, setIsVisible] = useState(false);
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();
    const navigate = useNavigate();
  
    function handleNewDish() {
        navigate("/add");
    }    
    function handleSignOut() {
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
    
  return (
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

        <ButtonIcon onClick={handleNewDish}>
          Novo prato
        </ButtonIcon>

        <img src={SignOut} alt="ícone de sair do app" onClick={handleSignOut} />
      </main>
    </Container>
  );
}

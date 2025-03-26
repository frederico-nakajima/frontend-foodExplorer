import { X } from "@phosphor-icons/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Search } from '../Search';
import { Container, Nav, Button,SideMenuContent,HeaderSideMenu,HeaderControls } from "./styles";
import { Footer } from '../../components/Footer';
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom';

export function SideMenu({menuIsOpen, onCloseMenu, isAdmin }) {
  const { signOut } = useAuth();        
  const navigate = useNavigate();

  function handleSignOut(){
      navigate("/");
      signOut();
  }
  function handleNewDish() {
    navigate("/add"); 
  }

  return (
    <Container data-menu-is-open = {menuIsOpen} $isAdmin={isAdmin}>
      <HeaderSideMenu>
        <HeaderControls>
        { 
          menuIsOpen && 
          <Button onClick={onCloseMenu}>
          <X/>
          </Button>
        }
        <span>Menu</span>
        </HeaderControls>
      </HeaderSideMenu>        

    <SideMenuContent>
      <Search 
        icon={MagnifyingGlass}  
        placeholder="No mínimo 6 caracteres"
        onSearchClick={onCloseMenu}
      />
      <Nav>
        {isAdmin && (
          <>
            <a href="#"  onClick={handleNewDish} className="NewDishLink">Novo prato</a>
            <hr/>
          </>
        )}
        <a href="#" className="SignOut" onClick={handleSignOut}>Sair</a>
        <hr />        
      </Nav> 
    </SideMenuContent>
      <Footer />
    </Container>

  );
}
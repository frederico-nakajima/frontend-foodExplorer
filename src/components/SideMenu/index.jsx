import { X } from "@phosphor-icons/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Search } from '../Search';
import { Container, Nav, Title, Header, Button,SideMenuContent,HeaderSideMenu,HeaderControls } from "./styles";
import { Footer } from '../../components/Footer';

export function SideMenu({menuIsOpen, onCloseMenu}) {
  return (
    <Container data-menu-is-open = {menuIsOpen}>
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
      <Search icon={MagnifyingGlass}  placeholder="No mínimo 6 caracteres"/>
      <Nav>
        <a href="#" className="NewDishLink">Novo prato</a>
        <hr className="NewDishLink" />
        <a href="#" className="SignOut">Sair</a>
        <hr />        
      </Nav> 
    </SideMenuContent>
      <Footer />
    </Container>

  );
}
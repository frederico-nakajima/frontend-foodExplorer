import { X } from "@phosphor-icons/react";
import { Search } from '../../components/Search';
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
      <Search/>
      <Nav>
        <a href="#" className="NewDishLink">Novo prato</a>
        <hr />
        <a href="#" className="SignOut">Sair</a>
        <hr />        
      </Nav> 
    </SideMenuContent>
      <Footer />
    </Container>

  );
}
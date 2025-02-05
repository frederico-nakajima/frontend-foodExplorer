import { Container,Brand,Search } from './styles';
import polygonImageHeader from '../../assets/Polygon-header.png';
import busca from '../../assets/busca.svg';
import SignOut from '../../assets/SignOut.svg'
import { ButtonIcon } from '../ButtonIcon'
import Receipt from '../../assets/Receipt.svg'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function DesktopHeaderIcon({ buttonIconContent,showButtonIcon = true }){  
    const { signOut,user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();

    }
    return(
        <Container>
            <main>
               <Brand>
                    <img src={polygonImageHeader} alt="imagem de um polígono" />
                    <div>
                        <h2>food explorer</h2>                        
                    </div>
                </Brand>

                <Search>
                    <img src={busca} alt="ícone de busca" /> 
                    <input placeholder="Busque por pratos ou ingredientes" />
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
                
                


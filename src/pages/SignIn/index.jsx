import { Container,Form,Header } from './styles';
import polygonImage from '../../assets/Polygon.png';
import { useAuth } from "../../hooks/auth";
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password });
    }
    return(
        <Container>
            <Header>
                <div className="content">
                    <img src={polygonImage} alt="imagem de um polígono" />
                    <p>food explorer</p>
                </div>
            </Header>

            <Form>
                <h1>Faça login</h1>

                <div>
                    <label htmlFor="email">Email:</label>
                    <Input
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"                   
                        onChange = {e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        type="password"                   
                        onChange = {e => setPassword(e.target.value)}
                    />
                </div>

                <div className='custom-buttom'>
                    <Button title="Entrar" onClick = { handleSignIn }/>
                </div>

                <Link to="/register">
                    Criar uma conta
                </Link>

            </Form>
        </Container>
    )
}

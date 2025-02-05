import { Container,Form,Header } from './styles';
import polygonImage from '../../assets/Polygon.png';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import  { useNavigate } from 'react-router-dom';
import { api } from "../../services/api"

export function SignUp(){
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }
        
        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso|"); 
            navigate("/");      
        })
        .catch(error => {
            if(error.response){
                alert (error.response.data.message);
            }else{
                alert("Não foi possível cadastrar");
            }
        });
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
                <h1>Crie sua conta</h1>
                <div>
                    <label htmlFor="name">Seu nome:</label>
                    <Input
                    placeholder="Exemplo: Maria da Silva"
                    type="text"                   
                    onChange = {e =>setName(e.target.value)}
                    />
                </div>         
                <div>
                    <label htmlFor="email">Email:</label>
                    <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"                   
                    onChange = {e =>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"                   
                    onChange = {e =>setPassword(e.target.value)}
                    />
                </div>
                <div className='custom-buttom'>
                    <Button title="Criar conta" onClick={handleSignUp}/>
                </div>

                <Link to="/">
                    Já tenho uma conta
                </Link>               
            </Form>
        </Container>
    )
}

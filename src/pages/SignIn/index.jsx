import { Container,Form,Div } from './styles';
import polygonImage from '../../assets/Polygon.png';

import {Link} from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignIn(){
    return(
        <Container>

            <Div>
                <div className="content">
                    <img src={polygonImage} alt="imagem de um polígono" />
                    <p>food explorer</p>
                </div>
            </Div>


            <Form>
                <h1>Faça login</h1>
                


                <div>
                    <label htmlFor="email">Email:</label>
                    <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    id="email"
                    />
                </div>



                <div>
                    <label htmlFor="password">Senha:</label>
                    <Input
                    placeholder="No mínimo 6 caracteres"
                    type="current-password"
                    id="password"
                    />
                </div>    

                <Button title="Entrar"/>
                <Link to="/register">
                    Criar uma conta
                </Link>
                    
                
            </Form>

            

        </Container>
    )
}

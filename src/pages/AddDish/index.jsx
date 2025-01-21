import { Container,Form } from './styles';
import { DesktopHeader } from '../../components/DesktopHeader';
import { MobileHeader } from '../../components/MobileHeader'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import UploadSimple from '../../assets/UploadSimple.svg';
import {Link} from 'react-router-dom'
import { Footer } from '../../components/Footer'
import CaretLeft from '../../assets/CaretLeft.svg';

export function AddDish(){
    return(
        <Container>
            <div className="header-mobile">
                <MobileHeader />
            </div>
            <div className="header-desktop">
                <DesktopHeader />
            </div>

            <Link to="/">
                <img src={CaretLeft} alt="imagem de uma seta apontando para esquerda" />
                Voltar
            </Link>                        
            
            <Form>                    
                <header>
                    <h1 className='adicionarPrato'>Adicionar prato</h1>
                    <h1 className='novoPrato'>Novo prato</h1>
                </header>                        

                <div className="imagem-salada-categoria">
                    <div className='uploadSimple'>
                        <div className='image'>
                            <label className='prato'>Imagem do prato </label>
                            <img src={UploadSimple} alt="ícone de upload" />
                            <p className='selecione-imagem'>selecione imagem</p>
                            <label htmlFor="file-upload" className='file'>
                                <input type='file' id='file-upload'/>
                            </label>                            
                        </div>
                    </div>
                       

                    <div className="inputs">
                        <div className='nome'>
                            <label htmlFor="nome">Nome</label>
                            <input placeholder="Ex.: Salada Ceasar" id="nome"/>
                        </div>
                        <div className="dados">
                            <label htmlFor="categoria">Categoria</label>
                            <select id="categoria">
                                <option value="live">Refeição</option>
                                <option value="podcast">Sobremesa</option>
                                <option value="mentorship">Bebida</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="ingredientes-preco">
                        <Section>
                            <label                              htmlFor="ingredientes">Ingredientes</label>
                            <div className='tags'>
                                <NoteItem  placeholder="Pão Naan"/>
                                <NoteItem isnew placeholder="Adicionar"/>
                            </div>
                        </Section>
                    </div>
                    
                    <div className='preco'>
                        <label htmlFor="preco">Preço</label>
                        <input placeholder="R$ 00,00" id="preco"/>
                    </div>
                </div>

                <div className="descricao">
                    <label htmlFor="descricao">Descrição</label>
                    <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" id="descricao"/>
                </div>

                <div className="buttons">
                    <button>Salvar alterações</button>
                </div>
            </Form>      
            
                        
            <Footer/>           
        </Container>
    )
}
    
    
    


              
    
    

                

                        
            




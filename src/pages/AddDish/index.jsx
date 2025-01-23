import { Container,Form } from './styles';
import { DesktopHeader } from '../../components/DesktopHeader';
import { MobileHeader } from '../../components/MobileHeader'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import UploadSimple from '../../assets/UploadSimple.svg';
import {Link} from 'react-router-dom'
import { Footer } from '../../components/Footer'
import CaretLeft from '../../assets/CaretLeft.svg';
import { SideMenu } from '../../components/SideMenu';
import {useState } from "react";

export function AddDish(){

     const [menuIsOpen,setMenuIsOpen] = useState(false);
    return(
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                isAdmin={true}
            />

            <div className="header-mobile">
                <MobileHeader onOpenMenu={()=> setMenuIsOpen(true)}  />
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
                    <h1 className='addDish'>Adicionar prato</h1>
                    <h1 className='newDish'>Novo prato</h1>
                </header>                        

                <div className="image-salad-category">
                    <div className='uploadSimple'>
                        <div className='image'>
                            <label className='dish'>Imagem do prato </label>
                            <img src={UploadSimple} alt="ícone de upload" className='img-upload-simple'/>
                            <p className='select-image'>selecione imagem</p>
                            <label htmlFor="file-upload" className='file'>
                                <input type='file' id='file-upload'/>
                            </label>                            
                        </div>
                    </div>
                       

                    <div className="inputs">
                        <div className='name'>
                            <label htmlFor="name">Nome</label>
                            <input placeholder="Ex.: Salada Ceasar" id="name"/>
                        </div>
                        <div className="data">
                            <label htmlFor="category">Categoria</label>
                            <select id="category">
                                <option value="meal">Refeição</option>
                                <option value="Dessert">Sobremesa</option>
                                <option value="Drink">Bebida</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="ingredients-price">
                        <Section>
                            <label htmlFor="ingredients">Ingredientes</label>
                            <div className='tags'>
                                <NoteItem  placeholder="Pão Naan"/>
                                <NoteItem isnew placeholder="Adicionar"/>
                            </div>
                        </Section>
                    </div>
                    
                    <div className='price'>
                        <label htmlFor="price">Preço</label>
                        <input placeholder="R$ 00,00" id="price"/>
                    </div>
                </div>

                <div className="description">
                    <label htmlFor="description">Descrição</label>
                    <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" id="description"/>
                </div>

                <div className="buttons">
                    <button>Salvar alterações</button>
                </div>
            </Form>      
            
                        
            <Footer/>           
        </Container>
    )
}
    
    
    


              
    
    

                

                        
            




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

export function EditDish(){
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
                    <h1 className='newDish'>Editar prato</h1>
                </header>                        

                <div className="image-salad-category">
                    <div className='uploadSimple'>
                        <div className='image'>
                            <label className='dish'>Imagem do prato </label>
                            <label htmlFor="file-upload" className='label-upload-simple'>
                                <img src={UploadSimple} 
                                    alt="ícone de upload" 
                                    className='file'
                                />
                                <p className='select-image'>selecione imagem</p>
                            </label>                            
                            <input 
                                type='file'
                                id='file-upload'
                                // onChange={handleChangeImage}
                            />
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
                    <Textarea placeholder="A Salada César é uma opção refrescante para o verão." id="description"/>
                </div>

                <div className='buttons'>
                    <div className="remove">
                        <button>Excluir prato</button>
                    </div>
                    <div className="saveChanges">
                        <button>Salvar alterações</button>
                    </div>
                </div>
            </Form>      
            
                        
            <Footer/>           
        </Container>
    )
}
    
    
    


              
    
    

                

                        
            




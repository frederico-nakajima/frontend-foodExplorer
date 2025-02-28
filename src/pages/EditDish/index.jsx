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
import { useState, useEffect } from 'react'
import {api} from "../../services/api";
import { useParams } from 'react-router-dom';


export function EditDish(){
    const [menuIsOpen,setMenuIsOpen] = useState(false);
    const [data, setData] = useState(null);
    const params = useParams();


    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    

    useEffect(() => {
        async function fetchDish(){
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
        }

        fetchDish();
    },[params.id]);

       useEffect(() => {
        if (data) {
            setName(data.name || "");
            setCategory(data.category || "");
            setPrice(data.price || "");
            setDescription(data.description || "");
        }
    }, [data]);


     
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
                            <input 
                                placeholder="Ex.: Salada Ceasar" 
                                id="name"
                                value={name}   
                                onChange = {e => setName(e.target.value)}
                            />
                        </div>
                        <div className="data">
                            <label htmlFor="category">Categoria</label>
                            <select 
                                id="category"
                                value={category}  // 🔹 Mantém o select sincronizado
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="Refeições">Refeições</option>
                                <option value="Sobremesas">Sobremesas</option>
                                <option value="Bebidas">Bebidas</option>
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
                        <input 
                            placeholder="R$ 00,00"
                            id="price"
                            value={price}  // 🔹 Mantém o input sincronizado
                            onChange={(e) => setPrice(e.target.value)}
                         
                         />
                    </div>
                </div>

                <div className="description">
                    <label htmlFor="description">Descrição</label>
                    <Textarea 
                        placeholder="A Salada César é uma opção refrescante para o verão." 
                        id="description"
                        value={description}  
                        onChange={(e) => setDescription(e.target.value)} 
                    />
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
    
    
    


              
    
    

                

                        
            




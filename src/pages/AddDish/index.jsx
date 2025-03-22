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
import  { api }  from '../../services/api';
import { useNavigate} from 'react-router-dom';

export function AddDish(){
    const [menuIsOpen,setMenuIsOpen] = useState(false);      
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Refeições");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");   
    const [imageFile, setImageFile] = useState(null);
    
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }    
    async function handleNewItem(){
        if(!name){
            return alert("Digite o nome do item");
        }
        if(!price){
            return alert("Digite o preço");
        }
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clickou em adicionar ");
        }
        
        const response =await api.post("/dishes", {
            name,
            category,
            tags,
            price,
            description
        });
        const dish_id = response.data.id;        
        if(imageFile){
            const fileUploadForm = new FormData();
            fileUploadForm.append("image", imageFile);

            await api.patch(`/dishes/image/${dish_id}`, fileUploadForm);          
            
        }        
        alert("Item criado com sucesso!");
        navigate('/');
    }

    function handleChangeImage(event) {
        const file = event.target.files[0];  
        setImageFile(file);
    }    

    return(
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                isAdmin={true}
            />

            <div className="header-mobile">
                <MobileHeader onOpenMenu={()=> setMenuIsOpen(true)}/>
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
                    <p className='dish'>Imagem do prato </p>
                    <div className='uploadSimple'>
                        <div className='image'>
                            <label
                                htmlFor="file-upload" 
                            >
                                <img 
                                    src={UploadSimple} 
                                    alt="ícone de upload" 
                                />
                                <p className='select-image'>selecione imagem</p>
                            </label>                            
                            <input 
                                type='file'
                                id='file-upload'
                                onChange={handleChangeImage}
                            />
                        </div>
                    </div>
                    <div className="inputs">
                        <div className='name'>
                            <label htmlFor="name">Nome</label>
                            <input placeholder="Ex.: Salada Ceasar"  onChange = {e => setName(e.target.value)}/>
                        </div>
                        <div className="data">
                            <label htmlFor="category">Categoria</label>
                            <select  id="category" value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="Refeições">Refeições</option>
                                <option value="Sobremesas">Sobremesas</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="ingredients">
                        <Section title='Ingredientes'>
                            <div className='tags'>
                                {
                                    tags.map(tag => (
                                        <NoteItem
                                            key={tag}
                                            value= {tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    ))
                                }
                                <NoteItem 
                                    isnew 
                                    placeholder="Adicionar"
                                    onChange={e => setNewTag(e.target.value)}
                                    value={ newTag }
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Section>
                    </div>                    
                    <div className='price'>
                        <label htmlFor="price">Preço</label>
                        <input 
                            placeholder="R$ 00,00"
                            onChange = {e => setPrice(e.target.value)}                                                         
                        />
                    </div>
                </div>
                <div className="description">
                    <label htmlFor="description">Descrição</label>
                    <Textarea 
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"  
                        onChange = {e => setDescription(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <button type='button' onClick={handleNewItem}>Salvar alterações</button>
                </div>
            </Form>

            <Footer/>           
        </Container>
    )
}
    
    
    


              
    
    

                

                        
            




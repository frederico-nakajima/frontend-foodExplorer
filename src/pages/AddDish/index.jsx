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
import { useAuth  } from "../../hooks/auth";
import Spaguetti from "../../assets/Spaguetti.png"


export function AddDish(){
    const [menuIsOpen,setMenuIsOpen] = useState(false);
    const { user, updateProfile } = useAuth();
    
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const imageUrl = user.image ? `${api.defaults.baseURL}/files/${user.image}` : Spaguetti;
    const [ image,setImage ] = useState(imageUrl);

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
        if(price){
            return alert("Digite o preço");
        }
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clickou em adicionar ");
        }     

        await api.post("/item", {
            name,
            category,
            tags,
            price,
            description
        });
        alert("Item criada com sucesso!");
        navigate(-1);
    }



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
                            <input placeholder="Ex.: Salada Ceasar"  onChange = {e => setName(e.target.value)}/>
                        </div>
                        <div className="data">
                            <label htmlFor="category">Categoria</label>
                            <select  id="category" value={category} onChange={e => setCategory(e.target.value)}>
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
                                {
                                    tags.map((tag, index) => (
                                        <NoteItem
                                            key={String(index)}
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
                        onChange = {e => setDescription(e.target.value)}/>
                </div>

                <div className="buttons">
                    <button onClick= {handleNewItem}>Salvar alterações</button>
                </div>
            </Form>

            <Footer/>           
        </Container>
    )
}
    
    
    


              
    
    

                

                        
            




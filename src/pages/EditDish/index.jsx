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
import { useNavigate} from 'react-router-dom';

export function EditDish(){
    const [menuIsOpen,setMenuIsOpen] = useState(false);
    const [data, setData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [imageFile, setImageFile] = useState(null);
    
    
    
    
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    } 
    
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }
    
    async function handleDeleteDish() {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este prato?");
        
        if (confirmDelete) {
            try {
                await api.delete(`/dishes/${params.id}`);                  
                setData(null);
                setName("");
                setCategory("");
                setPrice("");
                setDescription("");
                setTags([]);
                
                alert("Prato excluído com sucesso!");
                navigate("/"); 
            } catch (error) {
                console.error("Erro ao excluir o prato:", error);
                alert("Erro ao excluir o prato. Tente novamente.");
            }
        }
    }
    
    async function handleUpdateDish() {
        const confirmUpdate = window.confirm("Deseja realmente salvar as alterações deste prato?");
        
        if (confirmUpdate) {
            try {
                const updatedDish = {
                    name,
                    category,
                    price,
                    description,
                    tags 
                };
                
                await api.put(`/dishes/${params.id}`, updatedDish);
                alert("Prato atualizado com sucesso!");
                navigate("/");
            } catch (error) {
                console.error("Erro ao atualizar o prato:", error);
                alert("Erro ao salvar alterações. Tente novamente.");
            }
        }
    }
    
    useEffect(() => {
        async function fetchDish(){
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
        }
        
        fetchDish();
    },[params.id]);
    
    useEffect(() => {
        if (data) {
            setName(data.name);
            setCategory(data.category);
            setPrice(data.price);
            setDescription(data.description);
            setTags(data.tags);
        }
    }, [data]);
    
    
    // async function handleChangeImage(event) {
    //     const file = event.target.files[0]; // Obtém o primeiro arquivo selecionado
    
    //     if (!file) {
    //         alert("Nenhuma imagem selecionada.");
    //         return;
    //     }
    
    //     const formData = new FormData();
    //     formData.append("image", file); // Adiciona a imagem ao FormData
    
    //     try {
    //         const response = await api.patch(`/dishes/image/${dish_id}`, formData, {
    //             headers: { "Content-Type": "multipart/form-data" }
    //         });
    
    //         alert("Imagem atualizada com sucesso!");
    //     } catch (error) {
    //         console.error("Erro ao atualizar imagem:", error);
    //         alert("Erro ao atualizar imagem. Tente novamente.");
    //     }
    // }
    
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
                                value={category}  
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
                                {
                                    tags.map((tag, index) => (
                                        <NoteItem
                                            key={String(tag.id)}
                                            value= {tag.name}
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
                            id="price"
                            value={price}  
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
                        <button type='button' onClick={handleDeleteDish}>Excluir prato</button>
                    </div>
                    <div className="saveChanges">
                        <button type='button' onClick={handleUpdateDish}>Salvar alterações</button>
                    </div>
                </div>
            </Form>           
                        
            <Footer/>           
        </Container>
    )
}
    
    
    


              
    
    

                

                        
            




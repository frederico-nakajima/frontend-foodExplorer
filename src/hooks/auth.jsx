import { createContext, useContext, useEffect } from "react";
import { api } from '../services/api';
import { useState } from 'react';

export const AuthContext = createContext({});


function AuthProvider({ children }){
    const [data,setData] = useState({});

    async  function signIn({ email, password }){

        try{
            const response = await api.post("sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
            setData({ user, token }) 

        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível entrar.");
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@foodexplorer:token");
        localStorage.removeItem("@foodexplorer:user");
        setData({});

    }

    async function updateImage({ user, imageFile }){      

        try {
            if(imageFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("image", imageFile);

                const response = await api.patch("/users/image", fileUploadForm);
                user.image = response.data.image;
            }
            await api.put("/users", user);
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            setData({ user, token: data.token});
            alert("Perfil atualizado!");
            
        } catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível atualizar o perfil.");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;

            setData({
                token,
                user:JSON.parse(user)
            });
        }
    },[]);


    return(
        <AuthContext.Provider value = {{ 
            signIn,
            signOut,
            updateImage,
             user:data.user,
              }}
              >
            {children}
        </AuthContext.Provider>
    )
}
        
   

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
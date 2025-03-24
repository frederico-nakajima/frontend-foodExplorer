import axios from "axios";


export const api = axios.create({
    baseURL:"https://backend-foodexplorer-wy0h.onrender.com",
    withCredentials: true
});
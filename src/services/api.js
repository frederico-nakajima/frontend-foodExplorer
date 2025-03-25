import axios from "axios";


export const api = axios.create({
    baseURL:"https://backend-foodexplorer-z0oj.onrender.com",
    withCredentials: true
});
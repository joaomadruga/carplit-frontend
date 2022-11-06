import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://carplit-backend.herokuapp.com/',
    //baseURL: 'https://carplit-backend.up.railway.app/',
    baseURL: 'https://carplit-backend.vercel.app/',
});

export default api;
import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://carplit-backend.herokuapp.com/',
    baseURL: 'https://carplit-backend.up.railway.app/',
});

export default api;
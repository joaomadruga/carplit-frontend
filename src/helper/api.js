import axios from 'axios';

const api = axios.create({
    baseURL: 'https://carplit-backend.herokuapp.com/',
});

export default api;
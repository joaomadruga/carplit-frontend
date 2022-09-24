
import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://carplit-backend.herokuapp.com/',
    baseURL: 'https://9e29-143-208-129-42.sa.ngrok.io/',
    
    //headers: {'Authorization': 'id'}
});

export default api;

import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://carplit-backend.herokuapp.com/',
    baseURL: 'https://carplit-backend.herokuapp.com/',
    
    //headers: {'Authorization': 'id'}
});

export default api;
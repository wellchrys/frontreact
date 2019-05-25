import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apicomnode.herokuapp.com',
    
});

export default api;
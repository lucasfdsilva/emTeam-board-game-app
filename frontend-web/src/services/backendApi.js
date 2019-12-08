import axios from 'axios';

const backendApi = axios.create({
    baseURL: 'http://localhost:5000',
});

export default backendApi;
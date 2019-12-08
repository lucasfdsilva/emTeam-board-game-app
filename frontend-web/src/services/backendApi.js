import axios from 'axios';

const backendApi = axios.create({
    baseURL: 'http://apiboardgeek.co.uk',
});

export default backendApi;
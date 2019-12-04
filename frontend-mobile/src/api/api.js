import axios from 'axios';

const api = axios.create({
	baseURL: 'http://3.248.36.112:5000',
});

export default api;
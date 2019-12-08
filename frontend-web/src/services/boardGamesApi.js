import axios from 'axios';

const boardGamesApi = axios.create({
    baseURL: 'https://www.boardgameatlas.com/api',
});

export default boardGamesApi;
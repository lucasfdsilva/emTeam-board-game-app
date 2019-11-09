import axios from 'axios';

export default axios.create({
baseURL: 'https://www.boardgameatlas.com/api',
//headers: {Authorization: 'Bearer 23b99d229116d921f2e280292dd51021'}
});

//search?order_by=popularity&categories=KUBCKBkGxV&client_id=xF8M9tTYVD
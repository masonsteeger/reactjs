import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-2cb05-default-rtdb.firebaseio.com/'
});

export default instance
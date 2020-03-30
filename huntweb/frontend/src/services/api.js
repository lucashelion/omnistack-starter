import axios from 'axios';

//const url_api = 'https://rocketseat-noda.herokuapp.com/api';
const url_api = 'http://localhost:3001/api';

const api = axios.create({ baseURL: url_api });

export default api;
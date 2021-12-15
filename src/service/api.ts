import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apicepheus.leandroguezinjunior.com',
});

export default api;

import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3000',
  baseURL: 'http://192.168.1.99:3333',
});

export { api };

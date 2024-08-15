import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.example.com',
  params: {
    limit: 5,
    language: 'es',

  }

})

export default searchApi;
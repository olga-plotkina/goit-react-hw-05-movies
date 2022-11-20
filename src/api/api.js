import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '7d3bca08f8a690c3623c76013972de57',
  },
});

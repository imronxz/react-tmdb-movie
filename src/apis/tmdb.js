import axios from 'axios';

const API_KEY = 'd6648e6ca4b936ae2cab5db7c68f0466';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;

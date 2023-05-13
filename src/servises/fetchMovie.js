import axios from 'axios';
const API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const fetchMovies = async url => {
  const data = await axios(`${BASE_URL}${url}api_key=${API_KEY}`);
  return data.data;
};

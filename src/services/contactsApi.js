import axios from 'axios';
axios.defaults.baseURL = 'https://6408b13c8ee73db92e48bca1.mockapi.io';

export async function fetchAPI() {
  try {
    const response = await axios.get(`/contacts`);
    return response;
  } catch (error) {
    console.error('getTrendingFilms error' + error);
  }
}

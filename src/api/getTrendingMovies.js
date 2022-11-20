import Notiflix from 'notiflix';
import { api } from './api';

export const getTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/day', {
      params: {
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};

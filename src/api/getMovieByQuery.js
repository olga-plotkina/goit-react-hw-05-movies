import Notiflix from 'notiflix';
import { api } from './api';

export const getMovieByQuery = async query => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        page: 1,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};

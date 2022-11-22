import Notiflix from 'notiflix';
import { api } from './api';

export const getMovieCredits = async id => {
  try {
    const response = await api.get(`/movie/${id}/credits`);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};

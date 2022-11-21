import Notiflix from 'notiflix';
import { api } from './api';

export const getMovieById = async id => {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};

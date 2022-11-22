import Notiflix from 'notiflix';
import { api } from './api';

export const getMovieReviews = async id => {
  try {
    const response = await api.get(`/movie/${id}/reviews`);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};

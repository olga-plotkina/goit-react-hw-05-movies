import { getTrendingMovies } from 'api/getTrendingMovies';
import { TrendingList } from 'components/TrendingList';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useState } from 'react';

export const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await getTrendingMovies();
        setArrayOfMovies(movies);
      } catch (error) {
        Notiflix.Notify.failure(error);
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>

      <TrendingList movies={arrayOfMovies}></TrendingList>
    </main>
  );
};

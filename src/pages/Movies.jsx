import { getMovieByQuery } from 'api/getMovieByQuery';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { TrendingList } from 'components/TrendingList';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useState } from 'react';

export const Movies = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState([]);
  //   const [searchString, setSearchString] = useState('');
  const [searchString, setSearchString] = useSearchParams();
  const movieName = searchString.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    async function getMovies() {
      try {
        const movies = await getMovieByQuery(movieName);
        setArrayOfMovies(movies);
      } catch (error) {
        Notiflix.Notify.failure(error);
      }
    }
    getMovies();
  }, [movieName]);
  const handleSubmit = info => {
    if (movieName === info) {
      return;
    }
    const nextString = info !== '' ? { query: info } : {};
    setSearchString(nextString);
    setArrayOfMovies([]);
  };
  return (
    <main>
      <SearchForm submitProp={handleSubmit}></SearchForm>
      {arrayOfMovies.length > 0 && (
        <TrendingList movies={arrayOfMovies}></TrendingList>
      )}
      {arrayOfMovies.length === 0 && searchString.length > 0 && (
        <div>Nothing has found</div>
      )}
    </main>
  );
};

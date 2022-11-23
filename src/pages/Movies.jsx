import { getMovieByQuery } from 'api/getMovieByQuery';
import { SearchForm } from 'components/SearchForm';
import { TrendingList } from 'components/TrendingList';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useState } from 'react';

export const Movies = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (searchString === '') {
      return;
    }
    async function getMovies() {
      try {
        const movies = await getMovieByQuery(searchString);
        setArrayOfMovies(movies);
      } catch (error) {
        Notiflix.Notify.failure(error);
      }
    }
    getMovies();
  }, [searchString]);
  const handleSubmit = info => {
    if (searchString === info.search.toLowerCase()) {
      return;
    }
    setSearchString(info.search.toLowerCase());
    setArrayOfMovies([]);
  };
  return (
    <main>
      <SearchForm submitProp={handleSubmit}></SearchForm>
      <TrendingList movies={arrayOfMovies}></TrendingList>
    </main>
  );
};

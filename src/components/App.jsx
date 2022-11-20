import { getTrendingMovies } from 'api/getTrendingMovies';

export const App = () => {
  const data = getTrendingMovies();

  console.log(data);

  return <div>re</div>;
};

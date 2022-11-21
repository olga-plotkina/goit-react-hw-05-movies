import { useParams } from 'react-router-dom';
import { getMovieById } from 'api/getMovieById';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(getMovieById(movieId));
  return <div>Now showing product-{movieId} </div>;
};

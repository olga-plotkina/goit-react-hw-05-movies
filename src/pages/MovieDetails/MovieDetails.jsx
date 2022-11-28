import Notiflix from 'notiflix';
import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'api/getMovieById';
import { Link, Outlet } from 'react-router-dom';
import {
  MovieInformation,
  MovieCard,
  AdditionalInfo,
  BackButton,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieGenres, setMovieGenres] = useState('');
  const [poster, setPoster] = useState(
    'https://media.istockphoto.com/vectors/cat-sits-in-a-box-with-a-404-sign-page-or-file-not-found-connection-vector-id1278808623?k=20&m=1278808623&s=612x612&w=0&h=tmzYgVK5yF-dtVvW81zz-Ebpeqd6EvD38KYGRjczuiw='
  );
  const [userScore, setUserScore] = useState('0');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const movie = await getMovieById(movieId);
        setMovieInfo(movie);
        setMovieGenres(movie.genres.map(genre => genre.name).join(', '));
        setPoster(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
        setUserScore(`${(movie.vote_average * 10).toFixed(0)}%`);
      } catch (error) {
        Notiflix.Notify.failure(error);
      }
    }
    getMovieInfo();
  }, [movieId]);

  return (
    <main>
      <BackButton to={backLinkHref}>Go back</BackButton>
      <MovieInformation>
        <img src={poster} alt="King" />
        <MovieCard>
          <h2>{movieInfo.title}</h2>
          <span>User score: {userScore}</span>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          {movieGenres && <p>{movieGenres}</p>}
        </MovieCard>
      </MovieInformation>
      <AdditionalInfo>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </AdditionalInfo>
      <Outlet />
    </main>
  );
};

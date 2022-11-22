import { getMovieCredits } from 'api/getMovieCredits';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastComponent } from './Cast.styled';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    async function getCastInfo(prop) {
      const response = await getMovieCredits(prop);

      setCastInfo(response.cast);
    }
    getCastInfo(movieId);
  }, [movieId]);
  return (
    <CastComponent>
      {castInfo.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
          />
          <h4>{cast.name}</h4>
          Character: {cast.character}
        </li>
      ))}
    </CastComponent>
  );
};

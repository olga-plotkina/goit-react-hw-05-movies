import { getMovieCredits } from 'api/getMovieCredits';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function getCastInfo(prop) {
      const response = await getMovieCredits(prop);
      console.log(response);
      setCastInfo(response.cast);
    }
    getCastInfo(movieId);
  }, [movieId]);
  return (
    <ul>
      {castInfo.map(cast => (
        <li>{cast.name}</li>
      ))}
    </ul>
  );
};

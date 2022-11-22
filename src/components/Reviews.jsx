import { getMovieReviews } from 'api/getMovieReviews';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviewInfo, setReviewInfo] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function getReviewInfo(prop) {
      const response = await getMovieReviews(prop);
      console.log(response);
      setReviewInfo(response.results);
    }
    getReviewInfo(movieId);
  }, [movieId]);
  return (
    <ul>
      {reviewInfo.map(review => (
        <li>{review.author}</li>
      ))}
    </ul>
  );
};

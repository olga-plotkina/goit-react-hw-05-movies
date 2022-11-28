import { getMovieReviews } from 'api/getMovieReviews';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
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
      {reviewInfo.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
      {reviewInfo.length > 0 &&
        reviewInfo.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3> {review.content}
          </li>
        ))}
    </ul>
  );
};

export default Reviews;

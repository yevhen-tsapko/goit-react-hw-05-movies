import { fetchMovies } from 'servises/fetchMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchMovies(`movie/${id}/reviews?`).then(movieReviews => {
      setReviews(movieReviews.results);
    });
  }, [id]);
  return reviews.length === 0 ? (
    <p>We don't have any reviewes for this movie</p>
  ) : (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h3>Autor: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'servises/fetchMovie';
import { SectionTitle } from './MoviesList.styled';
import PropTypes from 'prop-types';
const MoviesList = ({ additionalUrl, sectionTitle }) => {
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchMovies(additionalUrl).then(data => {
      setMoviesList(data.results);
    });
  }, [additionalUrl]);
  return (
    <section>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <ul>
        {moviesList.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

MoviesList.propTypes = {
  additionalUrl: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string,
};
export default MoviesList;

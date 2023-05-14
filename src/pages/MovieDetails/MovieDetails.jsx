import { Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { fetchMovies } from 'servises/fetchMovie';
import { Poster, Info, AdditionalInfo } from './MovieDetails.styled';
const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const transformData = ({
    title,
    release_date,
    overview,
    genres,
    poster_path,
    vote_average,
  }) => {
    const year = release_date.slice(0, 4) || 'Year is unknown';
    const userScore = Math.round(vote_average * 10);
    const genresList = genres.map(genre => genre.name).join(', ');
    const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return { title, year, userScore, overview, posterPath, genresList };
  };
  useEffect(() => {
    fetchMovies(`movie/${id}?`).then(data => {
      setMovieDetail(transformData(data));
    });
  }, [id]);
  const { title, year, userScore, overview, posterPath, genresList } =
    movieDetail;
  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <Info>
        <Poster src={posterPath} alt="poster"></Poster>
        <div>
          <h2>
            {title} ({year})
          </h2>
          <p> user score: {userScore}%</p>
          <h3>Overview </h3>
          <p> {overview} </p>
          <h3>Genres</h3>
          <p> {genresList} </p>
        </div>
      </Info>
      <AdditionalInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;

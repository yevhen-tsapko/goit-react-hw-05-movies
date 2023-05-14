import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayot';
import { lazy } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reveiws'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const trendingUrl = 'trending/movie/week?';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <MoviesList
                additionalUrl={trendingUrl}
                sectionTitle={`Trending today`}
              />
            }
          ></Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

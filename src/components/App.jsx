import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayot';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reveiws';
import { MoviesList } from 'components/MoviesList/MoviesList';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
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

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const updateSearchQueryString = newQuery => {
    const query = newQuery !== '' ? newQuery : {};
    setSearchParams({ query });
  };
  const queryValue = searchParams.get('query') ?? '';
  return (
    <div>
      <SearchBox onSubmit={updateSearchQueryString}></SearchBox>
      <MoviesList additionalUrl={`search/movie?query=${queryValue}&`} />
    </div>
  );
};
export default Movies;

import { fetchMovies } from 'servises/fetchMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Profile } from './Cast.styled';
export const Cast = () => {
  const [cast, setCast] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchMovies(`movie/${id}/credits?`).then(({ cast }) => {
      setCast(cast);
    });
  }, [id]);

  return (
    cast && (
      <ul>
        {cast.map(({ id, profile_path, name, character }) => {
          const profilePath = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : `http://dummyimage.com/240x360/99cccc.jpg&text=Foto+of+${name}`;
          return (
            <li key={id}>
              <Profile src={profilePath} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};

import { Outlet } from 'react-router-dom';
import { Container, Navigation, StyledLink } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </header>
      <Suspense>
        {' '}
        <Outlet />
      </Suspense>
    </Container>
  );
};

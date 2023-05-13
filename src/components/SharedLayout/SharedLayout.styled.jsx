import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  margin: 0;
  padding: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
  gap: 15px;
  padding: 10px;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

import { Outlet, Link } from 'react-router-dom';
import { Container, Header } from './App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

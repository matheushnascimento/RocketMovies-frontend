import { Container, Brand } from "./styles";

import { Profile } from "../Profile";

export function Header({ children }) {
  return (
    <Container>
      <Brand>RocketMovies</Brand>
      {children}
      <Profile />
    </Container>
  );
}

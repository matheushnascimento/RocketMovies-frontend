import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container } from "./styles";

export function Profile() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleToProfile() {
    navigate("/profile");
  }
  return (
    <Container>
      <div>
        <span onClick={handleToProfile}>{user.name}</span>{" "}
        <a onClick={handleSignOut}>sair</a>
      </div>
      <img src={avatarUrl} alt="Foto do usuário" onClick={handleToProfile} />
    </Container>
  );
}

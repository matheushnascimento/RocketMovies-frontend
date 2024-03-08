import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import { api } from "../../services/api";

export function Preview() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await api.get(`/notes/${params.id}`);
        setData(res.data);
      } catch (error) {
        if (error.message || error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível trazer o filme");
        }
      }
    }

    fetchNotes();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <a onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </a>
          <h1>
            {data.title} <Rating value={data.rating} />
          </h1>
          <span className="author_info">
            <img className="author" src={avatarUrl} alt="Imagem do Author" />{" "}
            Por {user.name}
            <FiClock /> {data.created_at}
          </span>
          {data.tags && (
            <div>
              {data.tags.map(tag => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </div>
          )}
          <p>{data.description}</p>
        </main>
      )}
    </Container>
  );
}

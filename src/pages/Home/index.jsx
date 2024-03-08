import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

import { Container, NewMovie } from "./styles";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleToCreate() {
    navigate("/create");
  }

  function handlePreview(note) {
    navigate(`/preview/${note}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const res = await api.get(`/notes?title=${search}`);
      setNotes(res.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar por título"
          onChange={e => setSearch(e.target.value)}
        />
      </Header>

      <main>
        <Section title="Meus filmes">
          <NewMovie onClick={handleToCreate}>
            <FiPlus />
            Novo Filme
          </NewMovie>

          {notes.map(note => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handlePreview(note.id)}
            />
          ))}
        </Section>
      </main>
    </Container>
  );
}

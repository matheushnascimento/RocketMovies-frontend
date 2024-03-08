import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TagItem } from "../../components/TagItem";
import { Section } from "../../components/Section";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function Create() {
  const [title, setTitle] = useState([]);
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleNewTag() {
    setTags(prevState => [...tags, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function handleNewMovie() {
    if (!title) {
      return alert("Dê um título ao filme");
    }
    if (!rating) {
      return alert("Dê uma nota ao filme");
    }
    if (newTag) {
      return alert("Você está deixando um marcador não salvo para trás!");
    }

    api.post("/notes", { title, description, rating, tags });

    alert("Filme criada com sucesso");
    handleBack();
  }

  return (
    <Container>
      <Header />

      <main>
        <a onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </a>

        <h2>Novo filme</h2>

        <Form>
          <div className="input-wrapper">
            <Input
              type="text"
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Sua Nota de (0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <TagItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <TagItem
                $isnew
                placeholder="Novo Marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleNewTag}
              />
            </div>
          </Section>

          <Button className="delete-movie" title="Excluir filme" />
          <Button title="Salvar Alterações" onClick={handleNewMovie} />
        </Form>
      </main>
    </Container>
  );
}

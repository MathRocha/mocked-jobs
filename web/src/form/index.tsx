import axios from "axios";
import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router";
import { maxLength, minLength } from "../consts/lengths";

function Form() {
  const [texto, setTexto] = useState<string>("");
  const navigate = useNavigate();

  async function criarJob() {
    if (texto.length < minLength) {
      alert("Texto não pode ser vazio");
      return;
    }

    if (texto.length > maxLength) {
      alert(`Texto não pode ter mais que ${maxLength} caracteres`);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/jobs", {
        texto,
      });

      alert(`Job "${response.data.id}" criado com sucesso!`);
      navigate("/busca");
    } catch (error) {
      alert("Erro ao criar Job");
    }
  }

  return (
    <>
      <form className="criar-form">
        <textarea
          minLength={minLength}
          maxLength={maxLength}
          placeholder="Texto do Job"
          rows={5}
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
        />

        <button type="button" onClick={criarJob}>
          Criar Job
        </button>
      </form>
    </>
  );
}

export default Form;

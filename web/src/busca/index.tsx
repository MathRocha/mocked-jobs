import axios from "axios";
import { useState } from "react";
import "./index.css";
import { maxLength, minLength } from "../consts/lengths";
import { Link } from "react-router";
import type { Job } from "../interfaces/job";

function Busca() {
  const [busca, setBusca] = useState("");
  const [job, setJob] = useState<Job>();

  async function buscarJob() {
    if (busca.length < minLength) {
      alert("Texto não pode ser vazio");
      return;
    }

    if (busca.length > maxLength) {
      alert(`Texto não pode ter mais que ${maxLength} caracteres`);
      return;
    }

    try {
      setJob(null);
      const response = await axios.get(
        `http://localhost:3000/jobs/${busca}`,
        {},
      );

      setJob(response.data);
    } catch (error) {
      alert("Erro ao encontrar job");
    }
  }

  return (
    <>
      <Link to="/">Criar novo Job</Link>

      <form className="busca-form">
        <input
          placeholder="Digite o id do Job que deseja procurar"
          maxLength={maxLength}
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
        />
        <button type="button" onClick={buscarJob}>
          Buscar Job
        </button>
      </form>

      {job ? (
        <div className="job-div">
          <p>Id: {job.id}</p>
          <p>Texto: {job.text}</p>
          <p>Staus: {job.status}</p>
          <p>Criado em: {new Date(job.createdAt).toLocaleString()}</p>
          <p>Atualizado em: {new Date(job.updatedAt).toLocaleString()}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Busca;

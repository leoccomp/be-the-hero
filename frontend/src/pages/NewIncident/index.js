import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";

export default function NewIncident() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const ong_id = localStorage.getItem("ongId");
  const history = useHistory();

  async function handleNovoIncidente(e) {
    e.preventDefault();

    const data = {
      titulo,
      descricao,
      valor,
    };
    try {
      await api.post("incidents", data, {
        headers: {
          authorization: ong_id,
        },
      });
      history.push("/profile");
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente!");
    }
  }

  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logo} alt="bethehero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNovoIncidente}>
          <input
            placeholder="Titulo do caso"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            placeholder="Valor em R$"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

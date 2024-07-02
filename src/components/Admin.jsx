import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPencil, FaTrashCan } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./CrudUsuarios.css";

export default function CrudUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [operacao, setOperacao] = useState("");

  const url = "https://backend-unifei-omega.vercel.app/Clientes/";
  // const url = "http://localhost:3001/Clientes/";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setUsuarios(response.data))
      .catch((err) => console.log(err));
  }, []);

  function novosDados() {
    setOperacao("criarRegistro");
  }
  function limparDados() {
    setId("");
    setNome("");
    setEmail("");
    setTelefone("");
    setIdade("");
    setExperiencia("");
    setOperacao("");
  }
  function editarDados(cod) {
    let usuario = usuarios.find((item) => item.id === cod);
    const { id, nome, email, telefone, idade, experiencia } = usuario;
    setOperacao("editarRegistro");
    setId(id);
    setNome(nome);
    setEmail(email);
    setTelefone(telefone);
    setIdade(idade);
    setExperiencia(experiencia);
  }
  function apagarDados(cod) {
    axios
      .delete(url + cod)
      .then(() => setUsuarios(usuarios.filter((item) => item.id !== cod)))
      .catch((erro) => console.log(erro));
  }
  function gravarDados() {
    if (nome !== "" && email !== "" && telefone !== "" && idade !== "") {
      if (operacao === "criarRegistro") {
        axios
          .post(url, {
            nome: nome,
            email: email,
            telefone: telefone,
            idade: idade,
            experiencia: experiencia,
          })
          .then((response) => atualizaListaComNovoUsuario(response))
          .catch((err) => console.log(err));
      } else if (operacao === "editarRegistro") {
        axios
          .put(url + id, {
            id: id,
            nome: nome,
            email: email,
            telefone: telefone,
            idade: idade,
            experiencia: experiencia,
          })
          .then((response) => atualizaListaUsuarioEditado(response))
          .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }
  function atualizaListaUsuarioEditado(response) {
    if (response.status === 202) {
      const index = usuarios.findIndex((item) => item.id === id);
      let users = [...usuarios];
      users[index] = {
        ...users[index],
        nome: nome,
        email: email,
        telefone: telefone,
        idade: idade,
        experiencia: experiencia,
      };
      setUsuarios(users);
      limparDados();
    } else {
      console.log("Problema com edição: ", response.status);
    }
  }
  function atualizaListaComNovoUsuario(response) {
    let { id, nome, email, telefone, idade, experiencia } = response.data;
    let obj = { id: id, nome: nome, email: email, telefone: telefone, idade: idade, experiencia: experiencia };
    let users = [...usuarios, obj];
    setUsuarios(users);
    limparDados();
  }

  return (
    <div className="container mt-3">
      <button className="btn btn-primary mb-3" onClick={() => novosDados()}>
        Novo
      </button>

      <div className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-12">
          <select
            value={experiencia}
            onChange={(e) => setExperiencia(e.target.value)}
            className="form-control"
          >
            <option value="">Teve experiência com a língua?</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2" onClick={() => limparDados()}>
          Cancelar
        </button>
        <button className="btn btn-success" onClick={() => gravarDados()}>
          Gravar
        </button>
      </div>

      <div className="table-responsive mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Idade</th>
              <th>Experiência</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.idade}</td>
                <td>{item.experiencia}</td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-primary me-2" onClick={() => editarDados(item.id)}>
                      <FaPencil /> Editar
                    </button>
                    <button className="btn btn-danger" onClick={() => apagarDados(item.id)}>
                      <FaTrashCan /> Remover
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPencil, FaTrashCan } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./PaginaPrincipal.css";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>Nome do Seu Site de Aulas de Inglês</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Aprenda inglês de forma interativa e prática com nosso site de aulas particulares. Conecte-se com professores experientes e alcance a fluência que você sempre quis!" />
        <meta name="keywords" content="aulas de inglês, professor particular, inglês online, aprender inglês, fluência em inglês, conversação em inglês" />
        <meta name="author" content="Seu Nome" /> 
        <meta name="robots" content="index, follow" /> 
        <meta property="og:title" content="Nome do Seu Site de Aulas de Inglês" />
        <meta property="og:description" content="Descrição concisa e chamativa do seu site e dos benefícios que ele oferece." />
        <meta property="og:image" content="URL da imagem de capa do seu site" />
        <meta property="og:url" content="URL do seu site" /> 
      </Helmet>

      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/imagem3.jpg" className="d-block w-100" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Você consegue!!!</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/imagem5.jpg" className="d-block w-100" alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block">
                   
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/imagem6.jpg" className="d-block w-100" alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block">
                    
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="card text-card">
          <div className="card-body">
            <h5 className="card-title">A Importância de Aprender a Língua Inglesa</h5>
            <p className="card-text">Aprender inglês é essencial no mundo globalizado de hoje. Ele abre portas para oportunidades de trabalho, facilita a comunicação em viagens e é a língua dominante na internet e na literatura científica. Dominar o inglês permite o acesso a uma vasta gama de informações e recursos, além de melhorar a capacidade cognitiva e as habilidades de comunicação.</p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="card text-card">
          <div className="card-body">
            <h5 className="card-title">Nossos professores:</h5>
          </div>
        </div>

      <div className="container mt-3 card-group-container">
        <div className="card-group">
          <div className="card custom-card">
            <img className="card-img-top" src="/imagem.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Todes Menezes</h5>
              <p className="card-text">8 anos de experiencia no exterior, e fala demais e em tom alto</p>
              <p className="card-text"><small className="text-muted">Atualizado a 2 horas atrás</small></p>
            </div>
          </div>
          <div className="card custom-card">
            <img className="card-img-top" src="/imagem4.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Fiel</h5>
              <p className="card-text">Nativo do USA e anos de experiencia com com alunos brasileiros.</p>
              <p className="card-text"><small className="text-muted">Atualizado a 2 horas atrás</small></p>
            </div>
          </div>
          <div className="card custom-card">
            <img className="card-img-top" src="/imagemFred.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Fredelas</h5>
              <p className="card-text">Anos de experiências com as linguas e seu ponto forte é o linguajar (curto e grosso).</p>
              <p className="card-text"><small className="text-muted">Atualizado a 2 horas atrás</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className="container mt-3">
        <div className="card text-card">
          <div className="card-body">
            <h5 className="card-title">Faça seu cadastro!</h5>
            <p className="card-text">Logo abaixo estarão os campos para você se inscrever na nossa escola de ingles. Você nao irá se arrepender!</p>
          </div>
        </div>

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
              <option value="">Teve experiência com Inglês?</option>
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
      </div>
      </div>

    </>
  );
}

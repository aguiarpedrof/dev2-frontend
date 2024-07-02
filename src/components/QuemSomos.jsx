import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectDescription() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Projeto de Desenvolvimento Web</h1>
              <p className="card-text">
                Este trabalho foi desenvolvido para a matéria de Desenvolvimento Web, onde a ideia foi sugerida pelo meu professor de inglês. O objetivo do projeto é criar um site que oferece aulas particulares de inglês, proporcionando uma plataforma interativa e fácil de usar para os usuários.
              </p>
              <p className="card-text">
                O projeto inclui uma interface de usuário desenvolvida em React, utilizando componentes modernos e práticas recomendadas para garantir uma experiência de usuário responsiva e eficiente. A integração com o backend é feita através de uma API hospedada no Vercel, que gerencia um banco de dados com informações dos usuários, como email, nome, telefone, idade e experiência com a língua.
              </p>
              <p className="card-text">
                A utilização do Bootstrap para o design responsivo permite que o site se adapte a diferentes tamanhos de tela, proporcionando uma experiência de navegação consistente em dispositivos móveis, tablets e desktops. Este projeto não apenas aprimora minhas habilidades em desenvolvimento web, mas também combina conhecimentos de inglês e programação de uma forma prática e aplicável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './localizacao.css';

export default function LocationPage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h1>Localização da Nossa Escola de Inglês</h1>
          <p>Encontre-nos no coração da cidade, perto da Universidade Federal de Itajubá - UNIFEI.</p>
          <address>
            <strong>Mago English</strong><br />
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Irmã+Ivone+Drumond%2C+200+-+Distrito+Industrial+II%2C+Itabira+-+MG%2C+35903-087" target="_blank" rel="noopener noreferrer">
              Rua Irmã Ivone Drumond, 200 - Distrito Industrial II, <br />
              Itabira - MG, 35903-087
            </a><br />
            <a href="tel:+553536291100">
              <abbr title="Telefone">Tel:</abbr> (35) 3629-1100
            </a>
          </address>
        </div>
        <div className="col-lg-6">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15027.930636951634!2d-43.20376719999999!3d-19.67074518909132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5a0d5ee5ffa5f%3A0x492daa791fcc7f52!2sUniversidade%20Federal%20de%20Itajub%C3%A1%20-%20UNIFEI%20-%20Campus%20Theodomiro%20Carneiro%20Santiago!5e0!3m2!1spt-BR!2sbr!4v1719930735522!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Menu() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MagoEnglish</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/QuemSomos">Quem Somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Localizacao">Localização</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

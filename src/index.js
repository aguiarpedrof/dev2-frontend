import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrudUsuarios from "./components/CrudUsuarios";
import Menu from "./components/Menu";
import QuemSomos from "./components/QuemSomos";
import PaginaPrincipal from "./components/PaginaPrincipal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Localizacao from "./components/Localizacao";
import Admin from "./components/Admin";

import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="usuarios" element={<CrudUsuarios />} />
      <Route path="quemSomos" element={<QuemSomos />} />
      <Route path="paginaPrincipal" element={<PaginaPrincipal />} />
      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      <Route path="localizacao" element={<Localizacao />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrudUsuarios from "./components/CrudUsuarios";
import Menu from "./components/Menu";
import QuemSomos from "./components/QuemSomos";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="usuarios" element={<CrudUsuarios />} />
      <Route path="quemsomos" element={<QuemSomos />} />
    </Routes>
  </BrowserRouter>
);

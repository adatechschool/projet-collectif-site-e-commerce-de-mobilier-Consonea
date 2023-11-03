import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailsArticle from "./pages/DetailsArticle";
import AdminInterface from "./pages/AdminInterface";
import LoginAdmin from "./pages/LoginAdmin";
import UserInterface from "./pages/UserInterface";
import LoginRegistration from "./pages/LoginRegistration";

//création racine du document html qu'on retrouve dans le dossier public sur index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
//BrowserRouter : composant de React-router-dom qui permet de naviguer d'une url à une autre de manière dynamique
//à l'intérieur on crée toutes les urls qui seront utiles dans le projet et que l'on retrouvera dans le dossier pages
//on appelle le composant App qui est le composant React de base
root.render(
  <BrowserRouter>
    <App className='App'/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<DetailsArticle />} />
      <Route path="/admininterface" element={<AdminInterface />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
      <Route path="/login" element={<LoginRegistration />} />
      <Route path="/profile" element={<UserInterface />} />
    </Routes>
  </BrowserRouter>
);

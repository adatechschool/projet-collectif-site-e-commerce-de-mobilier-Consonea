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
import Basket from "./components/Basket";

const root = ReactDOM.createRoot(document.getElementById("root"));
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

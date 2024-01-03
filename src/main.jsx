import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Exp from "./components/Exp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Nav />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="threeD" element={<Exp />} />
    </Routes>
  </BrowserRouter>
);

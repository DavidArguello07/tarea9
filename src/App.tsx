import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Formulario } from "./Components/Formulario";
import Pokedex from "./Components/Pokedex";
import Toolkit from "./Components/Toolkit";
import Poke from "./Components/Poke";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Pokedex
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Formulario">
                      Formulario
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Toolkit">
                      Toolkit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="principal">
              <Pokedex />
            </div>
          }
        />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/Toolkit" element={<Toolkit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

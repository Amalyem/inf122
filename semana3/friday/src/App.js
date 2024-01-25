import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Registro from "./component/Registro";
import Perfil from "./component/Perfil";
import Galeria from"./component/Galeria";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

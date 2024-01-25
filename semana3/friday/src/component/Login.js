import React from "react";
import Boton from "./Boton";
import "../styles/Login.css";

function Login() {
  const click = (x) => {
    console.log(x);
  };
  return (
    <div className="main">
      <div className="padre">
        <label className="etiqueta">Usuario:</label>
        <input className="input"  placeholder="Ingresar usuario " />

        <label className="etiqueta">Contraseña:</label>
        <input className="input"   placeholder="Ingresar contraseña" />

        <div className="buttons">
          <Boton functionClick={() => click("Login")} text="Login" />
          <Boton funClick={() => click("Ingresar")} text="Ingresar" />
          
        </div>
      </div>
    </div>
  );
}
export default Login;

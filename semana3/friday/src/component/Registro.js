import React from "react";
import Boton from "./Boton";
function Registro() {
  const click = (x) => {
    console.log(x);
  };
  return (
    <div className="main">
      <div className="container">
        <label className="etiqueta">Usuario :</label>
        <input placeholder="Ingresar Usuario"></input>

        <label className="etiqueta">Apellido:</label>
        <input placeholder="Ingresar Apellido : "></input>

        <label className="etiqueta" >Contraseña</label>
        <input  type="password"     placeholder="Ingresar contraseña: "></input>

        <div className="buttons">
          <Boton functionClick={() => click("Registrar")} text="Registrar" />
        </div>
      </div>
    </div>
  );
}
export default Registro;

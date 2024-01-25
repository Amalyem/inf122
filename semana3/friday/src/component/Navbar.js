import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <na>
        <ul>
          <li>
            <Link to="/"> Inicio </Link>
          </li>
          <li> 
            <Link to="/login">Login</Link>{" "}
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li> 
            <Link to="/perfil"> Perfil</Link>{" "}
          </li>
        </ul>
      </na>
      <Outlet/>
    </>
  );
}
export default Navbar;

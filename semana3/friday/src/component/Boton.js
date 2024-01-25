import React from'react';
function Boton({texto,  funcionClick}){
  
    return( 
         <button  className="boton" onClick={funcionClick}>{texto}</button>
    );
}
export default Boton;
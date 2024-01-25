import React from 'react';
function Boton(texto, esBotonClick){
    return(
        <button className={esBotonClick?"boton-click"} ></button>
    );
}
export default Boton;
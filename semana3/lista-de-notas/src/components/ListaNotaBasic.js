import React,{useState} from "react";  
import NotaBasic from "./NotaBasic";
import '../ListaNotaBasic.css'; 
function ListaNotaBasic() {
    const [notas, setNotas]=useState([])
    const  addNota=()=>{
        console.log("Agregar Nota");
    };
    const onDelete = ()=>{
        console.log("Eliminar");
    };
    const onEdit=()=>{
        console.log("Editar");
    }
    return(
        <div className="contenedor-principal">
            <input className="input" type="text" value ={}/>
            <button className="boton"  onClick={onEdit}>Agregar Nota</button>
        </div>
    );
}  
export default ListaNotaBasic;
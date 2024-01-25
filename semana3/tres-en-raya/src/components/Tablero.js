import React from 'react';
import '../styles/Tablero.css';
import Cuadro from './Cuadro';
 
function Tablero({cuadros,onClick}){
     
    function renderizarCuadro(i){
        return(
            <Cuadro
            valor={cuadros[i]}
            funcion={()=>onClick(i)}
            />
        );
    } /*
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        if (cuadrosTemp[i] === null) {
            cuadrosTemp[i] = jugador;
            setCuadros(cuadrosTemp);
            setJugador(jugador === "X" ? "O" : "X");
        }
        if (calcularGanador(cuadrosTemp) !== null) {
            alert("Ganador: " + calcularGanador(cuadrosTemp));
            setCuadros(Array(9).fill(null));
        }
    }*/
    return (
        <div >
            <div className="tablero">
                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
   
}
export default Tablero;

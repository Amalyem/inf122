import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import{useState} from "react";
 

function App() {
  const [nroClicks,setNumClicks]=useState(0);
  const [show,setShow]=useState(true);
  const mostrar=()=>{}
  /*
  const click =()=>{
    setNumClicks(nroClicks+1);
    console.log("click")
  }
  const reiniciar=()=>{
    setNumClicks(0);
    console.log("Reiniciar")}
      
          <Boton texto="Click" esBotonClick={true}
            funcionClick={clickMenos} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />*/

    const clickMenos3=()=>{
    setNumClicks(nroClicks-3);
    console.log("click")

  }
  
  const clickMas3=()=>{
    setNumClicks(nroClicks+3);
    console.log("click")

  }
  
  const clickMenos1=()=>{
    setNumClicks(nroClicks-1);
    console.log("click")

  }
  const clickMas1=()=>{
    setNumClicks(nroClicks+1);
    console.log("click")

  }
  const reiniciar=()=>{
    setNumClicks(0);
    console.log("Reiniciar")
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contenedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={clickMenos3} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={clickMas3} />
           <Boton texto="-1" esBotonClick={true}
            funcionClick={clickMas1} />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={clickMenos1} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
          
           
        </div>
      </div>
    </div>
  );
}

export default App;
import React from "react";
import "../styles/EventoC.css";
function EventoC() {
  return (
    <div className=" card-container">
        <img className="card-image"
        src={require("../images/pypizza.jpeg")}
        alt="Foto del evento" />
        <div className="card-content">  
            <h2 className="card-title">MeetUp 05 -¿Cuando escucho música de Bad Bunny?</h2>
            <p className="card-date">26 de Noviembre del 2022</p>
            <p className="card-state">Online</p>
            <p className="card-subtitle">¿Cuando escucho música de Bad Bunny?</p>
            <p className="card-description">En este MeetUp tendremos la participación de Juan De Dios Santos con una charla super interesante sobre Bad
              Bunny y Machine Learning
              Bad Bunny es un cantante que se está apoderando del mundo y de la música que escucho. Desde 2017, he estado registrando en una base de datos todas las canciones que he reproducido en Spotify. De todas estas canciones, 4000 pertenecen a Bad Bunny. Con toda esta evidencia, me pregunté ¿Cuándo escucho su música? En esta charla explicaré cómo contesté esta pregunta utilizando Python, visualización de datos, machine learning, y series temporales</p>
      </div>
    </div>
    
  );
}
export default EventoC;
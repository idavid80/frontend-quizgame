import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import Clasificacion from "../../acciones/clasificacion";

function FinPartida(props) {
  const resultado = props.puntuacion * 100 / props.indicePregunta
  

  return (
    <div className="w-auto2 h-screen" style={{ backgroundImage: `url("media/fondo2.jpg")` }}>
      <br></br><br></br>
      <div className=" bg-bluegray-100 text-center p-4 shadow-4">
      

        <div className="card-container text-center text-3xl font-medium  ">
          {props.puntuacion + "/" + props.indicePregunta} ({resultado} %) preguntas acertadas
        </div>
        <br></br>
        <Button className="p-button-raised block shadow-8 bg-yellow-500 font-bold text-center p-4 border-round w-auto m-auto"
          onClick={() => props.setEsPantallaPrincipal(true)}>
          Jugar de nuevo
        </Button>
      </div>
      <br></br> <br></br>
      <div className="w-full-1 p-4 shadow-8">
        
        <div className="w-full-2 shadow-6  text-center"><h3 id="clasificacion">CLASIFICACIÓN</h3>
          <Clasificacion />
        </div>

      </div>
    </div >
  );
}

export default FinPartida;
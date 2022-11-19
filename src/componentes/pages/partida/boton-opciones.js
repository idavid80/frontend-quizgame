import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useTranslation } from "react-i18next";


export default function Boton(props) {
  const [colorBoton, setColorBoton] = useState("surface-300");
  const { i18n } = useTranslation();


//let indiceBotones = props.pregunta.opciones[i18n.language].indexOf(props.opcion)
 
  //const [seguimiento, setSeguimiento] = useState()

   //let prueba = { id: props.pregunta._id, respuesta: indiceBotones}
  //setSeguimiento(props.pregunta.opciones[i18n.language].indexOf(props.opcion))

  props.jugando.seguimiento.comprobacion.push(props.pregunta.opciones[i18n.language].indexOf(props.opcion))
  
  const url = process.env.REACT_APP_API_URL + "/preguntas/respuesta";
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    

}, []); 

const handleIndicePreguntas = () => {

   const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(props.jugando.seguimiento.pregunta),
  };
  fetch(url, requestOptions)
  .then(response => response.json())
  .then(json => props.setJugando(json)) 
console.log(props.seguimiento)

    if (!props.botonSelecionado) {
      if (props.opcion == props.respuesta) {
        setColorBoton("green-400");
        props.setPuntuacion(props.puntuacion + 1)

      } else {
        setColorBoton("red-400");
      }
      props.setBotonSelecionado(true);

      setTimeout(() => {
        props.setIndicePregunta(props.indicePregunta +1);
        props.setBotonSelecionado(false);

      }, 945)
    }

  };

  return (
    
    <div className="col-12 lg:col-6">
    <Button
      onClick={handleIndicePreguntas}
      id="boton-opcion"
      label={props.opcion}
      className={
        `surface-300 bg-${colorBoton}   font-bold text-center text-blue-600  border-round-2xl p-button-raised m:text-l lg:text-2xl    
        transition-colors transition-duration-500   w-full h-full  border-3 hover:border-blue-900 shadow-8  `
      }
    />
    </div>
    
  );
}

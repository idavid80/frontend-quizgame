import { Button } from "primereact/button";
import React, { useState, useEffect } from "react";
import Pregunta from "./pregunta";

function Preguntas(props) {
  const url = "http://localhost:3050/preguntas/categoria";
  const [preguntas, setPreguntas] = useState([]);
  const [indicePregunta, setIndicePregunta] = useState(0);

  useEffect(() => {
    console.log("preguntas dentro del useeffect", preguntas)
    console.log("entra en el useEffect");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoria: props.categoria }),
    })
      .then((res) => res.json())
      .then((json) => {
        setPreguntas(json)
      });
  },[indicePregunta]);

  if (!preguntas.length){
    return <div>cargando...</div>;
  }
  else{
      return(
        <div>
    <Pregunta pregunta={preguntas[indicePregunta]} setIndicePregunta = {setIndicePregunta} />
    <button onClick={setIndicePregunta[indicePregunta+1]}>hola </button >
    </div>
    )

  }

  
}

export default Preguntas;

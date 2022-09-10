import React, { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Boton from "./boton-opciones";
import Reloj from "./tiempo";
import "./pregunta.css";
import { useTranslation } from "react-i18next";

function Pregunta(props) {
  const { i18n } = useTranslation();
  const respuestaCorrecta = props.pregunta.solucion;
  const respuesta = props.pregunta.opciones[i18n.language][respuestaCorrecta];

  const [botonSelecionado,setBotonSelecionado] = useState(false)


  useEffect(() => {
    const pasarPregunta = setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta + 1);
    }, 20000);
    return () => clearTimeout(pasarPregunta);
  }, [props.indicePregunta]);

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="w-auto bg-cyan-600" id="pregunta">
        <div className="w-auto bg-blue-300 text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3 p-4">
            <h2>{props.pregunta.pregunta[i18n.language]}</h2>
          </div>
          <span className="text-600 font-medium line-height-3">Categoria</span>
        </div>
        <div className="card">
          <Reloj />
          <div className="card-container yellow-container">
            {props.pregunta.opciones[i18n.language].map((opcion) => (
              <Boton
                key={opcion}
                id="boton-opcion"
                opcion={opcion}
                respuesta={respuesta}
                indicePregunta={props.indicePregunta}
                setIndicePregunta={props.setIndicePregunta}
                botonSelecionado={botonSelecionado}
                setBotonSelecionado={setBotonSelecionado}

                
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pregunta;

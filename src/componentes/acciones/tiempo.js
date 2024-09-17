import React from 'react'

 export default function Reloj(props) {

    const display = (digito) => digito.toString().padStart(2, "0");

    return (

        <div className="flex align-items-center justify-content-center card-container blue-container p-0">
            <div className="scalein animation-duration-500 animation-iteration-1 flex align-items-center justify-content-center
            font-bold lg:text-lg surface-300 border-primary border-3 text-blue-600 border-round-xl lg:border-circle m-2 px-5 py-3 lg:w-11rem lg:h-4rem -mt-5 md:-mt-5 lg:m-0  shadow-8" id="crono">0:{display(props.tiempo)} </div>
        </div>
    );
}
import React from "react";
import "../estilos/Testimonio.css"

function Testimonio (props) {

    return(
        <>
            <div className="contenedor-testimonio">

                <img className="img-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} alt="youtuber de fama mundial"/>

                <div className="contenedor-texto">
                    <p className="nombre">{props.nombre}</p>
                    <p className="ocupacion">{props.ocupacion}</p>
                    <p className="testimonio">Hola, yo soy Ernesto y estoy contento con FreeCodeCamp. No se que, no se cuanto, no me interesa demasiado solo estoy probando a ver si esta mierda funciona o si tengo que meter css por todos lados... Okey, parece que si funcionó. Al fin!</p>
                </div>
                
            </div>
        </>
    );

}

export default Testimonio;
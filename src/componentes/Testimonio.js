import React from "react";
import testimonio1 from "../imagenes/testimonio-1.jpg";
import "../estilos/Testimonio.css"

function Testimonio () {

    return(
        <>
            <div className="contenedor-testimonio">

                <img className="img-testimonio" src={testimonio1} alt="youtuber de fama mundial"/>

                <div className="contenedor-texto">
                    <p className="nombre">Ernesto Benedictino</p>
                    <p className="ocupacion">Youtuber de fama mundial</p>
                    <p className="testimonio">Hola, yo soy Ernesto y estoy contento con FreeCodeCamp. No se que, no se cuanto, no me interesa demasiado solo estoy probando a ver si esta mierda funciona o si tengo que meter css por todos lados... Okey, parece que si funcionó. Al fin!</p>
                </div>
                
            </div>
        </>
    );

}

export default Testimonio;
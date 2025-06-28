import { useState, useEffect } from "react";

function CicloDeVida(){

    const [data, setData ]= useState(null);

    useEffect(()=> {

        console.log("componente montado");
        //simulacion de llamada a una api
        const timer = setTimeout(() => {
            setData("Datos Cargados");
        }, 1000);


        //funcion de limpieza
        return()=>{
            clearTimeout(timer);
            console.log("componente desmontado");
        }



    } , []  );

    const handleClick= ()=>{
        setData("Datos Actualizados");
    }

    return(
        <section>
            <h1>{data}</h1>
            <button onClick={handleClick}>Actualizar la variable de estado</button>
        </section>
    )
}


export default CicloDeVida;


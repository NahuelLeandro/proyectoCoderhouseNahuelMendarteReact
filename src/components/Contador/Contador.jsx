
import { useState , useEffect } from "react";

function Counter (){

    const [counter , setCounter] = useState(0);

    const handelAdd = () => setCounter(counter + 1);
    const handelSub = () => setCounter(counter - 1);
    

    useEffect(()=> {
        console.log("lo que sea")

        // 🧹 CLEANUP FUNCTION:
        // Lo que escribas dentro del return de useEffect se ejecuta ANTES de desmontar el componente
        // o ANTES de ejecutar el efecto de nuevo (cuando cambia algo en el array de dependencias).
        // Se usa por ejemplo para limpiar eventos, timers, abortar fetch, etc.
        /*PARA DESMONTAR EL COMPONENTE: lo que se escribe dentro de return es lo que suseda cuando el componente se desmonta, se la conose como clean up function o funcion de limpieza, es la que hace algo cuando el componente se desmonta*/
        return ()=> {
            console.log("se desmonto")
        }


    }, [counter] ) //CAMBIAR DE [] a [counter] para ver las diferencias
    
    // [] -> cuando el array esta vasio el codigo escrito en la funcion se va a ejecutar una sola ves <en el montaje>
    
    // [ X ] -> se va a ejecutar el codigo en el montaje y cuando varie X
    /*esto se usa cuando el componente se actualiza,(para este ej cuando el contador se actualiza) se llama ARRAY DE DEPENDENCIAS, es como que le hace un seguimiento y cada ves que cambie va a actibar de nuevo el efecto, vuelve a ejecutar el codigo. se podrian tener mas de una cosa entre [ a , b , c ]*/

    //Cuando un componente se actualiza es como decir que se desmonta y se vuelve a montar. esto es rereenderizarse

    // 💬 ARRAY DE DEPENDENCIAS:
    // [counter] → el efecto se ejecuta:
    // - 1 vez al montar el componente
    // - cada vez que el valor de counter cambie

    // [] → solo se ejecuta 1 vez al montar (como componentDidMount)

    // Cuando el componente se re-renderiza, React:
    // - ejecuta el efecto (si corresponde por el array de dependencias)
    // - ejecuta la función de limpieza del efecto anterior (si había)
    // - actualiza el DOM según el nuevo estado


    // useEfect SE UTILIZA MUCHO PARA CONECTARSE CON APPIS como hacer peticiones

    return(
        <div>
            <p>{counter}</p>
            <button onClick={handelAdd}>+</button>
            <button onClick={handelSub}>-</button>
        </div>
    )
}

export default Counter;
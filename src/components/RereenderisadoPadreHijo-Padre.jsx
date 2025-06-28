import RereenderisadoPadreHijo_Hijo from "./RereenderisadoPadreHijo_Hijo";
import { useState } from "react";


function RereenderisadoPadreHijo_Padre(){
    const [mensaje, setMensaje] = useState("Hola desde el padre");

    return (
    <div>
        <button onClick={() => setMensaje("Mensaje actualizado")}>
        Cambiar mensaje
        </button>
        <RereenderisadoPadreHijo_Hijo texto={mensaje} />
    </div>
    );
}
export default RereenderisadoPadreHijo_Padre;
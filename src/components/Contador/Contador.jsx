
import { useState , useEffect } from "react";

function Counter (){

    const [counter , setCounter] = useState(0);

    const handelAdd = () => setCounter(counter + 1);
    const handelSub = () => setCounter(counter - 1);
    

    useEffect(()=> {
        console.log("lo que sea")

        return ()=> {
            console.log("se desmonto")
        }


    }, [counter] ) 
    


    return(
        <div>
            <p>{counter}</p>
            <button onClick={handelAdd}>+</button>
            <button onClick={handelSub}>-</button>
        </div>
    )
}

export default Counter;
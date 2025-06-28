import { useState } from "react";

function ButtonCount({ onConfirm, maxQuantity }) {
    const [value, setValue] = useState(0);
    
    const increase = () => {
        if (value < maxQuantity) {
        setValue(prev => prev + 1);
        }
    };
    
    const decrease = () => {
        if (value > 0) {
        setValue(prev => prev - 1);
        }
    };
    
    return (
        <>
        <button onClick={decrease}>-</button>
        <span style={{ margin: "0 10px" }}>{value}</span>
        <button onClick={increase}>+</button>
        <button onClick={() => onConfirm(value)}>Agregar</button>
        </>
    );
}

export default ButtonCount;
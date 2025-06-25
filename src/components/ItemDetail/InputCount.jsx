import { useState } from "react";

function InputCount({ onConfirm, maxQuantity }) {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        const inputValue = parseInt(e.target.value);
        if (!isNaN(inputValue)) {
        setValue(inputValue > maxQuantity ? maxQuantity : inputValue);
        }
    };

    const handleClick = () => {
        onConfirm(value);
    };

    return (
        <>
        <input
            type="number"
            max={maxQuantity}
            min={0}
            value={value}
            onChange={handleChange}
        />
        <input type="button" value="ADD" onClick={handleClick} />
        </>
    );
}

export default InputCount;
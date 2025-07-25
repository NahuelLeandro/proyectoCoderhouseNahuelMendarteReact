import { useState ,useContext } from "react";
import { CartContext } from "../context/CartContext";



function ItemCount ( {item , id} ){

    const [count, setCount] = useState(0);
    const { addToCart } = useContext( CartContext )


    const handleSumar = () => {
        setCount( count + 1);
    }
    const handleRestar = () => {
        if(count <=0){
            return;
        }               
        setCount( count - 1);
    }
    


    /*tengo que evitar que carge el producto si coun esta en 0, y a futuro ponerle un limite por si se pasa del stock*/
    const handleAddToCart = () => {
        if (count === 0){
            return
        } else{
            addToCart({...item , quantity: count , id: id})
            setCount(0)
            // console.log(item)
        } 
    }

    return(
        <div className="ItemCount">
            <p>{count}</p>
            <button onClick={handleSumar}>+</button>
            <button onClick={handleRestar}>-</button>
            <button onClick={handleAddToCart} disabled={ count === 0 }>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;
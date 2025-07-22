import { CartContext } from "../context/CartContext";
import { useState } from "react";



//cart provider es un componente. puede tener estados efectos todo lo que puede tener un componente
function CartProvider ({children}){
    const pepito = "pepito"
    const [ cart, setCart ] = useState([]);
    

    //lo que busca la funcion es que se vallan metiendo los productos al array, tendria que validar antes que el producto este en el carrito
    const addToCart = (product) => {
        setCart( [ ...cart , product ] )
    }

    const getQuantity = () => {
        const quantities = cart.map( prod => prod.quantity )
        const total = quantities.reduce((acc, current) => acc + current , 0 )
        return total
    }

    //para sacar el total en Cart.jsx
    const getTotal = () =>{

    }

    return(//por el value del Provider es por donde se comparte la data que queramos compartir con los children
        <CartContext.Provider value={{ pepito, cart , addToCart , getQuantity }} >
            {children}
        </CartContext.Provider> 
    )
}
export default CartProvider;
import { CartContext } from "./CartContext";
import { useState } from "react";



//cart provider es un componente. puede tener estados efectos todo lo que puede tener un componente
function CartProvider ({children}){

    const [ cart, setCart ] = useState([]);
    

    //lo que busca la funcion es que se vallan metiendo los productos al array, tendria que validar antes que el producto este en el carrito
    const addToCart = (product) => {
        const itemInCart = cart.find(item => item.id === product.id);

        if (itemInCart) {
            // Si el producto ya está en el carrito, sumamos la cantidad
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + product.quantity };
                } else {
                    return item;
                }
            });
            setCart(updatedCart);
        } else {
            // Si no está, lo agregamos
            setCart([...cart, product]);
        }
    };
    //cantidad de productos en el carrito
    const getQuantity = () => {
        const quantities = cart.map( prod => prod.quantity )
        const total = quantities.reduce((acc, current) => acc + current , 0 )
        return total
    }

    //para sacar el total en Cart.jsx
    const getTotal = () =>{
        const precioCadaProducto = cart.map( prod => prod.precio * prod.quantity )
        const total = precioCadaProducto.reduce((acc, current) => acc + current , 0 )
        return total
    }


    const eliminarProducto = (id) =>{
        const carritoActualizado = cart.filter(product => product.id !== id);
        setCart(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCart([]); 
    };


    return(//por el value del Provider es por donde se comparte la data que queramos compartir con los children
        <CartContext.Provider value={{ cart , addToCart , getQuantity , getTotal , eliminarProducto , vaciarCarrito}} >
            {children}
        </CartContext.Provider> 
    )
}
export default CartProvider;
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart () {
    
    const { getTotal , eliminarProducto , vaciarCarrito } = useContext(CartContext)
    const total = getTotal()

    const { cart } = useCart();
    const navigate = useNavigate()




    
    if (cart.length === 0 ){
        return(
            <h2>no tienes productos en el carrito</h2>
        )
    }

    return(
        <div>
            {cart.map( (prod) => (
                <p key={prod.id}>
                    {prod.nombre} x {prod.quantity}
                    
                    <button onClick={() => eliminarProducto(prod.id)} >
                        eliminar producto
                    </button>


                </p>
            ))}

            <h2>Total: ${total}</h2>
            <button onClick={() => navigate("/checkout")} >
                ir al checkout
            </button>
            <button onClick={() => vaciarCarrito() } >
                Eliminar todo el carrito
            </button>
        </div>
    )
}

export default Cart;
import { useCart } from "../providers/useCart";
import { useNavigate } from "react-router";
function Cart () {

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
                    {prod.name} x {prod.quantity}
                    <button>eliminar producto</button>
                </p>
            ))}

            <h2>Total: $10000</h2>
            <button onClick={() => navigate("/checkout")} >
                ir al checkout
            </button>
        </div>
    )
}

export default Cart;
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router";

function CartWidget (){

    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()
    const navigate = useNavigate()
    
    return(
        <button onClick={ () => navigate("/cart") } >
            <FaShoppingCart /> {quantity}
        </button>
    )
}
export default CartWidget;
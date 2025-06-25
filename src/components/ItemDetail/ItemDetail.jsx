import InputCount from "./InputCount";
import ButtonCount from "./ButtonCount";


const ItemDetail = ({ item, inputType = "input" }) => {

    const Count = inputType === "input" ? InputCount : ButtonCount;
    const max = item.max;

    const addToCart = (quantity) => {
        alert(`Agregaste ${quantity} unidades de ${item.title} al carrito.`);
    };

    return (
        <div>
        <h2>Agrega al carrito - {item.title}</h2>
        <Count onConfirm={addToCart} maxQuantity={max} />
        </div>
    );
    };

export default ItemDetail;
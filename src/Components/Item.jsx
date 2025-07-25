import { useNavigate } from "react-router";

function Item ( {item} ){

    const navigate = useNavigate()


    return(
        <div className="Item">
            <h3>{item.nombre}</h3>
            <h4>{item.categoria}</h4>
            <p>{item.descripcion}</p>
            <img src={item.imagen} alt="img" />
            <button
                onClick={() => navigate(`/item/${item.id}`)}
            >
                Ver Mas
            </button>
        </div>
    )
}

export default Item;
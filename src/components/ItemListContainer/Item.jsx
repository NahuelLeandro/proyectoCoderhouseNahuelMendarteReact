import { useNavigate } from "react-router";

function Item ( {item} ){

    const navigate = useNavigate()


    return(
        <div className="Item">
            <h3>{item.name}</h3>
            <h4>{item.category}</h4>
            <p>{item.description}</p>
            <img src={item.image} alt="img" />
            <button
                onClick={() => navigate(`/item/${item.id}`)}
            >
                Ver Mas
            </button>
        </div>
    )
}

export default Item;
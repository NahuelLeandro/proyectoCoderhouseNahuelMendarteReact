import ItemCount from "./ItemCount";
import "../scss/ItemDetailSCSS.scss";


function ItemDetail ( {item , id} ){


    return(
        <div className="ItemDetail" > 
            <img src={item?.imagen} alt={item?.nombre} />
            <h2>{item?.nombre}</h2>
            <p>{item?.descripcion}</p>
            <p>{item?.precio}</p>
            <ItemCount item={item} id={id}/>
        </div>
    )
}
export default ItemDetail;
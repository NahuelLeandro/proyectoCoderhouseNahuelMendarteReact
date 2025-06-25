import Counter from "../Counter/Counter"

function ItemDetail( {item} )
{   
    return  (
        <div>
            <img src={item?.thumbnail} alt={item?.title} />
            <h2>{item?.title}</h2>
            <h3>{item?.category}</h3>
            <h4>{item?.description}</h4>
            <h4>{item?.price}</h4>
            <Counter/>
        </div>
    )
}
export default ItemDetail
import './ItemListContainer_scss.scss'
import { useNavigate } from 'react-router';
function Item ({item}) {
    
    const navigate  = useNavigate()




    return(
        <div className='Item'>
            <img src={item.thumbnail} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.category}</h3>
            <h4>{item.description}</h4>
            <h4>{item.price}</h4>
            <button 
            onClick={() => navigate(`/item/${item.id}`)} >
                Ver Mas
            </button>
        </div>
    )
}

export default Item;
import './ItemListContainer_scss.scss'
import Item from './Item';
function ItemList ({items}) {
    return(
        <div className='ItemList'>
            {items.map(item => <Item key={item.id}  item={item} /> )}
        </div>
    )
}

export default ItemList;
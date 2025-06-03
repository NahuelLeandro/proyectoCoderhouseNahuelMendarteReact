import './ItemListContainer.scss';
function ItemListContainer ({text}){
    return(
        <div className='ItemListContainer'>
            {text}
        </div>
        
    )
}
export default ItemListContainer;
/*se reenderisa debajo de NavBar y como hijo de App. Renderiza un texto que se le es asignado como props*/

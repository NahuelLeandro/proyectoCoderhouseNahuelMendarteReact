import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList.jsx";


function ItemListContainer(){

    const [items, setItems]= useState([])
    const {categoryName} = useParams()



    
    
    useEffect(() => {


        const url = 'https://dummyjson.com/products'
        const urlCategory = `https://dummyjson.com/products/category/${categoryName}`

        fetch( categoryName ? urlCategory : url )
            .then(res => res.json())
            .then(res => setItems(res.products))


    } , [categoryName] )

    return(
        <div className="ItemListContainer">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
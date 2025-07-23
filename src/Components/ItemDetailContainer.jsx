import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getItem } from "../firebase/db";
function ItemDetailContainer (){

    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        // fetch(`https://dummyjson.com/products/${id}`)
        //     .then(res => res.json())
        //     .then( res => setItem(res) )        
        getItem(id).then(res => setItem(res));
    
    }, [id])

    return(
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;
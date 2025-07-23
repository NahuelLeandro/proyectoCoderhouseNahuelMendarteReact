import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.scss';
import { withLog } from "../hoc/withLog";
import { withLoading } from "../hoc/withLoading";
import { useParams } from "react-router";
import { getItems , getItemsByCategory } from "../firebase/db";

// const ItemListWithLog = withLog(ItemList)
const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer (){

    const  [items, setItems]=useState([]);
    const {categoryName} = useParams()
    



    useEffect(() => {
        
        // if(categoryName){
        //     fetch(`https://dummyjson.com/products/category/${categoryName}`)
        //         .then(res => res.json())
        //         .then( res => setItems(res.products) );
        // }else{
        //     fetch('https://dummyjson.com/products')
        //         .then(res => res.json())
        //         .then(res => setItems(res.products))
        // }
        /*
        const url = 'https://dummyjson.com/products'
        const urlCategory = `https://dummyjson.com/products/category/${categoryName}`
        fetch( categoryName ? urlCategory : url )
            .then(res => res.json())
            .then(res => setItems(res.products))
        */

        
        
        if(categoryName){
            getItemsByCategory(categoryName)
                .then(res => setItems(res))
        }else{
            getItems().then(res => setItems(res));
        }



    }, [categoryName])

    return(
        <div className="ItemListContainer">
            <ItemListWithLoading items={items}  />
        </div>
    )
}
export default ItemListContainer;
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
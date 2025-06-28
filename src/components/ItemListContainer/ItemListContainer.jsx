import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
// const productos = [
//     {
//         id: 1,
//         nombre: "Taza de cerámica",
//         categoria: "Hogar",
//         descripcion: "Taza resistente al calor, ideal para café o té.",
//         precio: 1200,
//         imagen: ""
//     },
//     {
//         id: 2,
//         nombre: "Lámpara de escritorio LED",
//         categoria: "Electrónica",
//         descripcion: "Lámpara con brazo flexible y luz regulable.",
//         precio: 4500,
//         imagen: ""
//     },
//     {
//         id: 3,
//         nombre: "Mochila impermeable",
//         categoria: "Accesorios",
//         descripcion: "Mochila con múltiples compartimientos y tela resistente al agua.",
//         precio: 6800,
//         imagen: ""
//     },
//     {
//         id: 4,
//         nombre: "Auriculares inalámbricos",
//         categoria: "Tecnología",
//         descripcion: "Auriculares con Bluetooth y cancelación de ruido.",
//         precio: 8500,
//         imagen: ""
//     },
//     {
//         id: 5,
//         nombre: "Set de pinceles para pintura",
//         categoria: "Arte",
//         descripcion: "10 pinceles de diferentes grosores para acuarela y acrílico.",
//         precio: 1900,
//         imagen: ""
//     },
//     {
//         id: 6,
//         nombre: "Camisa de lino",
//         categoria: "Ropa",
//         descripcion: "Camisa fresca y liviana, perfecta para verano.",
//         precio: 5200,
//         imagen: ""
//     },
//     {
//         id: 7,
//         nombre: "Libro: 'Cien años de soledad'",
//         categoria: "Libros",
//         descripcion: "Edición especial de la obra de Gabriel García Márquez.",
//         precio: 3500,
//         imagen: ""
//     },
//     {
//         id: 8,
//         nombre: "Mouse gamer RGB",
//         categoria: "Tecnología",
//         descripcion: "Mouse con luces LED y alta sensibilidad para gaming.",
//         precio: 4300,
//         imagen: ""
//     },
//     {
//         id: 9,
//         nombre: "Velas aromáticas",
//         categoria: "Decoración",
//         descripcion: "Set de 3 velas con aroma a lavanda, vainilla y sándalo.",
//         precio: 2600,
//         imagen: ""
//     },
//     {
//         id: 10,
//         nombre: "Almohada viscoelástica",
//         categoria: "Hogar",
//         descripcion: "Almohada ergonómica con espuma de memoria.",
//         precio: 5900,
//         imagen: ""
//     }
// ];


function ItemListContainer(){

    const [items, setItems]= useState([])
    const {categoryName} = useParams()



    
    
    useEffect(() => {

        // if(categoryName){
        //     fetch(`https://dummyjson.com/products/category/${categoryName}`)
        //         .then(res => res.json())
        //         .then(res => setItems(res.products));
        // }else {
        //     fetch('https://dummyjson.com/products')
        //         .then(res => res.json())
        //         .then(res => setItems(res.products))
        // }

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
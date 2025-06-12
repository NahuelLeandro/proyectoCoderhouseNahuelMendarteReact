import './ItemListContainer.scss';
import { useState , useEffect } from 'react';
import ItemList from './itemList';

// Array de productos simulando datos que vendrían de una base de datos o API
const productos = [
    { "id": 1, "nombre": "Sandalo", "categoria": "Sahumerios", "precio": 150 },
    { "id": 2, "nombre": "Palo Santo", "categoria": "Sahumerios", "precio": 150 },
    { "id": 3, "nombre": "Champa", "categoria": "Sahumerios", "precio": 200 },
    { "id": 4, "nombre": "Mirra", "categoria": "Sahumerios", "precio": 200 },
    { "id": 5, "nombre": "Incienso", "categoria": "Sahumerios", "precio": 300 },
    { "id": 6, "nombre": "Citronella", "categoria": "Sahumerios", "precio": 250 },

    { "id": 7, "nombre": "Aguamarina", "categoria": "Piedras", "precio": 2200 },
    { "id": 8, "nombre": "Turmalina", "categoria": "Piedras", "precio": 1200 },
    { "id": 9, "nombre": "Cuarzo rosa", "categoria": "Piedras", "precio": 3000 },
    { "id": 10, "nombre": "Granate", "categoria": "Piedras", "precio": 1500 },
    { "id": 11, "nombre": "Alejandrita", "categoria": "Piedras", "precio": 2000 },
    { "id": 12, "nombre": "Citrino", "categoria": "Piedras", "precio": 2300 },

    { "id": 13, "nombre": "Árnica y Caléndula", "categoria": "Cremas", "precio": 800 },
    { "id": 14, "nombre": "Lavanda y Manzanilla", "categoria": "Cremas", "precio": 750 },
    { "id": 15, "nombre": "Rosa Mosqueta", "categoria": "Cremas", "precio": 900 },
    { "id": 16, "nombre": "Sándalo y Patchouli", "categoria": "Cremas", "precio": 750 },
    { "id": 17, "nombre": "Aloe Vera y Menta", "categoria": "Cremas", "precio": 950 },
    { "id": 18, "nombre": "Eucalipto y Romero", "categoria": "Cremas", "precio": 750 }
]


function ItemListContainer (){

    // useState nos permite manejar el estado local de los productos
    // Al inicio está vacío, simulando que aún no se cargaron los datos
    const [items, setItems] = useState([])


    // Función que simula una petición asincrónica a un servidor con setTimeout
    // Devuelve una promesa que resuelve con el array de productos luego de 3 segundos
    const getItems = () => new Promise((resolve, reject) => {
        if ( productos.length > 0 ){
            setTimeout(() => {
                resolve(productos);     
            }, 3000);
        }else{
            reject("no hay productos");
        }
    })





    // useEffect se usa para ejecutar efectos secundarios (peticiones, timers, etc.)
    // Solo se ejecuta una vez cuando se monta el componente gracias al array vacío []
    //siempre que queremos conectarnos a un servicio externo a nuestra aplicacion como una appi tenemos que usar el useEffect
    useEffect(()=> {

        getItems()
            .then(data => setItems(data))// Cuando llegan los datos, actualizamos el estado
            .catch(err => console.log(err));// En caso de error lo mostramos por consola



        /*esta forma estaria mal porque no trabaja de manera asincrona*/
        // const x  = getItems()//me retorna una promesa
        // setItems(x)
    }, [] )// Dependencias vacías → solo se ejecuta una vez al montar el componente


    return(
        <ItemList items={items} />
    )
}
export default ItemListContainer;
/*se reenderisa debajo de NavBar y como hijo de App. Renderiza un texto que se le es asignado como props*/



/*
📝 Este componente se renderiza como hijo de App, por debajo de NavBar.
Recibe texto como props (si lo necesitaras) y se encarga de mostrar productos que se cargan con delay.

🧠 IMPORTANTE:
- `useEffect` se usa para simular una llamada a servidor cuando se monta el componente.
- `useState` guarda los productos que llegan después del timeout.
- `map` se usa para transformar el array de objetos en elementos JSX (<p> en este caso).
- `key={producto.id}` es clave para que React pueda identificar cada elemento de la lista.
*/
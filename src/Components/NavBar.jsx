import { useState ,useEffect } from "react";
import logo from '../media/imagenes/logo.jpg';
import CartWidget from "./CartWidget";
import "./NavBar.scss"
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { getCategoryList } from "../firebase/db";


function NavBar (){

    const [categorias, setCategorias] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        // fetch('https://dummyjson.com/products/category-list')
        //     .then(res => res.json())
        //     .then(res => setCategorias(res))


            getCategoryList().then(res => setCategorias(res))
    } , [] )
    
    const handleChange = (e) => {
        const categoria = e.target.value;
        if (categoria !== "") {
            navigate(`/category/${categoria}`);// Cambia la ruta para que ItemListContainer muestre los productos filtrados
        }
    };


    return(
        <nav className="navBar">
            <img src={logo} alt="Logo" />
            <h1>Emunah</h1>
            
            <select onChange={handleChange} defaultValue="">
                <option value="" disabled>Elegí una categoría</option>
                {categorias.map((categoria, index) => (
                    <option key={index} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>
            <CartWidget/>
        </nav>
    )
}
export default NavBar;
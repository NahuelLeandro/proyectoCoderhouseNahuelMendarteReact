import logo from '../media/imagenes/logo.jpg'
import './CartWidget'
import CartWidget from './CartWidget';
function NavBar (){
    return(
        <nav>
            <img src={logo} alt="logo"/>
            <h1>Emunah</h1>
            <ul>
                <li>Saumerios</li>
                <li>Cremas</li>
                <li>Piedras</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar;
/*Muestra el brandnane de la tienda en NavBar. 
Muestra las categorias de los productos. 
Muestra el CartWidget*/
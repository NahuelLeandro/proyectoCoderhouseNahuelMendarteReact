import logo from '../../media/imagenes/logo.jpg'   
import CartWidget from '../CartWidget/CartWidget.jsx';
import './NavBar.scss';

function NavBar (){
    return(
        <nav className ="navBar">
            <img src={logo} alt="logo"/>
            <h1>Emunah Espacio Olistico</h1>
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
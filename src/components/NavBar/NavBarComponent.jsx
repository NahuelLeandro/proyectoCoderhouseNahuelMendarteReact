import { useEffect, useState } from 'react';
import logo from '../../media/imagenes/logo.jpg';

import './NavBar.scss';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router';

function NavBarComponent() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                {/* Logo + título */}
                <Navbar.Brand href="#home">
                <img src={logo} alt="logo" height={40} className="me-2" />
                Emunah Espacio Holistico
                </Navbar.Brand>

                {/* Botón de colapsado para móviles */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Contenido colapsable */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        {categories.map((cat, index) => (
                            <NavDropdown.Item as={Link} to={`/category/${cat}`} key={cat}>
                                {cat}
                            </NavDropdown.Item>
                            // <Link to={`/category/${cat}`}>{cat}</Link>
                        ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;


        // <nav className ="navBar">
        //     <img src={logo} alt="logo"/>
        //     <h1>Emunah Espacio Olistico</h1>

        //     <select>
        //         <option  >Categorías</option>
        //         {categories.map((category, index) => (
        //         <option key={index} value={category}>
        //             {<Link to={`/category/${category}`}>{category}</Link>}
        //         </option>
        //         ))}
        //     </select>
            
        // </nav>
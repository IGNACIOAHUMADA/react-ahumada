import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css';
import logo from'./imagen-logo/loguito.svg'


function NavBar(props) {
    return (
        <nav className='navbar navbar-light' >
        <div>
            <ul className="nav">
                <img className='img' src={logo} alt="logo de la empresa " />
                <a href="#">Home</a>
                <a href="#">Sobre nosotros</a>
                <a href="#">Nuestros prodcutos</a>
                <a href="#">Sucursales</a>
                <a href="#">Contacto</a>
            </ul>
                <CartWidget />
            
        </div>
        </nav>
    );
}

export default NavBar;
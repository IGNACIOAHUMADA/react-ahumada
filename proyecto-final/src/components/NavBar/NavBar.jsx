import React from 'react';
import './NavBar.css';
import logo from'./imagen-logo/logo.jpg'


function NavBar(props) {
    return (
        <div className='nav'>
            <ul className="navBar">
                <img className='img' src={logo} alt="logo de la empresa " />
                <a href="#">Home</a>
                <a href="#">Sobre nosotros</a>
                <a href="#">Nuestros prodcutos</a>
                <a href="#">Sucursales</a>
                <a href="#">Contacto</a>

            </ul>
        </div>
    );
}

export default NavBar;
import React from 'react';
import icono from './icono/icono-carrito.png';
import './cart.css'

const CartWidget = () => {
    return (

        <a className='cart' href='/'><img src={icono} alt="carrito" /></a>

    )
}

export default CartWidget;
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './item-list.css'

function ItemListContainer ({greeting}){
  function carrito(){
    console.log('AGREGADO AL CARRITO ')
  }
  return(
    <div className='containerBoton'>
      <ItemCount initail={0} stock= {10} onAdd={carrito}/>
    </div>
  )
}

export default ItemListContainer;
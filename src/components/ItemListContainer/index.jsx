import React, { useEffect, useState } from 'react'
import ItemList from '../Item/item'
import ItemCount from '../ItemCount/ItemCount'
import './item-list.css'
import getData from '../../datos/datosProductos'


function ItemListContainer ({greeting}){
  function carrito(){
    console.log('AGREGADO AL CARRITO ')
  }
  const[products, setProducts]= useState([])
  console.log("Products before promise", products)
  useEffect(()=>{
    getData.then((resolve)=> console.log('respuesta'))
  },[])
  return(
    <>
    <div className='containerBoton'>
      <ItemCount initail={0} stock= {10} onAdd={carrito}/>
    </div>
    <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer;
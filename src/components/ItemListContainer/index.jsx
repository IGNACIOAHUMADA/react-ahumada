import React from 'react'
import './item-list.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container'>{greeting}</div>
  )
}

export default ItemListContainer;
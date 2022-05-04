import ItemList from '../../components/ItemList/ItemList';
import getData from '../../datos/datosProductos';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
const [products, setProducts] = useState([])
useEffect(() => {
  getData
  .then((response) => setProducts(response))
  .catch((error) => console.log("error: ", error))
}, []
)


return (
  <>
    <ItemList products={products}/>
  </>
)
}


export default ItemListContainer;

import Item from "../Item/item";

const ItemList = ({ products }) => {
    return (
        <>
            {products.map((product => {
                return (
                    <Item 
                    key={product.id} 
                    name={product.nombre} 
                    price={product.precio}
                    image={product.imagen}
                    stock={product.stock}
                    quantity={product.cantidad}
                    />
                )
            }))} 
        </>
    )
}
export default ItemList;
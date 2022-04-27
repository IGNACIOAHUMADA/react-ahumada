import React, {useState} from "react";
import './ItemCount.css'

function ItemCount({stock, initail, onAdd}) {
    const [count, setCount] = useState(initail);

    function sumarBoton(){
        if(count < stock){
            setCount(count + 1 )
        }
    }
    
    function restarBoton(){
        if(count > 0){
            setCount(count - 1 )
        }
    }

    return(
        <div className="container-fluid ">
            <div>
                <button class="btn btn-secondary btn-sm" onClick={()=> sumarBoton()}>+</button>
                <input className="d-inline-flex p-2 bd-highlight" readOnly value={count} />
                <button class="btn btn-secondary btn-sm" onClick={()=> restarBoton()}>-</button>
            </div>
            <button className="botonAgregar btn-sm flex-row" onClick={()=>(count <= stock) && onAdd()} >Agregar al carrito</button>

        </div> 

    )
}
export default ItemCount
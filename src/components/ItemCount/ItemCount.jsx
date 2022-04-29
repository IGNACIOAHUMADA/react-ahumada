import React, {useState} from "react";
import './ItemCount.css'
import { Button } from 'react-bootstrap';

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
                <Button variant="dark" onClick={()=> sumarBoton()}>+</Button>
                <input className="d-inline-flex p-2 bd-highlight" readOnly value={count} />
                <Button variant="dark" onClick={()=> restarBoton()}>-</Button>
            </div>
            <Button variant="dark" onClick={()=>(count <= stock) && onAdd()} >Agregar al carrito</Button>
        </div> 

    )
}
export default ItemCount
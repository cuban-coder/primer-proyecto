import React from "react";
import "./Pedido.css";

export const AdicionPedido = (props) => {
  
  if (props.plato.active<1) {
    return (
        <button className="btn btn-danger"  onClick={() => props.aumentarCantidad(props.plato.id,props.plato.active )}>Agregar</button>
    );
  } else
    return (
      <div className="sizesCantidad ">
        <button className="btn btn-primary" onClick={() => props.disminuirCantidad(props.plato.id,props.plato.active )}>-</button>
    <div className="cantidadMas">{props.plato.active}</div>
        <button className="btn btn-danger" onClick={() => props.aumentarCantidad(props.plato.id,props.plato.active )}>+</button>
      </div>
    );
};

export default AdicionPedido;

import React from "react";
import "./Pedido.css";

export const Cantidad = (props) => {
  
  if (props.plato.active<4) {
    return (
      <div className="sizes">
        {props.cards.map((c) => (
          <span
            className={"size " + (props.plato.active === c ? "active" : "")}
            key={c}
            onClick={() => props.handleClick(props.plato.id, c)}
          >
            {c}
          </span>
        ))}

       
      </div>
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

export default Cantidad;

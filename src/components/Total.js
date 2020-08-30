import React from "react";

export default function Total(props) {
  return (
    <div className="fija">
      <h6 className="total"> Total: $ {props.total} cuc </h6>
      <button
        className="btn btn-danger comprar"
        onClick={() => props.insertarPedido()}
      >
        Hacer pedido
      </button>
      <button
        className="btn btn-success cerrar"
        onClick={() => props.cerrarCuenta()}
      >
       Cerrar cuenta
      </button>
    </div>
  );
}


import React from "react";
import "./Pedido.css";

export const Pedido = (props) => (
  <tr>
    <td>{props.indice + 1}</td>
    <td>{props.nombre}</td>
    <td>{props.cantidad}</td>
    <td>${props.precio}</td>
    <td>
      <button
        className="btn btn-danger"
        onClick={() =>
          props.deletePedido(props.id, props.cantidad, props.precio)
        }
      >
        x
      </button>
    </td>
  </tr>
);

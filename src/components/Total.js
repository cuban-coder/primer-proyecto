import React from 'react'

export default function Total(props) {
    return (
        <div className="fija">
              <h6 className="total"> Total: $ {props.total} </h6>
              <button
                className="btn btn-danger comprar"
                onClick={() => props.mostrar()}
              >
                Hacer pedido
              </button>
            </div>
    ) 
}

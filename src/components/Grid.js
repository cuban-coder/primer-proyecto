import React, { useState, useEffect } from "react";
import "./Grid.css";
import axios from "axios";

import { DisponibleWarning, DisponibleImg } from "./Styles/Estilos";

import AdicionPedido from "./AdicionPedido";

function Grid() {
  const [platos, setPlatos] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    getPlatos();
    getCategoria();
  }, []);

  useEffect(() => {
    getTotal();
  });

  /*Funciones*/
  const getPlatos = async () => {
    const res = await axios.get("http://localhost:4000/users");
    setPlatos(res.data);
  };
  const getCategoria = async () => {
    const res = await axios.get("http://localhost:4000/categoria");
    setCategoria(res.data);
  };

  /*Otros metodos*/
  const aumentarCantidad = async (idCard, id) => {
    await setPlatos(
      platos.map((plato) =>
        plato.id === idCard ? { ...plato, active: id + 1 } : plato
      )
    );
  };
  const disminuirCantidad = async (idCard, id) => {
    await setPlatos(
      platos.map((plato) =>
        plato.id === idCard ? { ...plato, active: id - 1 } : plato
      )
    );
  };
  const eliminarPedido = async (idCard) => {
    await setPlatos(
      platos.map((plato) =>
        plato.id === idCard ? { ...plato, active: 0 } : plato
      )
    );
  };
  //Precio total del pedido
  const getTotal = () => {
    var pT = 0;
    for (let i = 0; i < platos.length; i++) {
      if (platos[i].active > 0) pT = platos[i].precio * platos[i].active + pT;
    }
    setTotal(parseFloat(pT).toFixed(2));
  };
  //Hacer pedido
  const hacerPedido = async () => {
    await platos
      .filter((agregado) => agregado.active > 0)
      .map((agregado) =>
          axios.post("http://localhost:4000/temp", {
          id_plato: agregado.id,
          cantidad: agregado.active,
          nombre_cliente: "Margarita",
          cancelado: false,
          done: false,
          numero: 0,
        })
      );
      //limpiar la lista de pedidos 
      await setPlatos(
        platos.map((plato) =>
          plato.active > 0 ? { ...plato, active: 0 } : plato
        )
      );
      alert("LLego la hora")
      
  };

  return (
    <div>
      <div className="grid-container">
        <div className="grid-item platos">
          {platos.map((plato, i) => (
            <div className="platos-item" key={i}>
              <img
                className="plato-img"
                src={plato.image}
                style={DisponibleImg(plato)}
                alt=""
              />
              <h6 className="nombre-plato">{plato.nombre}</h6>
              <div className="precio-agregar">
                <h6 className="nombre-plato">{plato.precio} cuc</h6>

                <AdicionPedido
                  plato={plato}
                  aumentarCantidad={aumentarCantidad}
                  disminuirCantidad={disminuirCantidad}
                />
              </div>
              <div
                className="plato-disponible"
                style={DisponibleWarning(plato)}
              >
                No disponible
              </div>
            </div>
          ))}
        </div>

        <div className="grid-item grid-pedido">
          {platos
            .filter((pedido) => pedido.active > 0)
            .map((pedido, i) => (
              <div className="pedido-item section-pedido-item" key={i}>
                <h6 className="head-nombre ">
                  {pedido.nombre}
                  <button
                    className="btn btn-danger btn-danger-modificado"
                    onClick={() => eliminarPedido(pedido.id)}
                  >
                    X
                  </button>
                </h6>
                <div className="head-precio-cantidad ">
                  <div className="grid-precio">{pedido.active}</div>
                  <div className="grid-precio">{pedido.precio}cuc</div>
                  <div className="grid-precio">
                    {parseFloat(pedido.precio * pedido.active).toFixed(2)}cuc
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="grid-item">
          <h6 className="nombre-categoria">Total: {total} cuc</h6>
        </div>

        <div className="grid-item">
          <button
            className=" btn btn-danger hacer-pedido"
            onClick={() => hacerPedido()}
          >
            Hacer Pedido
          </button>
        </div>

        <div className="grid-item categoria">
          {categoria.map((c, i) => (
            <div className="categoria-plato" key={i}>
              <img className="plato-img-categoria" src={c.image} alt="" />
              <h6 className="nombre-categoria">{c.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grid;

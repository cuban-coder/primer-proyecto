import React, { useState, useEffect } from "react";

import "./Menu.css";

import { Pedido } from "./Pedido";
import Card from "./Card";
import Total from './Total'

import axios from "axios";

function Menu() {
  const [categoria, setCategoria] = useState([]);
  const [platos, setPlatos] = useState([]);
  const [cardSelected, setCardSelected] = useState("plato fuerte");
  const [agregados, setAgregados] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [total, setTotal] = useState(0);
 

  useEffect(() => {
    getCategoria();
    getPlatos();
  }, []);

  useEffect(() => {
   getTotal();
  });


  const getCategoria = async () => {
    const res = await axios.get("http://localhost:4000/categoria");
    setCategoria(res.data);
  };

  const getPlatos = async () => {
    const res = await axios.get("http://localhost:4000/users");
    setPlatos(res.data);
  };

  const changeCard = (name) => {
    setCardSelected(name);
    console.log("cambiando el plato a ", cardSelected);
  };

  const handleClick = async (idCard, id) => {
    await setPlatos(
      platos.map((plato) =>
        plato.id === idCard ? { ...plato, active: id } : plato
      )
    );
    console.log("Aqui van los id", idCard, id);
  };

     const agregarPedido = (plato) => {     
     setAgregados ([ ...agregados, plato]);
  };

  

  const mostrarMas = () => {
    if (!hidden) {
      return {
        width: "480px",
        transition: "1s",
      };
    } else
      return {
        width: "235px",
        transition: "1s",
      };
  };

  const showPedido = () => {
    setHidden(hidden ? false : true);
  };

  const deletePedido =  (id, cantidad, precio) => {
    const pedidos = agregados.filter(agregado => agregado.id!==id)
    setAgregados(pedidos);
  }

  const getTotal = async () => {
    var pT= 0;
    for (let i = 0; i < agregados.length; i++) {
     pT = (agregados[i].precio * agregados[i].active)+pT;
    }
    setTotal(parseFloat(pT).toFixed(2))
  }
   const Ped = () => {
     if (agregados.length!==0)
     return (
      agregados.map((a, i) => (
        <Pedido
          nombre={a.nombre}
          cantidad={a.active}
          precio={a.precio}
          showactive = {a.showactive}
          id={a.id}
          key={i}
          indice={i}
          deletePedido={deletePedido}
        />
      ))
     )
     else 
     return (
       null
     )
   }

   const aumentarCantidad = async (idCard, id) => {
    await setPlatos(
      platos.map((plato) =>
        plato.id === idCard ? { ...plato, active: id+1 } : plato
      )
    );   
   }
   const disminuirCantidad = async (idCard, id) => {
    await setPlatos(
      platos.map((plato) =>
        plato.id === idCard ? { ...plato, active: id-1 } : plato
      )
    );
   }

  

  const insertarPedido = async () => {
    await agregados.map(agregado => 
       axios.post("http://localhost:4000/temp", {
       id_plato: agregado.id,
       cantidad: agregado.active,
       nombre_cliente: "Margarita",
       cancelado: false,
       done: false
      }
    )
      );
    setAgregados([]);
  }


  const cards = [1, 2, 3,4];
  const cardOne = 5;
  return (
    <div>
      <div className="menu-padre">
        <div className="container-menu">
          {categoria.map((c) => (
            <div onClick={() => changeCard(c.name)} className="box " key={c.id}>
              <img src={c.image} alt="" className="image" />
              <h5 className="boxh5">{c.name}</h5>
            </div>
          ))}
        </div>

        <div className="containerPlato">
          <div className="rowPlato">
            {platos
              .filter((plato) => plato.categoria === cardSelected)
              .map((plato) => (
                <Card
                  plato={plato}
                  key={plato.id}
                  handleClick={handleClick}
                  cards={cards}
                  cardOne = {cardOne}
                  agregarPedido={agregarPedido}
                  aumentarCantidad= {aumentarCantidad}
                  mostrarMas = {mostrarMas}
                  
                  disminuirCantidad = {disminuirCantidad}


                />
              ))}
          </div>
        </div>

        <div>
          <div className="pedido" style={mostrarMas()}>
            <table className="table table-striped table-dark table-small table-bordered table-hover posicion">
              <thead className="centrada">
                <tr>
                  <td>
                    <button className="btn btn-secondary" onClick={showPedido}>
                      #
                    </button>
                  </td>
                  <td>nombre</td>
                  <td>cantidad</td>
                  <td>precio</td>
                  <td>eliminar</td>
                </tr>
              </thead>
              <tbody className="centrada">
                <Ped/>
              </tbody>
            </table>

            <Total 
            total= {total}
            insertarPedido= {insertarPedido}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

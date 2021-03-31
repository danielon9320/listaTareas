import React from "react";
import Item from "./Item";

const ListaTareas = (props) => {
  return (
    <ul className="list-group">
      {props.listaTareas.map((tarea, indice) => (
        <Item key={indice} valor={tarea}></Item>
      ))}
    </ul>
  );
};

export default ListaTareas;

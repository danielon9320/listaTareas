import React from "react";

const Item = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {props.valor}
      <button className="btn btn-outline-danger">X</button>
    </li>
  );
};

export default Item;

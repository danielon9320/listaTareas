import React, { Fragment, useState } from "react";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  //useState agrega state a functional components
  //crear state
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  //crear funciones
  /* const guardarTarea = (e) => {
      console.log(e.target.value);
      setTarea(e.target.value);
      console.log(tarea);
  }*/

  const handleSubmit = (e) => {
        e.preventDefault();
        console.log("en el submit");
        let arreglo = tareas;
        arreglo.push(tarea);
        setTareas(arreglo); //tareas = arreglo;
        setTarea ("");
  };

  const borrarTarea = () => {
    
  };

  return (
    <Fragment>
      <div className="container d-flex justify-content-center">
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="form-group d-flex">
            <input
              className="form-control"
              type="text"
              placeholder="Tarea 1"
              onChange={(e) => {
                setTarea(e.target.value);
              }}
              value={tarea}
            ></input>
            <button className="btn btn-outline-light ml-2" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <section className="container w-75 my-5">
      <ListaTareas listaTareas={tareas}></ListaTareas>
      </section>
      
    </Fragment>
  );
};

export default FormularioTarea;

import React, { Fragment, useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  //codigo javascript
  
  let tareaLocal = JSON.parse(localStorage.getItem('prueba'));

  //useState agrega state a functional components
  //crear state
  const [tareas, setTareas] = useState(tareaLocal);
  const [tarea, setTarea] = useState("");
  //ciclo de vida de un componente
  useEffect(()=>{
    if(tareaLocal){
      localStorage.setItem('prueba', JSON.stringify(tareas));
    }else{
      localStorage.setItem('prueba', JSON.stringify([]));
    }
  
  })

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("en el submit");
    let arreglo = tareas;
    arreglo.push(tarea);
    setTareas(arreglo); //tareas = arreglo;
    setTarea("");
  };

  const borrarTarea = (nombre) => {
    console.log(nombre);
    let arregloFiltrado = tareas.filter((elemento) => elemento !== nombre);
    setTareas(arregloFiltrado);
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
        <ListaTareas
          listaTareas={tareas}
          borrarTarea={borrarTarea}
        ></ListaTareas>
      </section>
    </Fragment>
  );
};

export default FormularioTarea;

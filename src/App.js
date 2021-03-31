import React from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import FormularioTarea from "./components/FormularioTarea";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Titulo></Titulo>
      <Subtitulo comision="5D"></Subtitulo>
      <FormularioTarea></FormularioTarea>
    </>
  );
}

export default App;

import React from 'react';

const Subtitulo = (props) => {
    return (
        <div>
            <h4 className="text-center my-4 text-dark">Tareas de la comision {props.comision}</h4>
        </div>
    );
};

export default Subtitulo;
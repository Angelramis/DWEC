import "./Formulario.css";

export default function Formulario() {

    return (
      <>
        <h1 className="titulo">Añadir ciudad</h1>
        <form action="" className="formulario-add-ciudad" method="POST">
          <label htmlFor="nombre-ciudad">Nombre</label>
          <input type="text" name="nombre-ciudad" id="nombre-ciudad"/>

          <label htmlFor="pais-ciudad">País</label>
          <input type="text" name="pais-ciudad" id="pais-ciudad"/>

          <label htmlFor="poblacion-ciudad">Población</label>
          <input type="number" name="poblacion-ciudad" id="poblacion-ciudad"/>

          <button type="submit" className="boton-accion">Crear</button>
        </form>
      </>
    )
  
}



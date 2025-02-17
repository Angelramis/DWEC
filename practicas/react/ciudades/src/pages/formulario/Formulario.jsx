import "./Formulario.css";

export default function Formulario() {

    return (
      <>
         <h1 className="titulo">Añadir ciudad</h1>
        <form className="formulario-add-ciudad">
          <label>Nombre</label>
          <input type="text" name="nombre-ciudad" id="nombre-ciudad"/>

          <label>País</label>
          <input type="text" name="pais-ciudad" id="pais-ciudad"/>

          <label>Población</label>
          <input type="number" name="poblacion-ciudad" id="poblacion-ciudad"/>

          
        </form>
      </>
    )
  
}



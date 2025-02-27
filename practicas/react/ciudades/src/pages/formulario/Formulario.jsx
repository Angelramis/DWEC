import "./Formulario.css";
import { addCiudad } from "../../db/firestore";
import { useState } from "react";

export default function Formulario() {
  // Estados
  let [nombre, setNombre] = useState("");
  let [pais, setPais] = useState("");
  let [poblacion, setPoblacion] = useState("");
  let [imagen, setImagen] = useState("");
  let [atractivos, setAtractivos] = useState("");
  let [cultura, setCultura] = useState("");

  // FUNCIONES
  async function envioFormulario(e) {
    e.preventDefault();

    let ciudad = {
      nombre: nombre,
      pais: pais,
      poblacion: poblacion,
      imagen: imagen,
      atractivos: atractivos,
      cultura: cultura
    };

    // Añadir ciudad a Firebase
    try {
      await addCiudad(ciudad);
      alert("Ciudad añadida.");

      setNombre("");
      setPais("");
      setPoblacion("");
      setImagen("");
      setAtractivos("");
      setCultura("");
    } catch (error) {
      console.log("Error añadiendo la ciudad: ", error);
    }
  }

  // Pasar imagen a formato base64
  function gestionarImagen(e) {
    const file = e.target.files[0]; 

    if (file) {
      const reader = new FileReader();
      // Leer como base64
      reader.readAsDataURL(file);

      // Guardar en estado en base64
      reader.onload = () => {
        setImagen(reader.result);
      };
      reader.onerror = (error) => {
        console.error("Error al convertir imagen a Base64:", error);
      };
    }
  }

    return (
      <>
        <h1 className="titulo">Añadir ciudad</h1>

        <form onSubmit={envioFormulario} className="formulario-add-ciudad">
          <label htmlFor="nombre-ciudad">Nombre</label>
          <input type="text" name="nombre-ciudad" value={nombre} id="nombre-ciudad" onChange={(e) => setNombre(e.target.value)}/>

          <label htmlFor="pais-ciudad">País</label>
          <input type="text" name="pais-ciudad" value={pais} id="pais-ciudad" onChange={(e) => setPais(e.target.value)}/>

          <label htmlFor="poblacion-ciudad">Población</label>
          <input type="number" name="poblacion-ciudad" value={poblacion} id="poblacion-ciudad" onChange={(e) => setPoblacion(e.target.value)}/>

          <label htmlFor="imagen-ciudad">Imagen</label>
          <input type="file" name="imagen-ciudad" accept="image/*" id="imagen-ciudad" onChange={gestionarImagen}/>

          <label htmlFor="atractivos-ciudad">Atractivos turísticos</label>
          <textarea name="atractivos-ciudad" value={atractivos} id="atractivos-ciudad" onChange={(e) => setAtractivos(e.target.value)}/>

          <label htmlFor="cultura-ciudad">Cultura</label>
          <textarea name="cultura-ciudad" value={cultura} id="cultura-ciudad" onChange={(e) => setCultura(e.target.value)}/>

          <button type="submit" className="boton-accion">Crear</button>
        </form>
      </>
    ) 
}
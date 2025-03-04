import { useState, useEffect } from "react";
import { addCiudad, obtenerCiudadPorId, actualizarCiudad } from "../../db/firestore";
import { useParams, useNavigate } from "react-router-dom";
import "./Formulario.css";

export default function Formulario() {
  // Estados
  let { id } = useParams(); // Captura de id en URL
  let navigate = useNavigate();
  let [nombre, setNombre] = useState("");
  let [pais, setPais] = useState("");
  let [poblacion, setPoblacion] = useState("");
  let [imagen, setImagen] = useState("");
  let [atractivos, setAtractivos] = useState("");
  let [cultura, setCultura] = useState("");
  let [editando, setEditando] = useState(false);
  let [error, setError] = useState(""); // Estado para errores

  // FUNCIONES
  useEffect(() => {
    if (id) {
      // Si hay un ID, se edita la ciudad
      setEditando(true);
      async function cargarCiudad() {
        const ciudad = await obtenerCiudadPorId(id);
        if (ciudad) {
          setNombre(ciudad.nombre);
          setPais(ciudad.pais);
          setPoblacion(ciudad.poblacion);
          setImagen(ciudad.imagen);
          setAtractivos(ciudad.atractivos);
          setCultura(ciudad.cultura);
        }
      }
      cargarCiudad();
    }
  }, [id]);

  // Pasar imagen a formato base64
  function gestionarImagen(e) {
    const file = e.target.files[0]; 

    if (file) {
      // Validaciones

      // Si lo enviado NO es una imagen
      if (!file.type.startsWith("image/")) {
        setError("Solo se permiten archivos de imagen.");
        return;
      }
      
      // Si el tamaño de la imagen es mayor a 1MB
      const maxSize = 1 * 1024 * 1024; 

      if (file.size > maxSize) {
        setError("La imagen no puede pesar más de 1MB.");
        return;
      }

      setError("");

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

   // Validar campos antes de enviar
   function validarFormulario() {
    if (!nombre.trim() || !pais.trim() || !poblacion.trim() || !imagen.trim() || !atractivos.trim() || !cultura.trim()) {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    setError("");
    return true;
  }

  async function envioFormulario(e) {
    e.preventDefault();

    if (!validarFormulario()) return;

    let ciudad = { nombre, pais, poblacion, imagen, atractivos, cultura };

    try {
      if (editando) {
        await actualizarCiudad(id, ciudad);
        alert("Ciudad actualizada.");
      } else {
        await addCiudad(ciudad);
        alert("Ciudad añadida.");
      }

      navigate("/");

      setNombre("");
      setPais("");
      setPoblacion("");
      setImagen("");
      setAtractivos("");
      setCultura("");
    } catch (error) {
      console.error("Error guardando la ciudad: ", error);
    }
  }


    return (
      <main>
        <h1 className="titulo">{editando ? "Editar " : "Añadir "} ciudad</h1>

        <form onSubmit={envioFormulario} className="formulario-ciudad">

          <label htmlFor="nombre-ciudad">Nombre</label>
          <input type="text" name="nombre-ciudad" value={nombre} id="nombre-ciudad" onChange={(e) => setNombre(e.target.value)}/>

          <label htmlFor="pais-ciudad">País</label>
          <input type="text" name="pais-ciudad" value={pais} id="pais-ciudad" onChange={(e) => setPais(e.target.value)}/>

          <label htmlFor="poblacion-ciudad">Población</label>
          <input type="number" name="poblacion-ciudad" value={poblacion} id="poblacion-ciudad" onChange={(e) => setPoblacion(e.target.value)}/>

          <label htmlFor="imagen-ciudad">Imagen</label>
          <input type="file" name="imagen-ciudad" accept="image/*" id="imagen-ciudad" onChange={gestionarImagen}/>

          <label htmlFor="atractivos-ciudad">Atractivos turísticos</label>
          <textarea rows="8" cols="50" name="atractivos-ciudad" value={atractivos} id="atractivos-ciudad" onChange={(e) => setAtractivos(e.target.value)}/>

          <label htmlFor="cultura-ciudad">Cultura</label>
          <textarea rows="8" cols="50" name="cultura-ciudad" value={cultura} id="cultura-ciudad" onChange={(e) => setCultura(e.target.value)}/>
          
          {error && <p className="texto-error">{error}</p>}

          <button type="submit" className="boton-accion">Enviar</button>
        </form>
      </main>
    ) 
}
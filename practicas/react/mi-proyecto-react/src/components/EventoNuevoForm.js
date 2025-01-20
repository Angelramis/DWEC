import { useState } from "react";
import "./EventoNuevoForm.css";

export default function EventoNuevoForm(addEvento) {
  {/*Variables de estado*/}
  const[titulo, setTitulo] = useState('');
  const[fecha, setFecha] = useState('');

  const evento = {
    titulo: titulo,
    fecha: fecha,
    id: Math.floor(Math.random() * 10000)
  };

  const resetForm = () => {
    setTitulo('');
    setFecha('');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); {/* Hacer que el formulario no recargue la página */}
    resetForm();
    addEvento(evento);
  };

  return (
    <form className="evento-nuevo-form" onSubmit={handleSubmit}>
      <label> {/*Segunda forma de crear form*/}
        <span>Título del evento</span>
        <input type="text"onChange={(e) => setTitulo(e.target.value)}/>
      </label>

      <label>
        <span>Fecha del evento</span>
        <input type="date" onChange={(e) => setFecha(e.target.value)}/>
      </label>
      <p>Título: {titulo} - Fecha: {fecha}</p>
      <p onClick={resetForm}>Restablecer formulario</p>
      <button>Submit</button>
    </form>
  )
}

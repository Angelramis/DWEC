import { useState } from 'react';
import './EventoNuevoForm.css';

export default function EventoNuevoForm({ addEvento }) {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [ciudad, setCiudad] = useState('alaior');

  const resetForm = () => {
    setTitulo('');
    setFecha('');
    setCiudad('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const evento = {
      titulo: titulo,
      fecha: fecha,
      ciudad: ciudad,
      id: Math.floor(Math.random()*10000)
    };

    console.log(evento);

    addEvento(evento);

    resetForm();
  }

  return (
    <form className='evento-nuevo-form' onSubmit={handleSubmit}>
      <label>
        <span>Título del Evento</span>
        <input type="text"
        onChange={(e)=>setTitulo(e.target.value)}
        value={titulo}
        />
      </label>
      <label>
        <span>Fecha del Evento</span>
        <input type="date"
        onChange={(e)=>setFecha(e.target.value)}
        value={fecha}
        />
      </label>
      <label>
        <span>Cuidad del evento</span>
        <select>
          <option value="alaior">Alaior</option>
          <option value="castell">Es Castell</option>
          <option value="ciutadella">Ciutadella</option>
          <option value="ferreries">Ferreries</option>
          <option value="mao">Maó</option>
          <option value="mercadal">Es Mercadal</option>
          <option value="mitjorn">Es Mitjorn</option>
          <option value="santlluis">Sant Lluís</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}

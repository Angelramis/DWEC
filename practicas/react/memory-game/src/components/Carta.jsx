import React, { Component } from 'react'
import './Carta.css'
export default function Carta({carta, handleEleccion, girada, deshabilitarClick}) {

  const handleClick = () => {
    if (!deshabilitarClick) {
      handleEleccion(carta);
    }
  };


  return (
    <div className='card'>
      <div className={girada ? "flipped" : ""}>
        <img className="front" src={carta.src} alt="frontal"></img>
        <img className="back" src="./cubierta.jpg" alt="cubierta" onClick={handleClick}></img>
      </div>
    </div>
  )

}

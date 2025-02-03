import React, { Component } from 'react'

export default function Carta({carta}) {

  return (
    <div className='card' key={carta.id}>
      <img src={carta.src} alt="frontal"></img>
      <img src="./img/cubierta.jpg" alt="cubierta"></img>
    </div>
  )

}

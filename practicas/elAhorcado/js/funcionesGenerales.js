
// Función para actualizar el dibujo del ahorcado según los intentos restantes.
function actualizarDibujo(contadorIntentos) {
  switch(contadorIntentos) {
    case 7:
      dibujo.src = "../assets/ahorcado/ahorcado_7.png"
      break;
    case 6:
      dibujo.src = "../assets/ahorcado/ahorcado_6.png"
      break;
    case 5:
      dibujo.src = "../assets/ahorcado/ahorcado_5.png"
      break;
    case 4:
      dibujo.src = "../assets/ahorcado/ahorcado_4.png"
      break;
    case 3:
      dibujo.src = "../assets/ahorcado/ahorcado_3.png"
      break;
    case 2:
      dibujo.src = "../assets/ahorcado/ahorcado_2.png"
      break;
    case 1:
      dibujo.src = "../assets/ahorcado/ahorcado_1.png"
      break;
    case 0:
      dibujo.src = "../assets/ahorcado/ahorcado_0.png"
      break;
  }
}



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

// Rellenar numero con ceros
function rellenarConCeros(num, cifra) {
  num = String(num); // Pasar a cadena
  while (num.length < cifra) {
    num = "0" + num;
  }
  return num;
}

// Función para guardar el registro de la partida en LS
// o sobreescribir registro si se ha usado una palabra ya usada y mejorado.
function guardarRegistro(palabra, numErrores, tiempoTotal) {
  // Obtener registros guardados si hay.
  let registros = JSON.parse(localStorage.getItem('registrosJuego')) || [];

  // Buscar si existe un registro para la palabra usada
  let registroAnterior = registros.find((registro) => registro.palabra === palabra);

  // Si ya existe un registro de la misma palabra
  if (registroAnterior) {
    // Actualizar errores si los actuales son menos
    if (numErrores < registroAnterior.numErrores) {
      registroAnterior.numErrores = numErrores;
    }
    // Actualizar tiempo si el actual es menor
    if (tiempoTotal < registroAnterior.tiempoTotal) {
      registroAnterior.tiempoTotal = tiempoTotal;
    }
  } else {
    // Añadir nuevo registro si no existe para esta palabra
    registros.push({palabra, numErrores, tiempoTotal});
  }

  // Guardar registros actualizados
  localStorage.setItem('registrosJuego', JSON.stringify(registros));
}
/* Captura de elementos del DOM */
let dibujo = document.getElementById('img_dibujo');
let palabraOculta = document.getElementById('palabra_oculta');
let crono = document.getElementById('crono');
let intentos = document.getElementById('intentos');
let errores = document.getElementById('errores');
let div_letras = document.getElementById('div_letras');
let letras = document.getElementsByClassName('letra');
let cuentaAtras = document.getElementById('cuenta_atras');

/* Variables */

let palabras = ["menorca", "programacion", "aeropuerto", "asiento", "teclado", "vacaciones"];
let palabraElegida = "";
let palabraVisible = [];
let contadorIntentos = parseInt(intentos.innerText);
let contadorErrores = parseInt(errores.innerText);


// Elegir una palabra aleatoria y mostrar con barras bajas.
function elegirMostrarPalabra() {
  // Elegir una palabra aleatoria del array palabras
  palabraElegida = palabras[Math.floor(Math.random() * palabras.length)];

  // Pasar la palabra elegida a mayúsculas
  palabraElegida = palabraElegida.toUpperCase();
  console.log(palabraElegida);

  // Ocultar la palabra con guiones bajos
  for (let i = 0; i < palabraElegida.length; i++) {
      palabraVisible = palabraVisible + "_";
  }
  
  // Mostrar la palabra oculta en el HTML.
  palabraOculta.innerHTML = palabraVisible;
}

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


elegirMostrarPalabra();
actualizarDibujo(contadorIntentos);

// EVENTOS

div_letras.addEventListener('click', function(e) {

  let letraCorrecta = false;
  let letraElegida = e.target;
  let letraPalabraElegida = null;

  // Si la letra clickada no ha sido usada
  if(letraElegida.classList.contains('letra') &&
  !letraElegida.classList.contains('letra_incorrecta') &&
  !letraElegida.classList.contains('letra_correcta')) {

    // Comprobar si el value de la letra existe en la palabra elegida recorriendo cada caracter.
    for (let i = 0; i < palabraElegida.length; i++) {
      if (letraElegida.value == palabraElegida[i]) {
        console.log("La letra presionada existe en la palabra");

        letraPalabraElegida = palabraElegida[i];

        letraCorrecta = true;
      }
    }

    if (letraCorrecta == false) {
        /* Añadir a la letra clase incorrecta */
        letraElegida.classList.toggle('letra_incorrecta');

        /* restar intento y sumar error */
        contadorIntentos = parseInt(contadorIntentos) -1;
        intentos.innerText = contadorIntentos;

        contadorErrores = parseInt(contadorErrores) + 1;
        errores.innerText = contadorErrores;

    } else if (letraCorrecta == true) {
      /* Añadir a la letra clase correcta */
      letraElegida.classList.toggle('letra_correcta');

      // mostrar letra acertada en palabra html
      // for (let i = 0; i < palabraElegida.length; i++) {
      //   if (letraElegida.value == letraPalabraElegida[i]) {
      //     letraPalabraElegida[i] = letraElegida;
      //   }
      // }
      // palabraOculta.innerHTML = palabraElegida;
    }

  }

  actualizarDibujo(contadorIntentos);
}, false)



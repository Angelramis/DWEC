/* Captura de elementos del DOM */
let dibujo = document.getElementById('img_dibujo');
let palabraVisibleP = document.getElementById('palabra_visible_p');
let crono = document.getElementById('crono');
let intentos = document.getElementById('intentos');
let errores = document.getElementById('errores');
let divLetras = document.getElementById('div_letras');
let letras = document.getElementsByClassName('letra');
let cuentaAtras = document.getElementById('cuenta_atras');
let textoPartida = document.getElementById('texto_partida');

/* Variables */

let palabras = ["menorca", "programacion", "aeropuerto", "asiento", "teclado", "vacaciones", "valencia"]; // array de strings
let palabraElegida = ""; // String
let palabraVisible = []; // Array de chars
let contadorIntentos = parseInt(intentos.innerText); // int
let contadorErrores = parseInt(errores.innerText); // int
let palabraAdivinada = false; // boolean

function mostrarPalabra() {
  palabraVisibleP.innerHTML = null; // resetear HTML de palabra 

  // Mostrar la palabra visible en el HTML
  palabraVisibleP.innerHTML = palabraVisible.join(""); // Array a string y sin separadores

  console.log(palabraVisible);
}

function elegirPalabra() {
  // Elegir una palabra aleatoria del array palabras
  palabraElegida = palabras[Math.floor(Math.random() * palabras.length)];

  // Pasar la palabra elegida a mayúsculas
  palabraElegida = palabraElegida.toUpperCase();
  console.log(palabraElegida);

  // Ocultar la palabra visible con guiones bajos
  for (let i = 0; i < palabraElegida.length; i++) {
      palabraVisible[i] = "_";
  }
  
}


elegirPalabra();
mostrarPalabra();

actualizarDibujo(contadorIntentos); // funcionesGenerales.js



// EVENTOS

divLetras.addEventListener('click', function(e) {

  let letraCorrecta = false;
  let letraElegida = e.target;

  // Si la letra clickada no ha sido usada
  if(letraElegida.classList.contains('letra') &&
  !letraElegida.classList.contains('letra_incorrecta') &&
  !letraElegida.classList.contains('letra_correcta')) {

    // Comprobar si la letra existe en la palabra elegida y asignarla
    for (let i = 0; i < palabraVisible.length; i++) {
      if (letraElegida.value == palabraElegida[i]) {
        console.log("La letra presionada existe en la palabra");

        // char de palabra visible se vuelve el valor de la letra correcta elegida 
        palabraVisible[i] = letraElegida.value;
        letraCorrecta = true;
      }
    }

    // Si la letra no es correcta
    if (letraCorrecta == false) {
        /* Añadir a la letra clase incorrecta */
        letraElegida.classList.toggle('letra_incorrecta');

        /* Restar intento y sumar error */
        contadorIntentos = parseInt(contadorIntentos) -1;
        intentos.innerText = contadorIntentos;

        contadorErrores = parseInt(contadorErrores) + 1;
        errores.innerText = contadorErrores;

    } else if (letraCorrecta == true) {
      /* Añadir a la letra clase correcta */
      letraElegida.classList.toggle('letra_correcta');

      // Mostrar en html la palabra visible actualizada
      mostrarPalabra();
    }

    palabraAdivinada = true;

    /* Lógica si adivina o no, todas las letras */
    for (let i = 0; i < palabraVisible.length; i++) {
      if (palabraVisible[i] == '_') {
          palabraAdivinada = false;
      }
    }

    if (palabraAdivinada == true) {
      // podria hacer que llamara una funcion que gestionara el crono etc.
      textoPartida.innerHTML = "Has adivinado la palabra";
      console.log(palabraVisible);
    }
  }


  actualizarDibujo(contadorIntentos);
}, false)



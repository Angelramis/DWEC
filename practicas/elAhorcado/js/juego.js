/* Captura de elementos del DOM */
let dibujo = document.getElementById('img_dibujo');
let palabraVisibleP = document.getElementById('palabra_visible_p');
let intentos = document.getElementById('intentos');
let errores = document.getElementById('errores');
let divLetras = document.getElementById('div_letras');
let letras = document.getElementsByClassName('letra');
let cronoHTML = document.getElementById('crono');
let tiempoAtrasHTML = document.getElementById('cuenta_atras');
let textoPartida = document.getElementById('texto_partida');

/* Variables */

let palabras = ["menorca", "programacion", "aeropuerto", "asiento", "teclado", "vacaciones", "valencia"]; // array de strings
let palabraElegida = ""; // String
let palabraVisible = []; // Array de chars
let contadorIntentos = parseInt(intentos.innerText); // int
let contadorErrores = parseInt(errores.innerText); // int
let palabraAdivinada = false; // boolean
let tiempo = new Date();
let elCrono;
let primeraLetraPulsada = false;
let tiempoAtras = new Date();
let elTiempoAtras;

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

/* Funciones CRONÓMETRO */

tiempo.setHours(0, 0, 0, 0);

function crono() {
  let horas = tiempo.getHours();
  let minutos = tiempo.getMinutes();
  let segundos = tiempo.getSeconds();

  segundos += 1;
  tiempo.setSeconds(segundos);

  if (segundos == 60) {
    segundos = 0;
    minutos += 1;
    tiempo.setMinutes(minutos);
  }

  if (minutos == 60 ) {
    horas += 1;
    minutos = 0;
    tiempo.setHours(horas);
  }
  
  horas = rellenarConCeros(horas, 2);
  minutos = rellenarConCeros(minutos, 2);
  segundos = rellenarConCeros(segundos, 2);

  let horaActual = horas + ":" + minutos + ":" + segundos;

  cronoHTML.innerHTML = horaActual;
}

function reiniciarCrono() {
  tiempo.setHours(0, 0, 0, 0);
  cronoHTML.innerHTML = "00:00:00";
}

// Función para iniciar el crono
function iniciarCrono() {
  elCrono = setInterval(crono, 1000);
}

function pararCrono() {
  clearInterval(elCrono);
}


/* Funciones CUENTA ATRÁS */

function cuentaAtras() {
  let segundos = tiempoAtras.getSeconds();

  segundos = segundos - 1;
  tiempoAtras.setSeconds(segundos);

  // Si la cuenta atrás llega a 0 segundos
  if (segundos == 0) {
    console.log("0 segundos");
    restarIntentoYSumarError();
    reiniciarCuentaAtras();
  }


  let horaActual =  segundos;

  tiempoAtrasHTML.innerHTML = horaActual;
}

function reiniciarCuentaAtras() {
  tiempoAtras.setHours(0, 0, 10, 0);
}

// Función para iniciar el crono
function iniciarCuentaAtras() {
  tiempoAtras.setHours(0, 0, 10, 0);
  elTiempoAtras = setInterval(cuentaAtras, 1000);
}

function pararCuentaAtras() {
  clearInterval(elTiempoAtras);
}


/* Funciones del juego */

function restarIntentoYSumarError() {
  /* Restar intento y sumar error, actualizandose en HTML */
  contadorIntentos = parseInt(contadorIntentos) -1;
  intentos.innerText = contadorIntentos;

  contadorErrores = parseInt(contadorErrores) + 1;
  errores.innerText = contadorErrores;
}


elegirPalabra();
mostrarPalabra();
actualizarDibujo(contadorIntentos); // funcionesGenerales.js




// EVENTOS

divLetras.addEventListener('click', function(e) {

  let letraCorrecta = false;
  let letraElegida = e.target;

  // Si ha perdido, no dejar que pulse las letras
  if (contadorErrores >= 7) {
    exit();
  }

  // Gestión si es la primera vez que pulsa una tecla
  if (!primeraLetraPulsada) {
    iniciarCrono();
    iniciarCuentaAtras(); 
    primeraLetraPulsada = true;
  } 

  // Al haber pulsado una letra, reinicar cuenta atrás
  reiniciarCuentaAtras();

  // Si la letra clickada no ha sido usada
  if (letraElegida.classList.contains('letra') &&
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


        restarIntentoYSumarError();

        /* Gestión al PERDER la partida */
        if (contadorErrores == 7) {
          textoPartida.innerHTML = "Has perdido. Intentos acabados";
          pararCrono();
          pararCuentaAtras();
          // Que no pueda pulsar ninguna tecla de las letras
          exit();
        }

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

    /* Gestión al GANAR la partida */
    if (palabraAdivinada == true) {
      textoPartida.innerHTML = "Has adivinado la palabra";
      pararCrono();
      pararCuentaAtras();
      exit();
    }
  }




  actualizarDibujo(contadorIntentos);
}, false)




/*
Ejercicio: hacer una página donde se cree una cookie al iniciarse.
Crear un cronometro cuenta atrás de 30 segundos, y una vez finalizado, eliminar cookie.
*/

// Captura de elementos
let cronoElement = document.getElementById("crono");


// Variables
let date = new Date();
let crono;
let nombre;
let segundos;

// Eventos
window.onload = crearCookie();

function crearCookie() {
  nombre = prompt("Introduce tu nombre");
  // Añadir nombre a cookie
  document.cookie = nombre;
  // Añadir caducidad de 30 segundos
  date.setSeconds(30000); 
  crono = setInterval(gestionCrono, 1000);
 
}


function gestionCrono() {
  segundos = date.getSeconds();
  segundos = segundos - 1;
  date.setSeconds(segundos);

  if (segundos == 0o0) {
    console.log("Crono terminado");
  }

  segundos = rellenarConCeros(segundos, 2);


  cronoElement.innerHTML = segundos;
}


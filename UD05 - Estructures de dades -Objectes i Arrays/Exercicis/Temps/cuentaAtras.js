// Ejercicio 2: Hacer una cuenta atrás de segundos en el que al pasar 10 segundos, se termine el tiempo
// y muestre un mensaje de finalizado.

//Capturar elementos
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reiniciar = document.getElementById("reiniciar");
let elCrono = document.getElementById("elCrono");

// Variables
let tiempo = new Date();

//Eventos

start.addEventListener('click', function(){
  this.disabled = true;
  stop.disabled = false;
  reiniciar.disabled = true;

  setInterval(crono, 1000);
}, false);

stop.addEventListener('click', function(){
stop.disabled = true;
start.disabled = true;
reiniciar.disabled = false;

}, false);

reiniciar.addEventListener('click', function(){
  this.disabled = true;
  start.disabled = false;
  stop.disabled = true;
  
}, false);

function crono() {
  let segundos = tiempo.getSeconds();

  segundos = rellenarConCeros(segundos, 2);
  
  segundos = segundos -1;

  let tiempoActual = segundos;

  elCrono.innerHTML = tiempoActual;
}
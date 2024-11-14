// --- Ejercicio 1: Crear un cronometro con boton start/stop/reiniciar

// Captura dels elements del DOM.
let laHora = document.getElementById("laHora");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reiniciar = document.getElementById("reiniciar");

// Variables.
let elCrono;
let laMevaData = new Date();

// Events.
start.addEventListener('click', function() {
  elCrono = setInterval(crono, 1000);
  this.disabled = true;
  stop.disabled = false;
  reiniciar.disabled = true;
}, false);

stop.addEventListener('click', function() {
  clearInterval(elCrono);
  this.disabled = true;
  start.disabled = false;
  start.innerHTML = "Continuar";
  reiniciar.disabled = false
}, false);

reiniciar.addEventListener('click', function() {
  setTimeout(reiniciarCrono, 3000);
  this.disabled = true;
  stop.disabled = true;
}, false);

laMevaData.setHours(0, 0, 0, 0);

function crono() {

  let horas = laMevaData.getHours();
  let minutos = laMevaData.getMinutes();
  let segundos = laMevaData.getSeconds();

  segundos += 1;
  laMevaData.setSeconds(segundos);

  if (segundos == 60) {
    segundos = 0;
    minutos += 1;
    laMevaData.setMinutes(minutos);
  }

  if(minutos == 60 ) {
    horas += 1;
    minutos = 0;
    laMevaData.setHours(horas);
  }
  horas = rellenarConCeros(horas, 2);
  minutos = rellenarConCeros(minutos, 2);
  segundos = rellenarConCeros(segundos, 2);

  let horaActual = horas + ":" + minutos + ":" + segundos;

  laHora.innerHTML = horaActual;
}

function reiniciarCrono() {
  laMevaData.setHours(0, 0, 0, 0);
  laHora.innerHTML = "00:00:00";
  start.disabled = false;
  start.innerHTML = "Start";
}

reiniciarCrono();


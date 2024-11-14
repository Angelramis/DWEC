
// Objeto date

// let miFecha = new Date();

// console.log(miFecha); // Fecha y hora con segundos actual

// let horas = miFecha.getHours();
// let minutos = miFecha.getMinutes();
// let segundos = miFecha.getSeconds();
// let milisegundos = miFecha.getMilliseconds();


// horas = rellenarConCeros(horas,2);
// minutos = rellenarConCeros(minutos,2);
// segundos= rellenarConCeros(segundos,2);

// let horaActual = horas + ":" + minutos +  ":" + segundos;

// console.log(horaActual);

// Pasar la hora actual a pm/am






// Funciones:
//setTimeout(funcion_a_llamar, milisegundos) // Pasado un timepo, llama una función
//setinterval(funcion_a_llamar, milisegundos) //intervalo en milisegundos en llamar una funcion
//clearInterval() // limpiar intervalo
//clearTimeout()



// Ejercicio de ejemplo

// funcion que pinta un reloj en el html
// function crono() {
//   let miFecha = new Date();

//   let laHora = document.getElementById("hora");

//   let horas = miFecha.getHours();
//   let minutos = miFecha.getMinutes();
//   let segundos = miFecha.getSeconds();

//   horas = rellenarConCeros(horas,2);
//   minutos = rellenarConCeros(minutos,2);
//   segundos= rellenarConCeros(segundos,2);

//   let horaActual = horas + ":" + minutos + ":" + segundos;

//   laHora.innerHTML = horaActual;
// }

// let elCrono;
// // evento que llama a la funcion crono para actualizarse
// window.onload = function () {
//   // window es la ventana, onload cuando se carga
//   elCrono = setInterval(crono, 1000); // un segundo en milisegundos
// };




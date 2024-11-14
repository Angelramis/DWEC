//Ejercicio 1

// window.addEventListener('click', function() {
//   console.log("Hiciste click");
// }, false);

// let button = document.querySelector("button"); // Obtener el primer button sin id

// //Manera que no es muy usada
// button.addEventListener('click', clic);

// function clic() {
//   console.log("El botón se ha clickado.");
//   button.removeEventListener('click', clic);
// }

//Ejercicio 2

// let boton = document.querySelector("button");

// //Idenfiticar con evento que parte del ratón se pulsa en el botón
// boton.addEventListener('mousedown', function(e) {
// // console.log(e);
// // console.log(e.button);

// if(e.button == 0) { 
//   console.log("Botón izq.");
// } else if (e.button == 1) {
//   console.log("Boton de en medio");
// } else if (e.button == 2) {
//   console.log("Boton derecho.");
// } else {
//   console.log("Boton desconocido");
// }


// }, false);

//Ejercicio 3

// let parrafo = document.getElementsByTagName("p")[0];
// let boton = document.getElementsByTagName("p")[0];


// parrafo.addEventListener('mousedown', function() {
// console.log("Controlador de evento para el párrafo");

// }, false);

// boton.addEventListener('mousedown', function(e) {
//   console.log("Controlador de evento para el botón");
//   if(e.button == 2) {
//     e.stopPropagation(); // a partir del click puesto, parar la propagación de eventos
//   }
// }, false);

// Ejercicio 4

// document.addEventListener('click', function(e) {
//   // console.log(e.target.nodeName);
//   if(e.target.nodeName.toLowerCase() == "button") { // Hacer comparaciones de cadenas en minusculas
//     console.log("click en", e.target.textContent);
//   }


// }, false);


// Ejercicio 5

// let enlace = document.querySelector('a');

// // console.log(enlace);

// enlace.addEventListener('click', function(e) {
//   console.log("Correcto");
//   e.preventDefault();

// }, false);


// Ejercicio 6 - Eventos de teclado
// al apretar la tecla v, el background-color se vuelve violeta
// window.addEventListener('keydown', function(e) {
//   if(e.key == "v") {
//     document.body.style.background = "violet";
//   }

// }, false);

// // Al levantar la tecla, volver a color blanco.
// window.addEventListener('keyup', function(e) {
//   if(e.key == "v") {
//     document.body.style.background = "";
//   }

// }, false);

// Ejercicio 7
// al pulsar ctrl y espacio, cambiar el color de fondo
// window.addEventListener('keydown', function(e) {
//   if(e.ctrlKey && e.key == " ") {
//     document.body.style.background = "violet";
//   }

// }, false);

// Ejercicio 8
// Creamos cada vez que se hace un click un div en la posicion del raton.
window.addEventListener('click', function(e) {
let punto = document.createElement("div");
punto.className = "dot";
punto.style.left = (e.pageX -4) + "px";
punto.style.top = (e.pageY -4) + "px";

if(e.pageY >= 200 ) {
  console.log("Tocado");
 
}

document.body.appendChild(punto);
}, false);
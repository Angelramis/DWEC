/* Captura de elementos del DOM */
let dibujo = document.getElementById('img_dibujo');
let palabraOculta = document.getElementById('palabra_oculta');
let crono = document.getElementById('crono');
let intentos = document.getElementById('intentos');
let errores = document.getElementById('errores');
let letras = document.getElementsByClassName('letra');
let cuentaAtras = document.getElementById('cuenta_atras');
let palabras = ["menorca", "programacion", "aeropuerto", "asiento", "teclado", "vacaciones"];


// elegir una palabra aleatoria
let palabraElegida = palabras[4];


// pasar palabra elegida a mayusculas
palabraElegida = palabraElegida.toUpperCase();
console.log(palabraElegida);



// mostrar palabra elegida ocultada en html con barras bajas


